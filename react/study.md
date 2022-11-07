# 리액트 자습서

## 설치

### Creating a New Application

`Create React App`은 새 React 싱글 페이지 어플리케이션 만들기를 시작하기 위한 최고의 방법입니다. 최신 자바스크립트 기능을 사용할 수 있게 개발 환경을 세팅해주어, 좋은 개발자 경험을 사용하며, 프로덕션 앱을 위한 최적화도 진행합니다. 기기에 Node >= 6 이상이 필요합니다.

```js
npx create-react-app my-app

cd my-app
npm start
```

`npm run build`를 실행하면 build 폴더 안에 제작한 앱의 최적화된 빌드를 생성합니다.

### ES6와 JSX 사용하기

ES6: 개발을 쉽게 만드는 모던 자바스크립트 기능의 집합
JSX: React에서 잘 동작하는 Javascript 언어 확장

### gitignore.io

https://www.toptal.com/developers/gitignore/

### Commit Type

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor: 코드 리팩토링
- test: 테스트 코드, 리팩토링 테스트 코드 추가
- chore: 빌드 업무 수정, 패키지 매니저 수정

## JSX 소개

```js
const element = <h1>Hello, world!</h1>;
```

다음은 JSX라 하며 JavaScript를 확장한 문법입니다. JSX라고 하면 템플릿 언어가 떠오를 수도 있지만, JavaScript의 모든 기능이 포함되어 있습니다.

JSX는 React "엘리먼트(element)"를 생성합니다.

### JSX란?

React에서는 본질적으로 렌더링 로직이 UI 로직(이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등)과 연결된다는 사실을 받아들입니다.

React는 별도의 파일에 마크업롸 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 "컴포넌트"라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리합니다.

React는 JSX 사용이 필수가 아니지만, 대부분의 사람은 JavaScript 코드 안에서 UI 관련 작업을 할 때 시각적으로 더 도움이 된다고 생각합니다. 또한 React가 더욱 도움이 되는 에러 및 경고 메세지를 표시할 수 있게 해줍니다.

### JSX에 표현식 포함하기

아래 예시에서는 name이라는 변수를 선언한 후 중괄호로 감싸 JSX 안에 사용하였습니다.

```js
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
```

JSX의 중괄호 안에는 유효한 모든 JavaScript 표현식을 넣을 수 있습니다. 예를 들어 `2 + 2`, `user.firstName` 또는 `formatName(user)` 등은 모두 유효한 JavaScript 표현식입니다.

아래 예시에서는 JavaScript 함수 호출의 결과인 `formatName(user)`을 \<h1> 엘리먼트에 포함했습니다.

```js
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = <h1>Hello, {formatName(user)}!</h1>;
```

### JSX도 표현식입니다.

컴파일이 끝나면, JSX 표현식이 정규 JavaScript 함수 호출이 되고 JavaScript 객체로 인식됩니다.

즉, JSX를 `if` 구문 및 `for` loop 안에 사용하고, 변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환할 수 있습니다.

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### JSX 속성 정의

어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의할 수 있습니다.

```js
const element = <a href="https://www.reactjs.org">link</a>;
```

중괄호를 사용하여 어트리뷰트에 JavaScript 표현식을 삽입할 수도 있습니다.

```js
const element = <img src={user.avatarUrl}></img>;
```

어트리뷰트에 JavaScript 표현식을 삽입할 때 중괄호 주변에 따옴표를 입력하지 마세요. 따옴표(문자열 값에 사용) 또는 중괄호(표현식에 사용) 중 하나만 사용하고, 동일한 어트리뷰트에 두 가지를 동시에 사용하면 안 됩니다.

`!경고`

> JSX는 HTML보다는 JavaScript에 가깝기 때문에, React DOM은 HTML 어트리뷰트 이름 대신 camelCase 프로퍼티 명명 규칙을 사용합니다.
> 예를 들어, JSX에서 class는 className가 되고 tabindex는 tabIndex가 됩니다.

### JSX로 자식 정의

태그가 비어있다면 XML처럼 /> 를 이용해 바로 닫아주어야 합니다.

```js
const element = <img src={user.avatarUrl} />;
```

JSX 태그는 자식을 포함할 수 있습니다.

```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here</h2>
  </div>
);
```

`XML`

> HTML에서의 title 태그는 페이지의 제목이라는 명확한 사전 정의가 되어 있는 반면, XML에서는 어떤 사전 의미 또는 역할도 정의되어 있지 않습니다. 그냥 작성자가 입맛대로 사용하면 그만이다.

> 즉, 위와 같이 xml 파일을 작성한다고 해서 어떤 작동을 하는 것은 아니다. 위에도 설명했지만, XML은 태생이 데이터를 저장하고 전달하기 위해 디자인된 언어이고, 위 내용은 각각 title, content, sender와 같은 이름의 태그로 각각의 정보를 묶어둔(저장해 둔) 상태일 뿐이다.

### JSX는 주입 공격을 방지합니다.

JSX에 사용자 입력을 삽입하는 것은 안전합니다.

```js
const title = response.potentiallyMaliciousInput;
// 이것은 안전합니다.
const element = <h1>{title}</h1>;
```

기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로, 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않습니다. 모든 항목은 렌더링 되기 전에 문자열로 변환됩니다. 이런 특성으로 인해 XSS (cross-site-scripting) 공격을 방지할 수 있습니다.

### JSX는 객체를 표현합니다.

Babel은 JSX를 React.createElement() 호출로 컴파일합니다.
다음 두 예시는 동일합니다.

```js
const element = <h1 className="greeting">Hello, world!</h1>;
```

```js
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

React.createElement()는 버그가 없는 코드를 작성하는 데 도움이 되도록 몇 가지 검사를 수행하며, 기본적으로 다음과 같은 객체를 생성합니다.

```js
// 주의: 다음 구조는 단순화되었습니다
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};
```

이러한 객체를 "React 엘리먼트"라고 하며, 화면에서 보고 싶은 것을 나타내는 표현이라고 생각하면 됩니다. React는 이 객체를 읽어서, DOM을 구성하고 최신 상태로 유지하는 데 사용합니다.

## 엘리먼트 렌더링

`엘리먼트는 React 앱의 가장 작은 단위입니다.`

엘리먼트는 화면에 표시할 내용을 기술합니다.

```js
const element = <h1>Hello, world</h1>;
```

브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성할 수 있습니다. React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트합니다.

**_주의_**

> 더 널리 알려진 개념인 “컴포넌트”와 엘리먼트를 혼동할 수 있습니다. 다음 장에서 컴포넌트에 대해 소개할 예정입니다. 엘리먼트는 컴포넌트의 “구성 요소”이므로 이번 장을 읽고 나서 다음 장으로 넘어갈 것을 권합니다.

---

## DOM에 엘리먼트 레더링하기

HTML 파일 어딘가에 `<div>`가 있다고 가정해 봅시다.

```html
<div id="root"></div>
```

이 안에 들어가는 모든 엘리먼트를 React DOM에서 관리하기 때문에 이것을 “루트(root)” DOM 노드라고 부릅니다.

React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM 노드가 있습니다. React를 기존 앱에 통합하려는 경우 원하는 만큼 많은 수의 독립된 루트 DOM 노드가 있을 수 있습니다.

React 엘리먼트를 렌더링 하기 위해서는 우선 DOM 엘리먼트를 ReactDOM.createRoot()에 전달한 다음, React 엘리먼트를 root.render()에 전달해야 합니다.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>Hello, world</h1>;
root.render(element);
```

위 코드를 실행하면 화면에 "Hello, world"가 보일 겁니다.

---

### 렌더링 된 엘리먼트 업데이트하기

React 엘리먼트는 불변객체입니다. 엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없습니다. 엘리먼트는 영화에서 하나의 프레임과 같이 특정 시점의 UI를 보여줍니다.

지금까지 소개한 내용을 바탕으로 하면 UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고 이를 root.render()로 전달하는 것입니다.

예시로 똑딱거리는 시계를 살펴보겠습니다.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

위 함수는 setInterval() 콜백을 이용해 초마다 root.render()를 호출합니다.

**_주의_**

> 실제로 대부분의 React 앱은 root.render()를 한 번만 호출합니다. 다음 장에서는 이와 같은 코드가 유상태 컴포넌트에 어떻게 캡슐화되는지 설명합니다.각 주제가 서로 연관이 있기 때문에 건너뛰지 않는 것을 추천합니다.

### 변경된 부분만 업데이트 하기

React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트합니다.

개발자 도구를 이용해 마지막 예시를 살펴보면 이를 확인할 수 있습니다.

매초 전체 UI를 다시 그리도록 엘리먼트를 만들었지만 React DOM은 내용이 변경된 텍스트 노드만 업데이트했습니다.

경험에 비추어 볼 때 특정 시점에 UI가 어떻게 보일지 고민하는 이런 접근법은 시간의 변화에 따라 UI가 어떻게 변화할지 더 많은 수의 버그를 없앨 수 있습니다.

## 엘리먼트 렌더링

엘리먼트는 React 앱의 가장 작은 단위.
엘리먼트는 화면에 표시할 내용을 기술

```js
const element = <h1>Hello, world</h1>;
```

브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 `일반 객체`이며(plain object)쉽게 생성할 수 있습니다. React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트한다.

**_주의_**

> 더 널리 알려진 개념인 “컴포넌트”와 엘리먼트를 혼동할 수 있습니다. 다음 장에서 컴포넌트에 대해 소개할 예정입니다. 엘리먼트는 컴포넌트의 “구성 요소”이므로 이번 장을 읽고 나서 다음 장으로 넘어갈 것을 권합니다.

---

### DOM에 엘리먼트 렌더링하기

HTML 파일 어딘가에 <div>가 있다고 가정해보자

```js
<div id="root"></div>
```

이 안에 들어가는 모든 엘리먼트를 React DOM에서 관리하기 때문에 이것을 "루트(root)"DOM 노드라고 부른다.

React로 구현된 어플리케이션은 일반적으로 하나의 루트 DOM 노드가 있다. React를 기존 앱에 통합하려는 경우에는 원하는 만큼의 독립된 루트 DOM 노드가 있을 수 있음.

React 엘리먼트를 렌더링 하기 위해서는 우선 DOM 엘리먼트를 `ReactDOM.createElement()`에 전달한 다음, React 엘리먼트를 root.render()에 전달해야 함.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>Hello, world</h1>;
root.render(element);
```

### 렌더링 된 엘리먼트 업데이트하기

React 엘리먼트는 불변객체다. 엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없다. 엘리먼트는 영화에서 하나의 프레임과 같이 특정 시점의 UI를 보여준다.

지금까지 내용을 바탕으로 하면 UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고 이를 `root.render()`로 전달하는 것이다.

**_주의_**

> 실제로 대부분의 React 앱은 root.render()를 한 번만 호출한다.

### 변경된 부분만 업데이트하기

React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트한다.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

위의 코드는 매초 전체 UI를 다시 그리도록 엘리먼트를 만들었지만 React DOM은 내용이 변경된 텍스트 노드만 업데이트했습니다.

## Components와 Props

컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있다. 개념적으로 컴포넌트는 JS의 함수와 유사하다. "props"라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React엘리먼트를 반환한다.

---

### 함수 컴포넌트와 클래스 컴포넌트

컴포넌트를 정의하는 가장 간단한 방법은 JS함수를 작성하는 것이다.

```js
function Welcome(props) {
  return <h1>hello, {props.name}</h1>;
}
```

이 함수는 데이터를 가진 하나의 "props"(props는 속성을 나타내는 데이터) 객체 인자를 받은 후 React 엘리먼트를 반환하므로 유효한 React 컴포넌트입니다. 이러한 컴포넌트는 JS함수이기 때문에 말 그대로 "함수 컴포넌트"라고 호칭한다.

또한 ES6 class를 사용하여 컴포넌트를 정의할 수 있다.

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.prop.name}</h1>;
  }
}
```

React의 관점에서 볼 때 위 두 가지 유형의 컴포넌트는 동일하다.

---

### 컴포넌트 렌더링

이전까지는 DOM 태그만을 사용해 React 엘리먼트를 나타냈다.

```js
const element = <div />;
```

React 엘리먼트는 사용자 정의 컴포넌트로도 나타낼 수 있다.

```js
const element = <Welcome name="Sara" />;
```

React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달. 이 객체를 "props"라고 함.

**_예시_**

```js
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"))
const element = <Welcome name="Sara">
root.render(element)
```

1. <Welcome name="Sara"/> 엘리먼트로 root.render()를 호출한다.
2. React는 {name: "Sara"}를 props로 하여 Welcome 컴포넌트를 호출한다.
3. Welcome 컴포넌트는 결과적으로 <h1>Hello, Sara</h1>엘리먼트를 반환한다.
4. React Dom은 <h1>Hello, Sara</h1> 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트한다.

**_주의: 컴포넌트의 이름은 항상 대문자로 시작한다._**

> React는 소문자로 시작하는 컴포넌트를 DOM태그로 처리한다. 예를 들어 <div />는 HTML div 태그를 나타내지만, <Welcome />은 컴포넌트를 나타내며 범위 안에 Welcom이 있어야 한다.

### 컴포넌트 합성

컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있다. 이는 모든 세부단계에서 동일한 추상 컴포넌트를 사용할 수 있음을 의미한다. React앱에서는 버튼, 폼, 다이얼로그, 화면 등의 모든 것들이 흔히 컴포넌트로 표현된다.

예를 들어 Welcome을 여러 번 렌더링하는 App 컴포넌트를 만들 수 있다.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

일반적으로 새 React앱은 최상위에 단일 App 컴포넌트를 가지고 있다. 하지만 기존 앱에 React를 통합하는 경우에는 Button과 작은 컴포넌트부터 시작해서 뷰 계층의 상단으로 올라가면서 점진적으로 작업해야 할 수 있음.

### 컴포넌트 추출

컴포넌트를 여러 개의 작은 컴포넌트로 나누는 것을 두려워하지 마세요~

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

이 컴포넌트는 author(객체), text(문자열) 및 date(날짜)를 props로 받은 후 소셜 미디어 웹 사이트의 코멘트를 나타낸다.

이 컴포넌트는 구성 요소들이 모두 중첩 구조로 이루어져 있어서 변경하기 어려울 수 있으며, 각 구성요소를 개별적으로 재사용하기도 힘들다. 이 컴포넌트에서 몇 가지 컴포넌트를 추출해보자.

```js
function Avatar(props){
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}>
  )
}
```

Avatar는 자신이 Comment내에서 렌더링 된다는 것을 알 필요가 없다. 따라서 props의 이름을 author에서 더욱 일반화된 user로 변경함.

> props의 이름은 사용될 context가 아닌 `컴포넌트 자체의 관점`에서 짓는 것을 권장함!`

이제 Comment가 살짝 단순해진다.

```js
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <Avater user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

다음으로 Avatar 옆에 사용자의 이름을 렌더링하는 UserInfo 컴포넌트를 추출해보았다.

컴포넌트를 추출하는 작업이 지루해 보일 수 있지만 재사용 가능한 컴포넌트를 만들어 놓는 것은 더 큰 앱에서 작업할 때 두각을 나타낸다.UI 일부가 여러 번 사용되거나 (Button, Panel, Avater), UI 일부가 자체적으로 복잡한 (App, FeedStroy, Comment)경우에는 별도의 컴포넌트로 만드는 게 좋다.

---

### props는 읽기 전용이다.

함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정해서는 안된다. 다음 sum 함수를 살펴보자

```js
function sum(a+b){
  return a+b;
}
```

이런 함수들은 **_순수 함수_**라고 호칭한다. 입력값을 바꾸려 하지 않고 항상 동일한 입력값에 대해 동일한 결과를 반환하기 때문이다.

반면에 다음 함수는 자신의 입력값을 변경하기 때문에 순수 함수가 아니다.

```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

React는 매우 유연하지만 한 가지 엄격한 규칙이 있다.

`모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다`

## State and Lifecycle

**_엘리먼트 렌더링_**에서는 UI를 업데이트하는 한 가지 방법만 배웠으며, 렌더링 된 출력값을 변경하기 위해 root.render()를 호출했다.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

이 섹션에서는 Clock 컴포넌트를 완전히 재사용하고 캡슐화하는 방법을 배울 것이다. 이 컴포넌트는 스스로 타이머를 설정할 것이고 매초 스스로 업데이트할 것이다.

```js
const ReactDOM.createElement(document.getElementById("root"))
function Clock(props){
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  )
}
function tick(){
  root.render(<Clock date={new Date()}/ >)
}
setInterval(tick,1000)
```

그러나 여기에는 중요한 요건이 누락되어 있다. Clock이 타이머를 설정하고 매초 UI를 업데이트 하는 것은 Clock의 구현 세부사항이 되어야 한다.

이상적으로 한 번만 코드를 작성하고 Clock이 스스로 업데이트하도록 만들어야 한다.

```js
root.render(<Clock />);
```

이것을 구현하기 위해서 Clock 컴포넌트에 "state"를 추가해야 함.

`state는 props와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어된다.`

### 함수에서 클래스로 변환하기

다섯 단계로 Clock과 같은 함수 컴포넌트를 클래스로 변환할 수 있다.

1. React.Component를 확장하는 동일한 이름의 ES6 class를 생성한다.
2. render()라고 불리는 빈 메서드를 추가한다.
3. 함수의 내용을 render() 메서드 안으로 옮긴다.
4. render()내용 안에 있는 props를 this.props로 변경한다.
5. 남아있는 빈 함수 선언을 삭제한다.

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
```

Clock은 이제 함수가 아닌 클래스로 정의된다. render메서드는 업데이트가 발생할 때마다 호출되지만, 같은 DOM 노드로 <Clock />을 렌더링하는 경우, Clock 클래스의 단일 인스턴스만 사용 함. 이것은 로컬 state와 생명주기 메서드와 같은 부가적인 기능을 사용할 수 있게 해줌.

### 클래스에 로컬 State 추가하기

세 단계에 걸쳐서 date를 props에서 state로 이동해보자.

1. render() 메서드 안에 있는 this.props.date를 this.state.date로 변경한다.

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
```

2. 초기 this.state를 지정하는 class constructor를 추가한다.

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLaocaleString()}</h2>
      </div>
    );
  }
}
```

여기서 어떻게 props를 기본 constructor에 전달하는지 유의하자.

```js
constructor(props){
  super(props)
  this.state = {date:newDate()}
}
```

클래스 컴포넌트는 항상 props로 기본 constructor를 호출해야 한다.

3. <Clock /> 요소에서 date props을 삭제한다.

```js
root.render(<Clock />);
```

타이머 코드는 나중에 다시 컴포넌트로 추가하는 걸로 하고, 결과는 다음과 같다.

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1></h1>
        <h2>{this.state.date.toLocaleTime.String()}</h2>
      </div>
    );
  }
}
const root = React.createRoot(document.getElementById("root"));
root.render(<Clock />);
```

> React18에서는 기존에 사용하던 ReactDOM.render 대신에 ReactDOM.createRoot가 도입되었다. react-dom/client 를 통해 접근할 수 있다.

```js
import ReactDOM from "react-dom/client";
```

다음으로 Clock이 스스로 타이머를 설정하고 매초 스스로 업데이트하도록 만들어 보자.

### 생명주기 메서드를 클래스에 추가하기

많은 컴포넌트가 있는 어플리케이션에서 컴포넌트가 삭제될 때 해당 컴포넌트가 사용 중이던 리소스를 확보하는 것이 중요하다.

Clock이 처음 DOM에 렌더링 될 때마다 타이머를 설정하려고 한다. 이것은 React에서 "마운팅"이라고 한다.

또한 Clock에 의해 생성된 DOM이 삭제될 때마다 타이머를 해제하려고 한다. 이것은 React에서 "언마운팅"이라고 한다.

컴포넌트 클래스에서 특별한 메서드를 선언하여 컴포넌트가 마운트되거나 언마운트될 때 일부 코드를 작동할 수 있다.

```js
class Clock extends React.Component{
  constructor(props){
    super(props){
      this.state = {date:new Date()}
    }
    componentDidMount(){
    }
    componentWillUnmount(){
    }
    render(){
      return(
        <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      )
    }
  }
}

```

이러한 메서드들은 "생명주기 메서드"라고 불린다. `componentDidMount()`메서드는 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행된다. 이 장소가 타이머를 설정하기에 좋은 장소다.

```js
componentDidMount(){
  this.timerID = setInterval(()=>this.tick(),1000)
}
```

`this(this.timerID)`에서 어떻게 타이머 ID를 제대로 저장하는지 주의해주세요.
`this.props`가 React에 의해 스스로 설정되고 this.state가 특수한 의미가 있지만, 타이머 ID와 같이 데이터 흐름 안에 포함되지 않는 어떤 항목을 보관할 필요가 있다면 자유롭게 클래스에 수동으로 부가적인 필드를 추가해도 된다.

`componentWillUnMount()`생명주기 메서드 안에 있는 타이머를 분해해 보자.

```js
componentWillUnMount(){
  clearInterval(this.timerID)
}
```

마지막으로 Clock 컴포넌트가 매초 작동하도록 하는 tick()이라는 메서드를 구현해 보자.

이것은 컴포넌트 로컬 state를 업데이트하기 위해 this.setState()를 사용한다.

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock />);
```

이제 시계는 매초 째깍거린다.
현재 어떤 상황이고 메서드가 어떻게 호출되는지 순서대로 요약해보자.

1. <Clock />가 `root.render()`로 전달되었을 때 React는 `Clock` 컴포넌트의 constructor를 호출합니다. `Clock`이 현재 시각을 표시해야 하기 때문에 현재 시각이 포함된 객체로 this.state를 초기화합니다. 나중에 이 state를 업데이트할 것입니다.
2. React는 `Clock` 컴포넌트의 `render()` 메서드를 호출합니다. 이를 통해 React는 화면에 표시되어야 할 내용을 알게 됩니다. 그 다음 React는 `Clock`의 렌더링 출력값을 일치시키기 위해 DOM을 업데이트합니다.
3. `Clock` 출력값이 DOM에 삽입되면, React는 `componentDidMount()` 생명주기 메서드를 호출합니다. 그 안에서 `Clock` 컴포넌트는 매초 컴포넌트의 `tick()` 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청합니다.
4. 매초 브라우저가 `tick()` 메서드를 호출합니다. 그 안에서 `Clock` 컴포넌트는 `setState()`에 현재 시각을 포함하는 객체를 호출하면서 UI 업데이트를 진행합니다. `setState()` 호출 덕분에 React는 state가 변경된 것을 인지하고 화면에 표시될 내용을 알아내기 위해 `render()` 메서드를 다시 호출합니다. 이 때 `render()` 메서드 안의 `this.state.date`가 달라지고 렌더링 출력값은 업데이트된 시각을 포함합니다. React는 이에 따라 DOM을 업데이트합니다.
5. `Clock` 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 React는 타이머를 멈추기 위해 `componentWillUnmount()` 생명주기 메서드를 호출합니다.

---

### State를 올바르게 사용하기

`setState()`에 대해 알아야 할 세 가지.

#### 1. 직접 State를 수정하지 말아라.

예를 들어, 이 코드는 컴포넌트를 다시 렌더링하지 않는다.

```js
//Wrong
this.state.comment = "hello";
```

대신에 `setState()`를 사용합니다.

```js
//Correct
this.setState({ comment: "Hello" });
```

`this.state`를 지정할 수 있는 유일한 공간은 바로 constructor이다.

#### 2. State 업데이트는 비동기적일 수도 있다.

React는 성능을 위해 `setState()` 호출을 단일 업데이트로 한꺼번에 처리할 수 있다.
`this.props`와 `this.state`가 비동기적으로 업데이트 될 수 있기 때문에 다음 state를 계산할 때 해당 값에 의존해서는 안 된다.

예를 들어, 다음 코드는 카운터 업데이트에 실패할 수 있다.

```js
// Wrong
this.setState({ counter: this.state.counter + this.props.increment });
```

이를 수정하기 위해 객체보다는 함수를 인자로 사용하는 다른 형태의 `setState()`를 사용한다. 그 함수는 이전 state를 첫 번째 인자로 받아들일 것이고, 업데이트가 적용된 시점의 props를 두 번째 인자로 받아들일 것이다.

```js
//Correct
this.setState((state, props) => ({
  counter: state.counter + props.incremenet,
}));
```

위에서는 화살표 함수를 사용했지만 일반적인 함수에서도 정상적으로 작동한다.

```js
//Correct
this.setState(function (state, props) {
  return {
    counter: state.counter + props.increment,
  };
});
```

#### State 업데이트는 병합된다.

`setState()`를 호출할 때 React는 제공한 객체를 현재 state로 병합한다. 예를 들어, state는 다양한 독립적인 변수를 포함할 수 있다.

```js
constructor(props){
  super(props)
  this.state={
    posts:[],
    comments:[]
  }
}
```

별도의 `setState()`호출로 이러한 변수를 독립적으로 업데이트할 수 있다.

```js
componentDidMount() {
  fetchPosts().then(resposne => {
    this.setState({
      posts: response.posts
    })
  })
  fetchComments().then(response=>{
    this.setState({comments: response.comments})
  })
}
```

병합은 얕게 이루어지기 때문에 `this.setState({comments})`는 `this.state.posts`에 영향을 주진 않지만 `this.state.comments`는 완전히 대체된다.

---

#### 데이터는 아래로 흐른다.

부모 컴프넌트나 자식 컴포넌트 모두 특정 컴포넌트가 유상태인지 또는 무상태인지 알 수 없고, 그들이 함수나 클래스로 정의되었는지에 대해서 관심을 가질 필요가 없다.

이 때문에 state는 종종 로컬 또는 캡슐화라고 불린다. state가 소유하고 설정한 컴포넌트 이외에는 어떠한 컴포넌트에도 접근할 수 없다.

컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있다.

```js
<FormattedData date={this.state.date} />
```

`FormattedData` 컴포넌트는 `date`를 자신의 props로 받을 것이고 이것이 `Clock`의 state로부터 왔는지, `Clock`의 props에서 왔는지, 수동으로 입력한 것인지 알지 못한다.

```js
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

일반적으로 이를 "하향식(top-down)"또는 "단방향식" 데이터 흐름이라고 한다. 모든 state는 항상 특정한 컴포넌트가 소유하고 있으며 그 state로부터 파생된 UI 또는 데이터는 오직 트리구조에서 자신의 "아래"에 있는 컴포넌트에만 영향을 미친다.

트리구조가 props들의 폭포라고 상상하면 각 컴포넌트의 state는 임의의 점에서 만나지만 동시에 아래로 흐르는 부가적인 수원(water source)이라고 할 수 있다.

모든 컴포넌트가 완전히 독립적이라는 것을 보여주기 위해 `App` 렌더링하는 세 개의 `<Clock>`을 만들었습니다.

```js
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
```

각 `Clock`은 자신만의 타이머를 설정하고 독립적으로 업데이트 한다.

React앱에서 컴포넌트가 유상태 또는 무상태에 대한 것은 시간이 지남에 따라 변경될 수 있는 구현 세부 사항으로 간주한다. 유상태 컴포넌트 안에서 무상태 컴포넌트를 사용할 수 있으며, 그 반대 경우도 마찬가지로 사용할 수 있다.
