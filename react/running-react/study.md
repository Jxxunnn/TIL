# 러닝 리액트

## Chap4. 리액트의 작동 원리

### 4.1 페이지 설정

React는 뷰를 만들기 위한 라이브러리
ReactDOM은 UI를 실제로 브라우저에 렌더링할 떄 사용하는 라이브러리.

이런 설정이 브라우저에서 리액트를 사용하기 위한 최소한의 요구 사항이다.

### 4.2 리액트 엘리먼트

리액트는 브라우저 DOM을 갱신해주기 위해 만들어진 라이브러리이다. 리액트에서는 코드로 DOM API를 직접 조작하는 대신, 어떤 UI를 생성할 지 지시하면 리액트가 우리 명령에 맞춰 원소 렌더링을 조절해준다.

브라우저 DOM이 DOM 엘리먼트로 이루어지는 것처럼 가상 DOM은 리액트 엘리먼트로 이뤄진다. 리액트 엘리먼트는 개념상 HTML 엘리먼트와 비슷하지만 실제로는 자바스크립트 객체이다. 리액트 엘리먼트에 대응하는 실제 DOM 엘리먼트가 어떻게 생겨야 하는지 기술되어있다.

`리액트 엘리먼트는 단지 리액트에게 DOM 엘리먼트를 구성하는 방법을 알려주는 자바스크립트 리터럴에 불과하다.`

```js
<div id="root"></div>

    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
```

```html
<script>
  const 연어 = React.createElement(
    "h1",
    { id: "recipe-0", className: "june" },
    "구운 연어"
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(연어);
</script>
```

```js
const 연어 = React.createElement(
  "h1",
  { id: "recipe-0", className: "june" },
  "구운 연어"
);
```

첫 번째 인자는 만들려는 엘리먼트의 타입을 정의한다.
두 번째 인자는 엘리먼트의 프로퍼티를 표현한다.
세 번째 인자는 만들려는 엘리먼트의 여는 태그와 닫는 태그 사이에 들어가야 할 자식 노드들을 표현한다.

`렌더링 과정에서 리액트는 이 엘리먼트를 실제 DOM 엘리먼트로 변환한다.`

## ReactDOM

ReactDOM에는 리액트 엘리먼트를 브라우저에 렌더링하는 데 필요한 모든 도구가 들어있다. 리액트 엘리먼트와 그 모든 자식 엘리먼트를 함께 렌더링하기 위해 ReactDOM.render를 사용한다. 이 함수의 첫 번째 인자는 렌더링할 리액트 엘리먼트이며, 두 번째 인자는 렌더링이 일어날 대상 DOM 노드이다.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([연어, 연어2]);
```

모든 DOM 렌더링 기능은 ReactDOM 패키지에 들어 있다. 요즘은 배열을 렌더링할 수도 있움.

### 4.3.1 자식들

리액트는 props.children을 사용해 자식 엘리먼트들을 렌더링한다. 텍스트가 아닌 다른 리액트 엘리먼트들을 자식으로 렌더링하면 엘리먼트의 트리가 생긴다. 트리에는 루트 엘리먼트 하나가 존재하고, 루트 아래로 많은 가지가 자란다.

```js
<script>
  const $ul = React.createElement( "ul", null, React.createElement("li", null,
  "하이"), React.createElement("li", null, "하이"), React.createElement("li",
  null, "하이"), React.createElement("li", null, "하이"),
  React.createElement("li", null, "하이"), React.createElement("li", null,
  "하이"), React.createElement("li", null, "하이") ); const root =
  ReactDOM.createRoot(document.getElementById("root")); root.render($ul);
  console.dir(연어);
</script>
```

리액트는 이런 자식 엘리먼트의 배열을 만들고 props.children을 그 배열로 설정한다. 객체 집합의 배열.

#### 데이터를 가지고 엘리먼트 만들기

리액트를 사용하는 경우 가장 큰 장점은 UI 엘리먼트와 데이터를 분리할 수 있다는 것이다. 리액트는 단순한 자바스크립트이기 때문에 리액트 컴포너트트리를 더 편하게 구성하기 위한 자바스크립트 로직을 얼마든지 추가할 수 있다. 예를 들어 배열에 재료를 저장해주도 그 배열을 리액트 엘리먼트로 map할 수 있다.

`콘솔 경고`
배열을 이터레이션해서 자식 엘리먼트의 리스트를 만드는 경우 리액트에서는 각 자식 엘리먼트에서 key 프로퍼티를 넣는 것을 권장한다. 리액트는 key를 사용해 DOM을 더 효율적으로 갱신할 수 있다.

## 4.4 리액트 컴포넌트

사용한 기술이나 내용, 크기와 관계 없이 모든 사용자 인터페이스는 여러 부분으로 이루어진다. 버튼, 리스트, 제목 등이 이런 부품이다. 이런 부품이 모여서 사용자 인터페이스를 이룬다.

3가지 조리법을 보여주는 조리법 어플리케이션을 생각해보자. 각 박스에 들어 있는 데이터는 서로 다르지만, 각 조리법을 이루는 부품은 같다.

리액트에서는 이런 각 부분을 컴포넌트라고 부른다. 컴포넌트를 사용하면 서로 다른 조리법이나 서로 다른 데이터 집합에 대해 같은 DOM 구조를 재사용할 수 있다.

리액트로 만들고 싶은 사용자 인터페이스에 대해 생각할 때는 엘리먼트를 재사용 가능한 조각으로 나눌 수 있는지 고려해보자!
