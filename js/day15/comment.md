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
