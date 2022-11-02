# SPA 쇼핑몰

## 생각해보기

별도의 라이브러리 없이 SPA 구현하기. SPA를 구성하는 부분에서 중요한 것이 URL 라우팅 처리인데, 대부분 라이브러리나 프레임워크 차원에서 기본적으로 지원을 많이 하기 때문에 직접 구현해볼 일은 크게 없었을 것이다.

## 구현하기

### 구조

#### URL 라우팅 처리하기

가장 먼저 생각해보고 고민해볼 것은, URL 라우팅 처리를 하는 방법이다. 이를 처리할 수 있는 간단한 방법은 location.pathname을 이용해 URL별로 분기를 태우는 것이다.

요구사항으로는 URL 별로 아래의 페이지를 처리하라고 되어있다.

- / : 상품 목록 페이지
- /products/:pruductId : 상품 상세 페이지
- /cart : 장바구니 페이지

위의 규칙을 location.pathname을 이용해 렌더링 해야 한다면 아래와 같은 로직을 만들 수 있다.

```javascript
const { pathname } = location;
if (pathname === "/") {
  //상품 목록 페이지 렌더링하기
} else if (pathname.indexOf("/products/") === 0) {
  const [, , productId] = pathname.split("/");
  //상품 상세 페이지 렌더링하기
} else if (pathname === "/cart") {
  // 장바구니 페이지 렌더링하기
}
```

각 페이지를 렌더링 하는 컴포넌트를 만든다고 하면, 아래와 같이 3개의 컴포넌트로 표현할 수 있습니다.
`ProductListPage`, `ProductDetailPage`, `CartPage`

그리고 맨 앞에 App 컴포넌트를 두고 URL 라우팅에 따라 위 세 가지 컴포넌트를 렌더링 하게 만든다. 이렇게 하여 URL 라우팅의 책임을 App 컴포넌트가 지게 하고, 해당 책임에 따른 동작에 맞게 알맞은 페이지를 렌더링 하는 구조라면 각 페이지는 서로에 대한 의존성 없이 동작할 수 있게 될 것이다.

#### App 컴포넌트와 Page 컴포넌트

먼저 각 페이지를 렌더링하는 컴포넌트를 아래와 같이 작성한다.

```javascript
//ProductListPage.js
export default function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";
  $page.innerHTML = "<h1>상품 목록</h1>";
  this.render = () => {
    $target.appendChild($page);
  };
}
```

그리고 위의 ProductListPage를 렌더링 해볼까요?

```javascript
//App.js
import ProductListPage from "./ProductListPage";
export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = "";
    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    }
  };
  this.route();
}
```

그리고 App 컴포넌트를 새로 만드는 index.js를 작성합니다.

```javascript
//index.js
import App from "./App.js";
new App({ $target: document.querySelector("App") });
```

index.html은 아래와 같이 수정합니다.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>커피캣 스토어</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <main class="App"></main>
    <script src="/src/index.js" type="module"></script>
  </body>
</html>
```

로컬 서버 실행 후 루트 경로로 접속해보면 렌더링 되는 것을 확인할 수 있습니다. 실제 페이지 내 구현하기에 앞서, 나머지 페이지도 만들어서 연결해보도록 합니다.

```javascript
// ProductDetailPage.js
export default function ProductDetailPage({ $target, productId }) {
  this.state = {
    productId,
  };
  const $page = document.createElement("div");
  $page.className = "ProductDetailPage";
  $page.innerHTML = "<h1>품 정보</h1>";
  this.render = () => {
    $target.appendChild($page);
  };
}
```

```javascript
//CartPage.js
export default function CartPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "CartPage";
  $page.innerHTML = "CartPage";
  this.render = () => {
    $target.appendChild($page);
  };
}
```

이후, App 컴포넌트의 route 코드를 아래처럼 변경합니다.

```javascript
//App.js
import ProductListPage from "./ProductListPage.js";
import ProductDetailPage from "./ProductDetailPage.js";
import CartPage from "./CartPage.js";
export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = "";
    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf("/products/") === 0) {
      const [, , productId] = pathname.split("/");
      new ProductDetailPage({ $target, productId }).render();
    } else if (pathname === "/cart") {
      new ProductListPage({ $target }).render();
    }
  };
  this.route();
}
```

URL을 변경해가면서 접속하면, URL에 따라 렌더링 되는 페이지가 달라지는 것을 확인할 수 있습니다.
우선 기본적인 routing 처리는 끝났습니다.

---

## 상품 목록 페이지 구현하기

각 페이지를 나누었으니 이젠 페이지별 구현을 할 차례입니다. 가장 먼저 상품 목록 페이지를 구현합니다.

### 상품 목록 API 연동하기

API 연동에 앞서, 반복되는 코드 방지와 예외처리를 위해 아래와 같이 request 함수를 만들어서 쓰도록 합시다.

```js
//api.js
const API_END_POINT = API_END_POINT;
export const request = async (url, options = {}) => {
  try {
    const fullUrl = `${API_END_POINT}${url}`;
    const response = await fetch(fullUrl, options);

    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error("API 통신 실패");
  } catch (e) {
    alert(e.message);
  }
};
```

```js
// ProductListPage.js
import { request } from "./api.js";
export default function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";
  $page.innerHTML = "<h1>상품 목록</h1>";
  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };
  const fetchProducts = async () => {
    const products = await request("/products");
    this.setState(products);
  };
  //페이지 생성 시 API 요청해오도록 하는 처리
  fetchProducts();
}
```

이렇게 하면, new ProductListPage를 통해 ProductListPage가 생성이 되면 fetchProducts함수를 실행하면서 this.state에 불러온 상품 목록을 가지고 있게 될 것입니다.

상품 목록도 불러왔으니 이제 상품 목록을 렌더링 할 차례인데, 해당 렌더링 코드를 ProductListPage 내에서 작성해도 좋지만 ProductList라는 컴포넌트를 정의하고, 이 컴포넌트로 상품 목록을 렌더링 해보도록 합시다.

```js
// ProductListPage.js
export default function ProductList({ $target, initialState }) {
  const $productList = document.createElement("ul");
  $target.appendChild($productList);
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    if (!this.state) {
      return;
    }
    $productList.innerHTML = `${this.state
      .map(
        (product) => `<li class="Product">
        <img src="${product.imageUrl}" alt="">
          <div class="Product__info">
            <div>${product.name}</div>
            <div>${product.price}~</div>
          </div>
        </img>
      </li>`
      )
      .join("")}`;
  };
  this.render();
}
```

그리고 ProductListPage 컴포넌트에서 ProductList 컴포넌트를 생성하도록 합시다.

```js
//ProductListPage.js
import ProductList from "./ProductList.js";
import { request } from "./api.js";
export default function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";
  $page.innerHTML = "<h1>상품 목록</h1>";
  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };
  const fetchProducts = async () => {
    const products = await request("/products");
    this.setState(products);
  };
  const productList = new ProductList({
    $target: $page,
    initialState: this.state,
  });
  //페이지 생성 시 API 요청해오도록 하는 처리
  fetchProducts();
}
```

ProductList 내에서도 다른 페이지 컴포넌트와 마찬가지로 ${target}을 생성자 파라미터로 받아 해당 DOM Element에 렌더링 하도록 되어있는 구조인데, 여기에 페이지 컴포넌트의 DOM Element를 넘김으로써 해당 페이지 내에 ProductList의 render함수 내용이 렌더링 되도록 합니다.

이제 렌더링이 잘 되는지 확인합니다.
현재 컴포넌트는 아래와 같은 구조와 관계를 가집니다.

1. App
2. ProductListPage,

- ProductList

4. ProductDetailPage, CartPage

---

## 페이지 이동 처리하기

상품 목록 페이지를 만들었으니 이제 상품 상세 페이지를 만들어 볼 차례입니다.
그러려면 상품 목록의 상품을 클릭했을 때 상품 상세 페이지로 이동이 되게 만들어야 합니다.
가장 단순한 방법은 a 태그를 이용한 방법입니다.
ProductList 컴포넌트의 render함수 내에 아래와 같이 a태그를 넣습니다.

```js
//ProductList.js
export default function ProductList({ $target, initialState }) {
  const $productList = document.createElement("ul");
  $target.appendChild($productList);
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    if (!this.state) {
      return;
    }
    $productList.innerHTML = `${this.state
      .map(
        (product) => `<li class="Product">
        <a href="/products/${product.id}">
            <img src="${product.imageUrl}" alt="">
              <div class="Product__info">
                <div>${product.name}</div>
                <div>${product.price}~</div>
              </div>
            </img>
        </a>
      </li>`
      )
      .join("")}`;
  };
  this.render();
}
```

이것만으로 페이지 이동은 잘 작동하지만 이렇게 하면 페이지 이동 시마다 페이지를 매번 새로 불러오게 됩니다. Single Page Application이라는 말을 잘 생각해보면, 이런 식으로 매번 페이지를 새로 불러오는 방식이 아니라 클라이언트에서 페이지가 변경되는 부분만 새로 그리도록 처리를 해야 하는 것을 떠올릴 수 있을 것입니다.

이를 해결하기 위해서 알아야 하는 것은 HTML History API입니다. 해당 API에 대해서 잘 모르시는 분들을 위해 https://developer.mozilla.org/ko/docs/Web/API/History_API 링크를 첨부합니다.

---

`Hisory API`

> DOM의 Window 객체는 history 객체를 통해 브라우저의 세션 기록에 접근할 수 있는 방법을 제공합니다. history는 사용자를 자신의 방문 기록 앞과 뒤로 보내고 기록 스택의 컨텐츠도 조작할 수 있는, 유용한 메서드와 속성을 가집니다.

`개념과 사용 방법`

> 사용자 방문 기록에서 앞뒤로 이동할 때는 `back()`,`forward()`,`go()`메서드를 사용합니다.

`앞으로 가기와 뒤로 가기`

> **_history.forward()_**

> **_history.back()_**

`기록의 특정 지점으로 이동`

go()메서드를 사용하면 세션 기록에서 현재 페이지의 위치를 기준으로, 상대적인 거리에 위치한 특정 지점까지 이동할 수 있습니다.

> 한 페이지 뒤로 `history.go(-1)`

> 한 페이지 앞으로 `history.go(1)`

매개변수로 지정한 숫자를 바꾸면 2 페이지씩 이동하는 것도 가능합니다. go()의 다른 사용법은 매개변수를 제공하지 않거나 0을 제공해 현재 페이지를 다시 불러오는 것입니다.

---

기본적으로 location.href 등을 이용해 URL 변경 처리를 하면, 브라우저는 해당 페이지로 이동하면서 페이지를 새로 불러오게 됩니다. history.pushState를 이용하면 URL만 업데이트하면서 웹 브라우저의 기본적인 페이지 이동 처리가 되는 것을 방지할 수 있습니다.

---

`history.pushState`

> React 에서 페이지 전환할때 사용하는 react-router 는 history.push 를 통해 마치 SSR 처럼 브라우저 주소를 바꿔주고 동시에 Root 엘리먼트의 내용물도 바꿔준다. 이걸 순수 JS 로 구현하고자 한다면 history.pushState 를 사용하면 된다.

> History.pushState 는 페이지 이동 없이 주소만 바꿔준다. (브라우저의 뒤로가가 버튼이 활성화 된다.)브라우저 페이지를 이동하게 되면 window.onpopstate 라는 이벤트가 발생하게 되는데, pushState 를 했을때는 popstate 이벤트가 발생하지않고, 뒤 / 앞으로 가기를 클릭 했을때 popstate 이벤트가 발생하게 된다. 즉, pushState 와 popstate 둘을 이용하여 SPA 의 페이지 전환을 구현할 수 있다.

**_기본 형태_** - history.pushState(state, title, url);

- State : 브라우저 이동 시 넘겨줄 데이터 (popstate 에서 받아서 원하는 처리를 해줄 수 있음)

- Title : 변경할 브라우저 제목 (변경 원치 않으면 null)

- url : 변경할 주소

```js
window.onpopstate = function (e) {
  console.log(
    `${JSON.stringify(e.state)} | ${location.origin} | ${location.pathname}`
  );
};

var state = { page_id: 1, data: "test" };
var url = location.origin + "/myPage";
history.pushState(state, null, url);
```

위 코드를 실행하면 history.pushState 를 수행했을때 브라우저 주소에 /myPage 가 붙는걸 볼 수 있고,

뒤로가기를(원래 url) 한뒤 다시 앞으로(pushState로 추가된 url) 가기를 클릭 하면

콘솔 출력값으로 {"page_id":1,"data":"test"} | http://localhost:5000 | /myPage 가 출력된다.

---

이제 페이지 이동 처리 구현을 위한 준비는 끝났습니다. 화면 새로고침 없이 다른 페이지로 이동 처리를 하려면 아래 두 가지만 기억하시면 됩니다.

1. 이동할 페이지의 URL을 history.psuhState를 통해 변경함
2. App.js의 this.route 함수를 실행시킴

pushState를 통해 URL이 변경되는 것을 감지하기 위해서는 여러 가지 방법이 있겠지만, 여기에선 커스텀 이벤트를 통해서 처리해보록 할게요.

---

`커스텀 이벤트 디스패치`

> 자바스크립트를 사용하면 핸들러를 할당할 수 있을 뿐만 아니라 이벤트를 직접 만들 수도 있습니다.

> 이렇게 직접 만든 커스텀 이벤트(custom event)는 '그래픽 컴포넌트(graphical component)'를 만들 때 사용됩니다. 자바스크립트 기반 메뉴가 있다고 가정해 봅시다. 개발자는 메뉴의 루트 요소에 open(메뉴를 열었을 때 실행됨), select(항목을 선택했을 때 실행됨) 같은 이벤트를 달아 상황에 맞게 이벤트가 실행되게 할 수 있습니다. 이렇게 루트 요소에 이벤트 핸들러를 달아놓으면 바깥 코드에서도 이벤트 리스닝을 통해 메뉴에서 어떤 일이 일어났는지를 파악할 수 있습니다.

> 자바스크립트를 사용하면 새로운 커스텀 이벤트뿐만 아니라 목적에 따라 click, mousedown 같은 내장 이벤트를 직접 만들 수도 있습니다. 이렇게 만든 내장 이벤트들은 테스팅을 자동화할 때 유용합니다.

**_Event의 생성자_**

> 내장 이벤트 클래스는 DOM 요소 클래스같이 계층 구조를 형성합니다. 내장 이벤트 클래스 계층의 꼭대기엔 Event 클래스가 있습니다.

```js
//Event 객체는 다음과 같이 생성할 수 있습니다.
const event = new Event(type[, options]);
```

type – 이벤트 타입을 나타내는 문자열로 "click"같은 내장 이벤트, "my-event" 같은 커스텀 이벤트가 올 수도 있습니다.

options – 두 개의 선택 프로퍼티가 있는 객체가 옵니다.

bubbles: true/false – true인 경우 이벤트가 버블링 됩니다.
cancelable: true/false – true인 경우 브라우저 '기본 동작’이 실행되지 않습니다. 자세한 내용은 커스텀 이벤트 섹션에서 살펴보겠습니다.
아무런 값도 지정하지 않으면 두 프로퍼티는 기본적으로 {bubbles: false, cancelable: false}처럼 false가 됩니다.

**_dispatchEvent_**

이벤트 객체를 생성한 다음엔 elem.dispatchEvent(event)를 호출해 요소에 있는 이벤트를 반드시 '실행’시켜줘야 합니다(dispatch는 일을 '처리하다’라는 뜻을 가진 영어단어입니다 – 옮긴이).

이렇게 이벤트를 실행시켜줘야 핸들러가 일반 브라우저 이벤트처럼 이벤트에 반응할 수 있습니다. bubbles 플래그를 true로 해서 이벤트를 만든 경우 이벤트는 제대로 버블링 됩니다.

예시를 살펴봅시다. 자바스크립트를 사용해 click 이벤트를 만들고 실행 시켜 보았습니다. 버튼을 실제로 클릭하지 않았지만, 이벤트 핸들러가 동작하는 것을 확인할 수 있습니다.

```js
<button id="elem" onclick="alert('클릭!');">자동으로 클릭 되는 버튼</button>

<script>
  let event = new Event("click");
  elem.dispatchEvent(event);
</script>
```

**_요약_**
코드를 사용해 이벤트를 직접 생성하려면 먼저 이벤트 객체를 만들어야 합니다.

범용적으로 쓰이는 Event(name, options) 클래스의 생성자는 임의의 이벤트 이름과 두 개의 프로퍼티가 있는 options라는 객체를 받습니다.

bubbles: true 이면 이벤트는 버블링됩니다.
cancelable: true 이면 event.preventDefault()가 동작합니다.
이 외에 MouseEvent, KeyboardEvent 같은 네이티브 이벤트 클래스의 생성자들은 이벤트 특유의 프로퍼티를 받습니다. 마우스 이벤트의 clientX가 대표적인 예입니다.

이벤트를 직접 만드는 경우라면 CustomEvent 생성자를 써야 합니다. CustomEvent 생성자엔 detail이라는 추가 프로퍼티를 명시할 수 있는데, 여기에 이벤트 관련 정보를 저장해야 합니다. 이렇게 하면 모든 핸들러에서 event.detail을 통해 커스텀 이벤트의 정보를 알 수 있습니다.

커스텀 이벤트의 이름을 click나 keydown 같이 브라우저 내장 이벤트처럼 지을 수 있긴 한데, 이런 경우엔 아주 조심해야 합니다.
https://ko.javascript.info/dispatch-events

---

```js
const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

//커스텀 이벤트를 통해 ROUTE_CHANGE 이벤트 발생 시 onRouteChange 콜백 함수를 호출하도록 이벤트를 바인딩.
export const init = (onRouteChange) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};

// URL을 업데이트하고 커스텀 이벤트를 발생시키는 함수
export const routeChange = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};
```

그리고 App.js 내에 있는 this.route 함수와 router.js의 init함수를 연결합니다.

```js
// App.js
import ProductListPage from "./ProductListPage.js";
import ProductDetailPage from "./ProductDetailPage.js";
import CartPage from "./CartPage.js";
import { init } from "./router.js";
export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = "";
    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf("/products/") === 0) {
      const [, , productId] = pathname.split("/");
      new ProductDetailPage({ $target, productId }).render();
    } else if (pathname === "/cart") {
      new CartPage({ $target }).render();
    }
  };
  // ROUTE_CHANGE 이벤트 발싱 시 마다 App의 this.route 함수가 호출되게 하는 효과
  init(this.route);
  this.route();
}
```

이제 ProductList에서 a태그로 이동시키는 대신에, 아래 코드처럼 onClick 콜백 함수를 통해 처리하도록 변경합니다.

ProductList 컴포넌트를 아래와 같이 수정합니다.

```js
//ProductList
import { routeChange } from "./router.js";

export default function ProductList({ $target, initialState }) {
  const $productList = document.createElement("ul");
  $target.appendChild($productList);
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    if (!this.state) {
      return;
    }
    $productList.innerHTML = `${this.state
      .map(
        (product) => `<li class="Product">
            <img src="${product.imageUrl}" alt="">
              <div class="Product__info">
                <div>${product.name}</div>
                <div>${product.price}~</div>
              </div>
            </img>

      </li>`
      )
      .join("")}`;
  };
  this.render();
  $productList.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    const { productId } = $li.dataset;
    if (productId) {
      routeChange(`/products/${productId}`);
    }
  });
}
```

data-product-id라는 이름으로 custom attribute를 만들고, event delegation을 통해 pruductId을 뽑아와서 routeChange 함수를 통해 URL변경을 처리합니다.
이제 상품을 클릭하면, 화면 리로드 없이 페이지가 이동되는 것을 알 수 있습니다.

## 뒤로 가기 처리

이제 상품 목록에서 상품 상세 페이지로 이동은 잘 되지만, 뒤로 가기를 했을 때(백스페이스를 누르거나 브라우저에서 뒤로가기 버튼을 누르는 등)는 렌더링이 잘 안 되는 것을 확인할 수 있습니다.

이런 경우, window의 popstate 이벤트를 통해 처리할 수 있습니다. 위 이벤트를 통해 뒤로 가기나 앞으로 가기 등으로 통해 브라우저의 URL이 변경된 경우를 감지할 수 있습니다.

App.js에 아래 한 줄을 추가합니다.

```js
import ProductListPage from "./ProductListPage.js";
import ProductDetailPage from "./ProductDetailPage.js";
import CartPage from "./CartPage.js";
import { init } from "./router.js";
export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = "";
    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf("/products/") === 0) {
      const [, , productId] = pathname.split("/");
      new ProductDetailPage({ $target, productId }).render();
    } else if (pathname === "/cart") {
      new CartPage({ $target }).render();
    }
  };
  // ROUTE_CHANGE 이벤트 발싱 시 마다 App의 this.route 함수가 호출되게 하는 효과
  init(this.route);
  this.route();
  // 뒤로가기, 앞으로가기 발생 시 popstate 이벤트가 발생합니다.
  window.addEventListener("popstate", this.route);
}
```

이제 SPA의 URL routing 처리를 위한 기반 작업은 거의 끝났습니다. 이제 남은 작업은 남은 두 페이지를 구현하는 것입니다.

## 상품 상세 페이지 구현하기
