# Web Components: 커스텀 HTML 태그 만들기

html 코드를 짜다보면 <div> 들이 매우 많아 귀찮은 경우가 있습니다.

그럴 땐 여러개의 <div> 태그들을 하나의 단어로 축약할 수 있는 문법을 쓰면 됩니다.

Web Component 라는 문법입니다.

자바스크립트 문법은 아니고 브라우저 기본 기능 중 하나입니다.

약간의 class 문법만 알고계시면

복잡한 html 태그들을

<pretty-card>

<grey-button>

이런 식으로 이쁘게 축약해서 사용가능합니다.

커스텀 html 태그 만드는 법

예를 들어서 <custom-input> 이라고 입력하면

<label><input> 이렇게 2개의 태그가 안에 출현하게 만들고 싶어진 것입니다.

그럼 어떻게 코드를 짜야하는지 알아봅시다.

<custom-input> 같은 커스텀 태그를 이제부터 컴포넌트라고 칭할겁니다.

컴포넌트를 만들고 싶으면 이런 형식에 따라서 그대로 타이핑만 하면 됩니다.

이건 정해진 문법이라 이해할 필요는 없고 따라치면 됩니다.

```js
class 클래스 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<label>이름을 입력하쇼</label><input>";
  }
}

customElements.define("custom-input", 클래스);
```

```html
<custom-input></custom-input>
```

.컴포넌트에 어떤 html들을 집어넣을지 맘대로 설정 가능합니다.

class와 extend 문법 저렇게 그대로 써주시면 되고 (class명 작명가능)

안에는 connectedCallback() 이라는 함수안에

여러분의 커스텀 html을 막 꾸미면 됩니다.

(참고) connectedCallback() 함수는 컴포넌트가 html에 장착될 때 실행됩니다.

2. html 만들고 싶으면 쌩자바스크립트로 html 만드는 문법 가져다 쓰면 됩니다.

3. customElements.define() 처럼 써주시면 컴포넌트 등록이 가능합니다.

(컴포넌트 이름 작명시 보통 대시기호 넣는게 관습입니다)

▲ 그럼 브라우저에서 개발자도구로 검사해보면

<custom-input> 이라고 쓸 때마다 <label> <input> 이것들이 남습니다.

이것이 html을 컴포넌트로 축약해서 쓸 수 있는 Web Component 문법입니다.

---

attribute를 추가하면 각각 다른 내용을 보여줄 수도 있습니다.

<custom-input> 쓸 때마다 같은 코드만 나오니까 쓸모없어보인다고요?

그러면 attribute를 추가해서 쓸 때마다 각각 다른 내용을 보여줄 수도 있습니다.

```js
class 클래스 extends HTMLElement {
  connectedCallback() {
    let name = this.getAttribute("name");
    this.innerHTML = "<label>${name}을 입력하쇼</label><input>";
  }
}

customElements.define("custom-input", 클래스);
```

<custom-input name="이메일"></custom-input>
<custom-input name="비번"></custom-input>

getAttribute(X)를 쓰면 현재 요소의 X라고 정의된 attribute를 가져올 수 있습니다.

그래서 name attribute가 있으면 그걸 가져와서 <label>안에 넣으라고 코드를 짜놨습니다.

그랬더니 <custom-input name="비번"></custom-input> 이렇게 쓰면 "비번을 입력하쇼"

<custom-input name="이메일"></custom-input> 이렇게 쓰면 "이메일을 입력하쇼"

라고 출력됩니다.

attribute 활용하시면 각각 다른 내용을 보여줄 수 있습니다.

---

attribute가 변경될 때 특정 코드 실행도 가능합니다.

```js
class 클래스 extends HTMLElement {

   connectedCallback() {
      let name = this.getAttribute('name');
      this.innerHTML = '<label>${name}을 입력하쇼</label><input>'
   }

   static get observedAttributes() {
       return ['name']
   }
   attributeChangedCallback() {
       (attribute 변경시 실행할 코드)
   }
}

customElements.define("custom-input", 클래스);
```

static get observedAttributes() 안에 감시할 attribute들을 array로 적으면 됩니다.

그럼 그게 변경되는 순간 밑에 있는 attributeChangedCallback() 함수를 실행해줍니다.

제가 임의로 만든게 아니라 이런 함수명들이 미리 다 정해져있으니 복사해서 쓰면 됩니다.

그럼 React, Vue에서 제공하는 자동 html 재렌더링 기능도 쌩 자바스크립트만으로 구현할 수 있는 것입니다.

attribute 변경시 html을 업데이트해주는 코드를 실행하면 끝 아니겠습니까.

그럼 새로고침없이도 html에 변경사항을 바로바로 반영할 수 있게 됩니다.

근데 재렌더링 그런건 React, Vue 이런걸로 웹앱을 안만들어보셨다면 아직 알 필요는 없습니다.

---

React, Vue와 다른 점은

많이들 좋아라하는 React, Vue도 똑같은 기능을 제공합니다.

React도 html을 하나로 묶어서 component로 만들어서 재사용이 가능합니다.

하지만 React는 웹앱을 만드는 라이브러리라 용도가 약간 다릅니다.

React는 state가 변할 경우 자동으로 html 재렌더링해주는 기능도 제공하고

React는 virtual DOM을 이용해서 재렌더링을 매우 빠르고 효율적으로 도와줍니다.

하지만 문법이 약간 더러울 뿐

Vue는 더 정돈된 느낌이고 깔끔합니다.

---

# shadow DOM과 template으로 HTML 모듈화하기

가끔 보면 복잡한 HTML 태그가 있는데

```html
<input type="range" />
```

이런거 쓰면 되게 복잡한 레이아웃이 나옵니다.

실제로 내부적으로도 여러개의 <div>를 이용해서 만들어진 것인데

이걸 진짜 확인하고 싶으면 크롬 개발자도구 - 설정 - show user agent shadow DOM 켜기 이런거 체크해놓으면 됩니다.

▲ <input type="range"> 안에 진짜로 <div> 3개가 숨어있습니다.

이걸 shadow DOM 이라고 하는데

"일반적으로는 볼 수 없는 숨겨진 HTML"을 의미합니다.

여러분도 이런거 만들어서 HTML 숨길 수 있습니다.

## shadow DOM 만드는 법

```html
<div class="mordor"></div>
<script>
  document.querySelector("mordor").attachShadow({ mode: "open" });
  document.querySelector("mordor").shadowRoot.innerHTML =
    "<p>심연에서왔도다</p>";
</script>
```

이러면 <div> 안에 몰래 <p>를 숨길 수 있습니다.

1. 우선 attachShadow() 라는걸 써서 shadowRoot 라는 공간을 하나 만들어줍니다.

2. shadowRoot 여기에 원하는 html 넣으면 숨겨집니다.

거의 모든 <태그>는 shadowRoot를 오픈할 수 있고

shadowRoot안에 넣은걸 전부 shadow DOM 이라고 칭하는데

이걸 굳이 써야할 이유를 모르겠고 별 장점은 없어보이지만

web component 문법과 합해야 진가를 발휘합니다.

---

Web Component의 단점 : 스타일 오염

Web Component 쓰면 html 함수처럼 묶어서 재사용할 수 있다고 했는데

여기에 스타일을 넣고 싶을 경우 약간 문제가 생길 수 있습니다.

```js
class 클래스 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<label>이름을 입력하쇼</label><input>
      <style> label { color : red } </style>`;
  }
}

customElements.define("custom-input", 클래스);
```

```html
<custom-input></custom-input> <label>왜 나까지 빨개짐?</label>
```

스타일까지 함께 컴포넌트화하고싶으면 컴포넌트 안에 <style>을 집어넣는게 좋습니다.

근데 이렇게 label 태그를 빨간색으로 스타일링해놨는데

이럴 경우 컴포넌트와 관계없는 다른 태그까지 오염이 발생할 수 있습니다.

그렇다고 CSS 적으로 class를 만들어서 해결한다고 해도

다른 곳과 class가 겹치면 문제가 생기고

아무튼 귀찮은 문제들이 발생합니다.

그럴 땐 스타일을 shadow DOM 열어서 거기 집어넣으면 됩니다.

왜냐면 shadow DOM에 있는 스타일은 밖에 영향을 끼치지 않아서 그렇습니다.

```js
class 클래스 extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<label>이름을 입력하쇼</label><input>
      <style> label { color : red } </style>`;
  }
}

customElements.define("custom-input", 클래스);
```

```html
<custom-input></custom-input> <label>오 이제 바깥건 안빨개짐</label>
```

스타일과 태그들을 전부 shadow DOM으로 집어넣어놨더니

진짜 다른 태그들 스타일을 오염시키지 않습니다.

그래서 대부분 Web Component 만들 때 shadow DOM을 활용합니다.

이래야 진정한 의미의 html 모듈화 개발이 가능합니다.

다른 모듈들이 서로 영향을 끼치는걸 막을 수 있으니까요.

```html
html 임시보관함
<template>
  태그 컴포넌트 만들 때 html이 너무 길어지면

  <template>태그에 잠깐 보관해두고 집어넣을 수도 있습니다.</template></template
>
```

```js
 <custom-input></custom-input>

  <template id="template1">
    <label>이메일을 입력하쇼</label><input>
    <style>label { color : red }</style>
  </template>

  <script>
    class 클래스 extends HTMLElement {
      connectedCallback() {
        this.attachShadow({mode : 'open'});
        this.shadowRoot.append(template1.content.cloneNode(true));
      }
    }
    customElements.define("custom-input", 클래스);
  </script>
```

1. <template>은 특수한 태그인데 여기에 적은 html은 렌더링되지 않습니다.

2. 그래서 거기에 html들 잠깐 보관하고

3. this.shadowRoot.append(template1.content.cloneNode(true)) 이런 식으로 집어넣으면 됩니다.

그냥 <template>태그 사용법입니다.

이러면 html이 길어져도 이쁘게 코드짤 수 있겠군요.

---

이벤트 리스너를 부착하고 싶다면

그냥 addEventListener 아무데나 코드짜서 부착하면 됩니다.

심지어 shadow DOM에도 이벤트리스너 부착 가능합니다.

알아서 합시다.

```html
<custom-input></custom-input>

<template id="template1">
  <label>이메일을 입력하쇼</label><input />
  <style>
    label {
      color: red;
    }
  </style>
</template>

<script>
  class 클래스 extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append(template1.content.cloneNode(true));
      let el = this.shadowRoot.querySelector("label");
      el.addEventListener("click", function () {
        console.log("클릭함");
      });
    }
  }
  customElements.define("custom-input", 클래스);
</script>
```

저는 shadow DOM 안의 label 태그를 누르면 콘솔창에 '클릭함' 출력하는

이벤트리스너를 부착해봤습니다.

이런 식으로 개발하면 자바스크립트도 컴포넌트안에 담아서 보관할 수도 있습니다.

이제 원하는 곳에서 class 만 export 해서 가져다 쓰면 컴포넌트로 모듈식 개발이 가능합니다.
