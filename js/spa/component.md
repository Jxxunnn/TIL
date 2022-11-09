# Vanilla Javascript로 웹 컴포넌트 만들기

## 1.컴포넌트와 상태관리

### (1) 상태관리의 탄생

아주 과거 자바스크립트를 공부할 때 가장 중요한 것은 jQUery였다.

> **_jQuery_**
>
> - jQuery는 빠르고 작고 기능이 풍부한 자바스크립트 라이브러리이다.
> - jQuery API는 크로스 브라우징을 지원한다.
> - DOM, Event, Animation 및 Ajax와 같은 작업을 훨씬 간단하게 만든다.

jQuery의 가장 큰장점은 `DOM API`였다. DOM을 쉽게 조작할 수 있도록 만들어주는 것에 더해 `크로스 브라우징`과 관련된 이슈를 해결해 주었다.

그런데 점점 브라우저와 Javascript가 발전하는 과정에서 **_아예 브라우저(클라이언트) 단에서 렌더링_**을 하고, **_서버에서는 `REST API` 혹은 `GraphQL` 같이 브라우저 렌더링에 필요한 데이터만 제공하는 형태_**로 기술이 변화했다.

이제는 직접적으로 `DOM`을 다루는 행위가 급격하게 감소했고, _`상태(State)`를 기준으로 `DOM`을 렌더링 하는 형태로 발전한 것이다._ `DOM`이 변하는 경우가 `State`에 종속 되어버린 것이다. 반대로 말하면, `State`가 변하지 않을 경우 `DOM`이 변하면 안 되는 것이다.

그리고 이러한 과정 속에서 `Client-Side Rendering` 이라는 개념과 `상태관리`라는 개념이 생기게 되었다.

> SSR과 CSR
>
> SSR(Server-Side Rendering)
>
> 약 5년전 까지만 해도 JSP PHP ASP 등이 웹 개발 3대장이라고 불렸다.
> 위의 언급한 것들이 하는 역할이 바로 서버에서 HTML을 만들어서 클라이언트에 넘겨주는 것, 즉 Server Side Rendering 이다.
> 따라서 클라이언트단(브라우저)에서는 굳이 데이터를 깊은 단계까지, 정교하게 관리할 필요가 없었다.
>
> CSR(Client-Side Rendering)
>
> Javascript가 발전하면서 아예 브라우저(클라이언트) 단에서 모든 렌더링을 처리 하려는 시도가 계속되었고, 그렇게 React Angular Vue 같은 프레임워크(혹은 라이브러리)가 탄생하였다.
> 브라우저(클라이언트) 단에서 렌더링을 하기 위해선, 렌더링에 필요한 상태를 정교하게 관리해야 한다.
> 그래서 Redux 같은 상태관리 라이브러리(혹은 프레임워크)가 생겨났다.

### (2)컴포넌트

`Angular`가 `CSR`의 시작이었다면, `React`는 `컴포넌트 기반 개발`의 시작이었다. 그리고 `Angular`와 `React`의 장점을 모두 수용한 `Vue`가 나왔다.

어쨌든 중요한 점은 **현 시점의 웹 어플리케이션은 컴포넌트 단위로 설계되고 개발된다**는 것이다. 그리고 컴포넌트마다 컴포넌트를 렌더링할 때 필요한 상태를 관리하게 되었으며, `Proxy` 혹은 `Observer Pattern` 등을 이용하여 이를 구현한다.

## state - setState - render

컴포넌트 설계의 기반이 되는 코드를 만들어보자

### (1) 기능 구현

```js
<div id="app"></div>
<script>
const $app = document.querySelector('#app');

let state = {
  items: ['item1', 'item2', 'item3', 'item4']
}

const render = () => {
  const { items } = state;
  $app.innerHTML = `
    <ul>
      ${items.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <button id="append">추가</button>
  `;
  document.querySelector('#append').addEventListener('click', () => {
    setState({ items: [ ...items, `item${items.length + 1}` ] })
  })
}

const setState = (newState) => {
  state = { ...state, ...newState };
  render();
}

render();
</script>
```

이 코드의 핵심은 다음과 같다.

- `state`가 변경되면 `render`를 실행한다.
- `state`는 `setState`로만 변경해야 한다.

이러한 규칙을 지켜가면서 코드를 작성한다면, 브라우저 출력되는 내용은 무조건 state에 종속되는 것이다. 즉, DOM을 직접적으로 다룰 필요가 없어진다.

### (2) 추상화

앞서 작성한 코드를 `class` 문법으로 추상화시켜보자.

```js
<div id="app"></div>
<script>
class Component {
  $target;
  $state;
  constructor ($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }
  setup () {};
  template () { return ''; }
  render () {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent () {}
  setState (newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

class App extends Component {
  setup () {
    this.$state = { items: ['item1', 'item2'] };
  }
  template () {
    const { items } = this.$state;
    return `
        <ul>
          ${items.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <button>추가</button>
    `
  }

  setEvent () {
    this.$target.querySelector('button').addEventListener('click', () => {
      const { items } = this.$state;
      this.setState({ items: [ ...items, `item${items.length + 1}` ] });
    });
  }
}

new App(document.querySelector('#app'));
</script>
```

컴포넌트 클래스를 작성해놨더니 조금 더 유연하게 만들 수 있게 되었다. 무엇보다 컴포넌트 코드의 사용 방법을 강제할 수 있기 때문에 코드를 유지보수하고 관리할 때 매우 이롭다.

### (3) 모듈화

보통 한 파일안에 모든 기능을 작성하는 경우는 없을 것이므로 앞서 작성한 코드를 다음과 같이 분할해보자.

> index.html
>
> > src
> >
> > > app.js `ES Module의 entry file`
> > >
> > > components `Component 역할을 하는 것들`
> > >
> > > - Item.js
> > >
> > > core `구현에 필요한 코어들`
> > >
> > > - Component.js

```js
.
├── index.html
└── src
    ├── app.js `ES Module의 entry file`
    ├── components `# Component 역할을하는 것들`
    │   └── Items.js
    └── core `구현에 필요한 코어들`
        └── Component.js
```

이 때 브라우저 모듈을 사용할 것이다.

#### index.html

```js
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Simple Component 2</title>
</head>
<body>
<div id="app"></div>
<script src="./src/app.js" type="module"></script>
</body>
</html>
```

#### src/app.js

```js
import Items from "./components/Items.js";

class App {
  constructor() {
    const $app = document.querySelector("#app");
    new Items($app);
  }
}

new App();
```

#### src/components/Item.js

```js
import Component from "../core/Component.js";

export default class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.$state;
    return `
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button>추가</button>
    `;
  }

  setEvent() {
    this.$target.querySelector("button").addEventListener("click", () => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}
```

#### src/core/Component.js

```js
export default class Component {
  $target;
  $state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }
  setup() {}
  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
```

## 이벤트 처리

### (1) 불편함을 감지하기

앞서 작성한 코드를 사용하면 `render`를 실행할 때 마다 이벤트가 새로 등록된다. 뿐만 아니라 반복적인 요소에 대해 각각 이벤트를 등록해야 할 땐 여간 불편한게 아니다.

각각의 아이템에 대한 `삭제`기능을 추가한다고 하면 다음과 같은 코드가 된다.

```js
import Component from "../core/Component.js";

export default class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.$state;
    return `
      <ul>
        ${items
          .map(
            (item, key) => `
          <li>
            ${item}
            <button class="deleteBtn" data-index="${key}">삭제</button>
          </li>
        `
          )
          .join("")}
      </ul>
      <button class="addBtn">추가</button>
    `;
  }

  setEvent() {
    this.$target.querySelector(".addBtn").addEventListener("click", () => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });

    this.$target.querySelectorAll(".deleteBtn").forEach((deleteBtn) =>
      deleteBtn.addEventListener("click", ({ target }) => {
        const items = [...this.$state.items];
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      })
    );
  }
}
```

### (2) 이벤트 버블링

이 때 다음과 같이 이벤트 버블링을 사용하면 훨씬 직관적으로 처리할 수 있다.

```js
export default class Items extends Component {
  setup() {
    /* 생략 */
  }
  template() {
    /* 생략 */
  }
  setEvent() {
    // 모든 이벤트를 this.$target에 등록하여 사용하면 된다.
    this.$target.addEventListener("click", ({ target }) => {
      const items = [...this.$state.items];

      if (target.classList.contains("addBtn")) {
        this.setState({ items: [...items, `item${items.length + 1}`] });
      }

      if (target.classList.contains("deleteBtn")) {
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      }
    });
  }
}
```

다만, 기존의 `setEvent`는 `render`를 할 때 마다 실행하기 때문에, `core/Component.js`에 `라이프 사이클`을 변경해야 한다.

```js
export default class Component {
  $target;
  $state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    `+`this.setEvent(); // constructor에서 한 번만 실행한다.
    this.render();
  }
  setup() {}
  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
    `-`this.setEvent();
  }
  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
```

- event를 각각의 하위 요소가 아니다 `Component의 target 자체에 등록하는 것`이다.
- 따라서 Component가 생성되는 시점에만 이벤트 등록을 해놓으면 `추가로 등록할 필요가 없어진다.`

### 이벤트 버블링 추상화

그리고 이벤트 버블링을 통한 등록 과정을 `메소드로 만들어서 사용`하면 코드가 더 깔끔해진다.

```js
export default class Component {
  $target;
  $state;
  constructor($target) {
    /* 생략 */
  }
  setup() {
    /* 생략 */
  }
  template() {
    /* 생략 */
  }
  render() {
    /* 생략 */
  }
  setEvent() {
    /* 생략 */
  }
  setState(newState) {
    /* 생략 */
  }

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest를 이용하여 처리한다.
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
```

이렇게 작성한 메서드는 다음과 같이 사용하면 된다.

```js
export default class Items extends Component {
  setup() {
    /* 생략 */
  }
  template() {
    /* 생략 */
  }
  setEvent() {
    this.addEvent("click", ".addBtn", ({ target }) => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
    this.addEvent("click", ".deleteBtn", ({ target }) => {
      const items = [...this.$state.items];
      items.splice(target.dataset.index, 1);
      this.setState({ items });
    });
  }
}
```

## 4. 컴포넌트 분할하기

이제 컴포넌트 단위로 구분하는 코드를 작성해보자

### (1) 기능 추가

현재 까지의 코드에서는 컴포넌트를 분리할 이유가 없는 상태이다. 그래서 `Items` 컴포넌트에 `toggle`, `filter` 등의 기능을 추가 했을 때 먼저 어떤 문제점이 있는지 알아야한다.
이렇게 Items 컴포넌트가 무언가 많은 일을 하게 되었다. 이럴 경우 코드를 관리하기 힘들고, 컴포넌트라는 이름이 무색하게 컴포넌트 단위로 활용할 수 없는 상태가 되어버린다.
기본적으로 컴포넌트 라는 것은 "재활용"이 목적이다. 그러기 위해선 하나의 컴포넌트가 최대한 작은 단위의 일을 하도록 만들어야 한다.

### (2) 폴더 구조

다음과 같이 폴더 및 파일을 구성해보자.

```
.
├── index.html
└── src
    ├── App.js               # main에서 App 컴포넌트를 마운트한다.
    ├── main.js              # js의 entry 포인트
    ├── components
    │   ├── ItemAppender.js
    │   ├── ItemFilter.js
    │   └── Items.js
    └── core
        └── Component.js
```
