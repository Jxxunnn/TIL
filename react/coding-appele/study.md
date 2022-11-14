# React

## React를 쓰는 이유

1. Single Page Application을 만들 떄 쓴다.
   JS로 하면 코드가 길고 복잡해집.
   리액트가 유저가 가장 많음.
   > Naver Vibe, Flipkart, Instagram 이런 웹사이트 들어가봅시다.들어가면 페이지 전환 같은게 새로고침 없이 부드럽게 동작합니다.이런 사이트들을 Single Page Application 이라고 하는데- html 파일을 1개만 쓰고- 다른 페이지를 보여주고 싶을 때 html 부분만 샥 갈아치워서 보여줍니다.그래서 부드럽게 동작합니다.쌩자바스크립트로도 만들 수는 있지만 코드가 너무 길어지는 관계로리액트라는 자바스크립트 라이브러리를 설치해서 사용하면 이걸 더 쉽게 만들 수 있습니다.그래서 리액트라는 라이브러리를 배우고 사용하는 것입니다.
2. React쓰면 html 재사용 편리

   > 리액트 쓰는 또 다른 이유들은 - html을 함수, array, object 이런 곳에 보관하고 재사용할 수 있어서큰 프로젝트일 수록 html 관리 편리해짐 - React Native를 쓰면 같은 리액트 문법으로 모바일 앱개발도 가능합니다.거기선 html css 문법만 약간 다릅니다

3. 같은 문법으로 앱개발 가능
   > 리액트 네이티브, html css 문법만 약간 다름.

## 리액트 설치와 개발환경 세팅

1. nodejs 검색해서 설치
2. vscode 에디터 검색해서 설치
3. 프로젝트 생성
   1. 터미널에 `npx create-react-app [프로젝트명]`
   2. `cd ./[프로젝트명]`
   3. `npm start`

### 프로젝트 파일들 설명

- node_modules 폴더: 라이브러리 코드 보관함
- public 폴더: static 파일 모아놓는 곳
- src: 코드짜는 곳
- package.json: 프로젝트 정보

## 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개

1. class 넣을 땐 className
   > 잘보면 평소에 짜던 html/css와 다른 부분이 있습니다.스타일을 주기 위한 class명을 넣을 때 class=" " 가 아니라 className=" " 이렇게 쓰는 부분이 좀 다른데 왜냐면 실은 App.js에 짜고 있는건 html이 아니라 JSX라고 부르는 이상한 언어라서 그렇습니다. 원래 리액트환경에서 <div>하나 만들고 싶으면 자바스크립트로React.createElement('div', null)이딴 식으로 어렵게 코드짜야합니다.근데 그러면 유저들 다 도망가기 때문에 JSX라는 언어를 대신 사용합니다.JSX는 html과 사용방식은 비슷합니다.근데 JSX는 일종의 자바스크립트라서자바스크립트에서 사용하는 예약어인 class라는 키워드를 막 사용하시면 안됩니다.그래서 class=" " 넣고 싶으면 className이라고 써야합니다.이것이 JSX 다루는 첫째 문법이고 외우고 지나가도록 합시다.
2. 데이터 바인딩은 {중괄호} 3. style넣을 땐 style={{스타일 명: "값"}}

   > 아무튼 저 let post 안에 있던 자료를 <div>안에 꽂아넣고 싶으면 어떻게하죠? 옛날 자바스크립트 문법을 쓴다면 document.getElementById().innerHTML = ?? 이런 식이었겠지만리액트에서는 더 쉽게 데이터를 꽂아넣을 수 있습니다.
   > 온갖 곳에 {} 중괄호를 열어서 변수들을 집어넣을 수 있습니다. href, id, className, src 등 여러가지 html 속성들에도 가능합니다. 위처럼 쓰면 <div className="red"> 이렇게 되겠군요.

3. html에 style 속성을 넣고 싶으면 <div style={ {color : 'blue', fontSize : '30px'} }> 글씨 </div>
   > <div style="color : blue"> 이런걸 넣고 싶으면 JSX 상에서는 style={ } 안에 { } 자료형으로 집어넣어야합니다. 이렇게 넣어야합니다. { 속성명 : '속성값' } 이렇게 넣으면 됩니다. 근데 font-size 처럼 속성명에 대쉬기호를 쓸 수 없습니다. 대쉬기호 대신 모든 단어를 붙여써야합니다. 붙여쓸 땐 앞글자를 대문자로 치환해야합니다. css 파일 열기 귀찮을 때 쓰면 됩니다. 참고로 변수에 있던걸 html에 꽂아넣는 작업을 있어보이는 말로 데이터바인딩이라고 합니다.

> (참고)css파일 쓰려면 상단에서 import 'css파일 경로`
> (참고)에러메세지는 터미널/브라우저에서 확인 또는 개발자도구

## 중요한 데이터는 변수말고 state에 담습니다.

- return() 안에는 병렬로 태그 2개 이상 기입금지
- 자료 잠깐 저장할 땐 변수, state써도 된다

### state 사용법

1. import {useState}
2. useState(보관할 자료)
3. let [작명, 작명]

**_Q. 왜 state 써야함?_**
변수와 state는 차이점이 있는데 일반 변수는 갑자기 변경되면 html에 자동으로 반영이 안됨. 하지만 state는 갑자기 변경되면 state쓰던 html은 자동으로 재렌더링 됨.
-> 변경시 자동으로 html에 반영되게 만들고 싶으면 state쓰셈.
-> 자주 변경될 거 같은 html부분은 state로 만들어 놓기.
-> UI 기능 개발도 매우 편리해지고 스무스하게 동작 함.
-> 바뀌지 않는 데이터들 혹은 굳이 html에 표기가 필요없는 데이터들은 그냥 변수에 저장해도 됨.

## 버튼에 기능개발을 해보자 & 리액트 state 변경하는 법

> (참고)ERROR는 에러라 중요, WARNING은 무시가능 /_ eslint-disable _/를 상단에 기입해줘서 Lint 끌 수 있음. 원인같은 것을 출력해주는 기능이 Lint인데 고마운 기능이지만 초보 때는 걍 꺼도 됨.

- onClick={} 안에는 함수 이름을 넣어야 함, 함수 만드는 문법을 바로 넣어도 상관 없음.

```js
일반 html파일에서는
<div onclick="실행할 자바스크립트~~">

JSX에서는
<div onClick={실행할함수}>

1. Click이 대문자인 거
2. {}중괄호 사용하는 거
3. 그냥 코드가 아니라 함수를 넣어야 잘 작동한다는 거를 기억해라.
```

- state변경하는 법(등호로 변경 금지. 등호로 바꾸면 html 재렌더링 안 됨. setState변경함수를 써서 state 바꿔야 함)
  `setLikes(새로운state)` 이렇게 쓰면 된다. 왜냐면 state 변경함수는 ()안에 넣은 걸로 state를 갈아치워주는 함수이기 때문이다. 깔끔하게 새로운 state만 집어넣으면 된다.

### 요약

1. 클릭시 뭔가 실행하고 싶으면 onClick={함수} 이렇게 이벤트 핸들러를 달아서 사용합니다.
2. state를 변경하시려면 state 변경함수를 꼭 이용하십시오. state변경함수는 ( ) 안에 입력한걸로 기존 state를 갈아치워줍니다. 중요하니 외워둬야합니다.

## array, object state 변경하는 법

> (참고)array, object 다룰 때 원본은 보존하는 게 좋음

```js
<button
  type="button"
  onClick={() => {
    let copy = [...글제목];
    copy[0] = "노자 코트 추천";
    setTitle(copy);
  }}
>
  바꿔
</button>
```

**_state 변경함수 특징_**
기존 state == 신규 state인 경우 변경을 안해준다.
state가 array/object이면 독립적 카피본을 만들어서 수정해야 한다.

## Component: 많은 div들을 한 단어로 줄이고 싶으면

리액트는 긴 HTML을 한 단어로 깔끔하게 치환해서 넣을 수 있는 문법을 제공합니다. Component라고 합니다. 이걸 이용하면 함수 만들듯, 변수 만들듯 HTML을 깔끔하게 한 단어로 치환해서 원하는 곳에 꽂아넣을 수 있습니다. 우리 방금 만든 모달창도 깔끔하게 한 단어로 치환해봅시다.

### 컴포넌트 만드는 법

1. function 만들고
2. return()안에 html 담기
3. <함수명></함수명> 쓰기
   > 컴포넌트 안에 컴포넌트를 만들지는 않는다!!

> (참고1)return() 안에 html 병렬기입하려면 fragment 문법 써보자 <>

### 컴포넌트 언제 쓰면 좋을까?

1. 반복적인 html 축약할 때
2. 큰 페이지들
3. 자주 변경되는 UI들

### 컴포넌트의 단점

state 가져다 쓸 때 문제 생김

## 리액트 환경에서 동적인 UI 만드는 법(모달창 만들기)

1. html css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장 (형식은 자유, 모달창 상태 표현만 가능하면 됨)
3. state에 따라 UI가 어떻게 보일지 작성

그래서 리액트에서 UI만드는 과정을 비유하면 스위치와 전등만드는거랑 비슷하다고 보면 됩니다.

1. 일단 전등이쁘게 달아놓고
2. 스위치랑 연결하고
3. 스위치를 on으로 놓으면 불이 켜지고 off로 놓으면 불이 꺼지도록

만들어놓는 겁니다. 그리고 나중에 필요하면 스위치 조작만 하면 되는 것임 스위치는 state, 전등은 <Modal>입니다.

그래서 예전 쌩자바스크립트로 UI 만드는 것과는 약간 방식이 다릅니다. 쌩자바스크립트는 귀찮게 html을 조작해야했는데 리액트환경에선 html을 직접 조작하지 않습니다. 그래서 예전 방식에 익숙한 사람이라면 정신개조를 좀 해야함

## map: 많은 dive들을 반복문으로 줄이고 싶은 충동이 들 때

**_반복문으로 같은 html 반복생성하는 법_**
똑같은 html이 반복적으로 출현하면 반복문을 이용해서 쉽게 똑같은 html을 생성할 수도 있습니다 안타깝게도 for 반복문은 JSX 중괄호 안에서 사용할 수 없어서 map() 을 대신 사용합니다.

### JSX안에서 HTML을 반복생성하고 싶으면

리액트 중괄호안에서 html을 반복생성하고 싶으면 아까 배운 map을 이용해도 됩니다.
우선 [1, 2, 3] 에다가 map을 붙였으니 그 안의 자료 갯수만큼 map 내부 코드를 실행해줍니다.
근데 안에 return <div>안녕</div> 이게 있군요
그럼 <div>안녕</div> 이걸 array에 담아줍니다. 3번이나요

```
[ <div>안녕</div>, <div>안녕</div>, <div>안녕</div> ]
```

▲ 그럼 이게 남습니다.
근데 이걸 html로 미리보기 띄워볼 땐

```
<div>안녕</div>
<div>안녕</div>
<div>안녕</div>
```

이렇게 보입니다. 그래서 map을 써도 html 반복생성이 가능한 것임

**_(참고) 일반 for 반복문을 쓰고싶다면_**

1. html들을 담아둘 array 자료를 하나 만들어줍니다.

2. 일반 for 반복문을 이용해서 반복문을 돌림

3. 반복될 때 마다 array자료에 <div> 하나씩 추가해줍니다.

4. 원하는 곳에서 {array자료} 사용하면 됩니다.

-> for 문법은 JSX 안에서 사용할 수 없어서 저렇게 바깥에서 쓰면 됩니다. 귀찮으면 map을 씁시다.

## 자식이 부모의 state를 가져다쓰고 싶을 때는 props

자식 컴포넌트가 부모 컴포넌트에 있던 state를 쓰고 싶으면 그냥 쓰면 안되고 props로 전송해서 써야합니다.

**_부모 -> 자식 state 전송하는 법_**
props 문법을 쓰면 된다. (실은 props도 파라미터 문법일 뿐임)
props 전송은 부모 -> 자식만 가능하다.
컴포넌트 많아지면 props 쓰는 게 귀찮아짐.

1. <자식컴포넌트 작명={state이름}>
2. props 파라미터 등록 후 props.작명 사용

## props를 응용한 상세페이지 만들기

모달창안의 제목도 일종의 동적인 UI입니다. 동적인 UI 어떻게 만들라고 했습니까

1. html css로 미리 디자인해놓고
2. 현재 UI의 상태를 state로 만들어두고
3. state 종류에 따라서 UI가 어떻게 보일지 작성하랬습니다. 그러면 끝임

이제 나중에 필요할 때 스위치 (state) 조작만 하면 됩니다.

### Q. state를 자식컴포넌트에 만들어버리면 props 전송안해도 되지않나요?

A. 맞습니다. title같은 state도 자식컴포넌트 안에 만들어보면 편할듯요? 하지만 지금 title이라는 state는 App도 쓰고 Modal도 쓰고 있습니다. 그렇게 다양한 컴포넌트에서 쓰이는 state는 컴포넌트들 중 최고로 높은 부모에게 만들어놔야합니다. 왜냐면 state는 부모 → 자식 전송만 가능하니까 그렇습니다. state를 자식에 만들어놨는데 갑자기 부모가 그게 필요해지면 어떻게 할 방법이 없으니까요. 생각하기 귀찮으면 그냥 대부분 App 컴포넌트안에 만들면 됩니다.

### 오늘 요약 :

1. 그래서 UI만드는 3-step 외워주면 알아서 뭐든 만들 수 있습니다. 이제 저에게 그만 물어보고 알아서 만들도록 합시다.
2. state는 state를 사용하는 컴포넌트 중 최고 부모에 만들어놓아야합니다.

## input 1: 사용자가 입력한 글 다루기

유저가 <input>에 뭔가 입력시 코드를 실행해주고 싶을 때가 많습니다.
그러고 싶으면 onChange 아니면 onInput 이벤트핸들러를 부착하면 됩니다.

```js
<input
  onChange={() => {
    실행할코드;
  }}
/>
```

**_(참고)_**
이벤트 핸들러들은 매우 많습니다.
onMouseOver={ } 이건 이 요소에 마우스를 댔을 때 안의 코드를 실행해줍니다.
onScroll={ } 이건 이 요소를 스크롤했을 때 안의 코드를 실행해줍니다.
몇십개 있는데 원하는 이벤트가 있으면 찾아서 사용해봅시다.

### 사용자가 input에 입력한 데이터 저장하기

사용자가 input에 입력한 데이터는 state 아니면 변수에 저장해서 쓰는게 일반적입니다. 그래야 편리하기 때문에 일단 저장부터 해봅시다. state 배운 기념으로 state를 사용합시다.

```js
function App() {
  let [입력값, 입력값변경] = useState("");
  return (
    <input
      onChange={(e) => {
        입력값변경(e.target.value);
        console.log(입력값);
      }}
    />
  );
}
```

state를 하나 만들어주고 onChange될 때 마다 state에 e.target.value 넣으라고 코드를 짰습니다.
state에 문자를 저장하고 싶은데 일단 기본값을 뭘 넣을지 모르겠으면 따옴표 2개만 치면 됩니다. 따옴표 2개는 빈문자를 뜻합니다. 이제 입력값이라는 state를 필요한 곳에서 마음대로 사용하면 되겠습니다.

**_(참고)_**
근데 위 코드 실행해보면 a를 입력하면 콘솔창에 아무것도 안뜨지 않습니까
aa를 입력하면 a만 콘솔창에 뜨고요. 왜냐면 `state 변경함수 특징` 때문인데 state 변경함수는 약간 늦게 처리됩니다. 전문용어로 `async하게 (비동기적으로) 처리`된다고 합니다. 그리고 자바스크립트에선 늦게 처리되는 코드들은 잠깐 제쳐두고 바로 다음줄을 실행해줍니다. 그래서 console.log(입력값) 이게 먼저 실행되어서 저렇게 나오는 것일 뿐입니다. 그냥 실행 순서만 좀 다를 뿐 state변경은 어쨌든 잘 됩니다.

## 블로그 글발행 기능 만들기

**_Q.왜 새로고침하면 없어짐?_** -새로고침시 HTML, JS파일 다시 읽어서 그럼. 다시 읽으면 state나 변수같은 것들도 초기값으로 변경됩니다. 원래그럼 그래서 실제 서비스였으면 우선 서버로 보내서 DB에 영구저장을 하거나 그랬겠지만 갑자기 서버와 DB 가르치려면 20강 추가해야하니까 프론트엔드에서만 잘 구현해보면 됩니다.

## class를 이용한 옛날 React 문법

지금은 리액트에서 컴포넌트 만들 때 function쓰라고 권장해요.

```js
class Modal2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>안녕</div>;
  }
}
```

1. class 어쩌구 작성하고 컴포넌트 이름 작명합니다.

2. constructor, super, render 함수 3개 채워넣습니다. 기본 템플릿같은 것임

3. 컴포넌트는 길고 복잡한 html 축약할 때 쓴다고 했습니다. return 안에 축약할 html 적으면 됩니다.

그럼 이제 <Modal2></Modal2>라고 쓸 때 마다 <div>안녕</div> 이게 남습니다.

근데 딱봐도 function으로 컴포넌트 만드는 것 보다 채워야할게 많아서 귀찮습니다.

그래서 평소엔 function 쓰라는 것입니다.

**_class가 뭔데요_**

> class는 변수, 함수 보관하는 통입니다. extends는 기존 class안에 있던 변수, 함수 복사해주는 문법입니다. React.Component라는 class안에 있던 변수와 함수들을 복사해야 컴포넌트라고 인정해주기 때문에 class 어쩌구 extends React.Component라고 쓰는 것입니다. 리액트만든 사람이 그렇게 정한 것일 뿐이라 불만이 있으면 그 사람에게 따져야합니다.

## 만든 리액트 사이트 build & Github Pages로 배포해보기

여러분이 만든 사이트를 배포하려면 그냥 작업하던 App.js 파일 그대로 올리시는게 아니라

build용 파일을 생성하신 후 그걸 올리셔야합니다.

왜냐고요? 웹브라우저는 HTML CSS JS 이 세개의 언어만 해석할 수 있습니다. 리액트의 이상한 state, JSX 이런거 전혀 못알아듣습니다.

그래서 리액트 프로젝트를 build 라는걸 하시면 브라우저 친화적인 HTML CSS JS 파일로 바꿔줍니다.

그리고 그걸 웹에 올리셔야 사용자들이 여러분의 사이트를 구경할 수 있는겁니다.

**_ Q.웹서버 가지고 있는데 여기에 배포는 어떻게 합니까? _**

> 서버를 만들줄 아는 똑똑이시군요. 리액트는 HTML 이쁘게 만들어주는 툴일 뿐입니다. 그래서 리액트로 열심히 프로젝트 만드시고 build 하시면 index.html 파일이 생성됩니다. 그리고 "어떤 놈이 codingapple.com 으로 접속하면 build/index.html 파일 전송해라" 라고 서버 API를 작성하면 간단한 배포가 끝납니다.

### 배포하기 전 체크할 사항

1. 일단 미리보기 띄워보셨을 때 콘솔창, 터미널에 에러만 안나면 됩니다.

warning 메세지는 사이트 구동에 별 영향이 없기 때문에 테스트해보실 땐 개무시하셔도 됩니다.

2. 혹시 사이트를 배포하실 때

http://codingapple.com/ 여기에 배포하시는 경우엔 따로 설정이 필요없이 대충 하셔도 되지만

http://codingapple.com/blog/ 이런 하위 경로에 배포하고 싶으시면 프로젝트에 설정이 따로 필요합니다.

여러분의 프로젝트 파일 중 package.json 이라는 파일을 오픈하면 큰 object가 하나 있는데

```js
"homepage": "http://codingapple.com/blog",
```

homepage라는 key값을 추가하신 후

여러분이 배포할 사이트 경로를 추가해주시면 됩니다. (혹은 /blog 이렇게 경로 쓰셔도 됩니다)

그리고 리액트 라우터가 설치되어있다면 라우터가 제공하는 basename="" 속성을 추가하시는게 라우팅 잘될겁니다.

자세한 내용은 https://create-react-app.dev/docs/deployment/#building-for-relative-paths

### 1. 별 문제가 없다면 이제 터미널에 build 명령어를 입력해보자.

여러분이 작성하신 state, JSX, <컴포넌트>, props 이런 문법들은 브라우저가 해석할 수 없으니 그대로 배포할 수 없습니다.

그래서 이런 문법들을 전통적인 CSS, JS, HTML 문법으로 바꿔주는 작업이 필요합니다.

이것을 컴파일 또는 build라고 합니다.

build 하려면 여러분의 리액트프로젝트에서 터미널을 켠 후

```js
npm run build
```

입력하면 된다.
그럼 여러분 작업 프로젝트 폴더 내에 build 라는 폴더가 하나 생성됩니다.

여러분이 짰던 코드를 전부 .html .css .js 파일로 변환해서 거기 담아줍니다.

build 폴더 안에 안에 있는 내용을 모두 서버에 올리시면 됩니다.

index.html이 메인페이지입니다.

끝

### 2. 근데 우린 무료 호스팅해주는 github pages에 올릴 겁니다.

간단하게 HTML/CSS/JS 파일을 무료로 호스팅해주는 고마운 사이트입니다.

Repository 생성이 끝나면 repository로 자동으로 들어가질겁니다.

▼ 그럼 거기에 build 폴더 내의 파일을 전부 드래그 앤 드롭하시면 됩니다.

(주의) build 폴더를 드래그 앤 드롭하는게 아닙니다. build 폴더 안의 내용물이요.

드래그 앤 드롭하시고 초록버튼까지 눌러주시면 배포 끝입니다.

실수했다면 repository 과감하게 삭제하고 다시 만드시면 됩니다.

**_(흔한 github pages 에러) 왜 사이트 주소로 접속했는데 404 페이지가 뜨죠?_**

- 10분 더 기다려보십시오.

- ctrl + shift + r 을 이용해 새로고침 해보십시오.

- 혹은 repository 생성하실 때 여러분 아이디를 잘못적으신겁니다. 대소문자 틀리지말고 정확히 적으셔야합니다.

정확히 안적었으면 그냥 다시 하나 새로 만드시면 됩니다.

**_(추가) github가 좋아졌습니다_**
이제 여러 repository를 동시에 호스팅해준다고합니다. 다른 HTML 페이지도 호스팅받고 싶으면

0. 위에서 만든 내이름.github.io 라는 repository 잘 있죠? 그거 지우면 안됩니다.

1. 남에게 자랑하고픈 새로운 프로젝트를 올릴 repository를 새로 만들어줍니다. 이름은 아무렇게나 하시면 됩니다.

2. 그 repository에 아까처럼 드래그앤드롭으로 원하는 HTML CSS JS 파일을 업로드하고 확인까지 누릅니다.

3. repository setting 메뉴에 들어가서 Github pages 부분을 찾습니다.

4. 저기 source 부분을 None이 아니라 main 이런걸로 바꿔주고 저장하셈

5. 그럼 끝입니다. 이제 님아이디.github.io/repository이름/ 으로 들어가시면 아까 업로드했던 HTML파일을 볼 수 있습니다.

안보이면

님아이디.github.io/repository이름/html파일명.html

이렇게 직접 들어가시면 됩니다. 그리고 첫 업로드 후엔 보통 10~20분넘게 기다려야 반영됩니다.

---

`Q1. 첫 페이지 로딩 속도를 빠르게 하려면`

원래 리액트, 뷰로 만든 웹앱들은 첫 방문시 필요한 파일을 전부 로드합니다.

트래픽을 조금이라도 줄이고 싶으면 컴포넌트들을 lazy하게 로딩하는 방법을 사용할 수도 있습니다.

공식 튜토리얼에 있는 lazy 함수 : https://reactjs.org/docs/code-splitting.html#route-based-code-splitting

그리고 어짜피 한국에서 github pages는 개느립니다. 서버가 미국에 있어서 이미지 같은거 로드할 때 한세월임 (이건 어쩔 수 없음)

`Q2. 업데이트 사항이 생기면 배포 또 어떻게하죠?`

build 또 하시고 그 파일 그대로 다시 업로드하시면 됩니다.

build 할 때 마다 CSS, JS 파일 명이 무작위로 다시 생성됩니다.

그래서 새로 배포할 때마다 사이트 방문자들은 새로운 CSS,JS 파일을 이용할 수 있습니다.

`Q3. build 할 때 압축 시키지말고 남기고 싶은 파일은?`

여러분이 ./ 부터 시작하는 경로로 첨부한 이미지, js 파일들은 전부 짜부되고 이름이 변합니다.

이름이 변하지 않게 하고 싶으면 public 폴더안에 넣고 build 해보십시오.

그럼 build 하고 나서도 그대로 루트경로에 파일이 남아있습니다.

(개발시 그런 파일들을 이용하고 싶으면 public 폴더에 보관하시고 ./ 이게 아닌 / 경로로 import 해오시면 됩니다)

`Q4. 서버에 올렸는데 왜 접속하면 이상한 페이지가 나오거나 일부 img, css파일이 로드가 안되는 것이죠?`

대부분 경로 문제입니다.

- build 할 때 에러 안나셨겠죠

- 혹시 하위폴더에 배포하신거 아닙니까

- 배포한 페이지가 안나오면 크롬개발자도구 열어서 index.html이 쓰고있는 css, js, img 파일들의 경로가 제대로 되어있는지 체크해보도록 합시다.

`Q5. 메인페이지 말고 왜 특정 페이지로 접속하면 404 에러가 뜨나요?`

어쩌구.github.io/detail/1 이렇게 세부 페이지 URL을 주소창에 직접 입력하시면

찾는 페이지가 없어요~ 이렇게 404 에러가 날 수 있습니다.

이건 서버에서 "누군가 어쩌구.github.io/어쩌구 로 접속하면 메인페이지로 안내하세요~"

라고 API 개발을 해놓으셔야합니다.

아니면 URL에 #기호가 붙는 hashRouter를 리액트 라우터 코드짤 때 쓰시든가요.

근데 github은 우리가 서버를 만지고 어찌할 수 있는게 아니고 그냥 HTML 파일 올린것만 샤락 보여주는 곳이기 때문에

사이트 메뉴에다가 페이지 이동버튼을 잘 만들어두시면 되겠습니다.

---

## 새로운 프로젝트 생성 & Bootstrap 사용하기

### React-Bootstrap

레이아웃을 복사붙여넣기 식으로 편하게 개발가능한 Bootstrap 라이브러리
이거 설치하면 버튼, 메뉴같은거 html css로 직접 디자인안해도 됩니다.

그냥 예제코드 복사붙여넣기만 하면 레이아웃을 매우 쉽게 생성가능합니다.

실은 Bootstrap이 원조인데 이걸 리액트에 맞게 변형한 React-Bootstrap을 설치합시다.

react bootstrap이라고 구글 검색하면 맨 처음에 나오는 사이트로 들어갑시다.

▲ 그리고 get started 이런거 들어가보면 설치하는 법이 쭉 나오는데 그거 그대로 따라하면 됩니다.

**설치 1. 에디터에서 터미널켜고**

```js
npm install react-bootstrap bootstrap
```

**설치 2. 어떤 스타일은 Bootstrap CSS 파일을 요구하는 경우가 있습니다.**
그래서 그냥 그 사이트에 있는 CSS 파일을 index.html 파일의 <head> 태그 안에 복붙해주시면 됩니다.

**React-Bootstrap 사용법**
버튼이 필요하면 React-Bootstrap 사이트에서 검색해서 예제코드를 복붙하면 버튼 생성 끝입니다.

<Button variant="primary">Primary</Button>

이런거 복사붙여넣기하면 파란 버튼이 나온다는데 진짜로 복붙해봅시다.

```js
import { Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <Button variant="primary">Primary</Button>
    </div>
  );
}
```

파란버튼이 나옵니다.

근데 다만 복사붙여넣기할 때 대문자로 시작하는 컴포넌트이름은 상단에 저렇게 import 해와야합니다.

상단메뉴가 필요하면 Navbar라고 그 사이트에서 검색해서

예제코드 복붙하면 개발 끝입니다

```js
import { Button, Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
```

붙여넣기했더니 까만 상단바가 완성되었습니다.

역시 대문자로 시작하는 컴포넌트들은 전부 import 해오면 됩니다.

(참고)

당연히 className 부여해서 CSS 커스터마이징하는건 자유입니다.

심심하면 쇼핑몰스럽게 이것저것 꾸며오십시오

### 이미지 넣는 법 & public 폴더 이용하기

#### (1) css 파일에서 디자인 넣는법

```js
(App.css)

.main-bg {
  height : 300px;
  background-image : url('./bg.png');
  background-size : cover;
  background-position : center;
}
```

css 파일에서 src 폴더안에 있는 사진을 사용하고 싶으면

**./이미지경로**

사용하면 됩니다.

#### (2) html 안에서 src 폴더의 이미지를 넣고 싶으면

html 안에서 이미지를 집어넣고 싶으면 **이미지를 import 해오고 사용해야** 합니다.

```js
import bg from "./bg.png";

function App() {
  return (
    <div>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
    </div>
  );
}
```

1. import 작명 from "./이미지경로"한 다음에
2. 이미지경로가 필요한 곳에서 작명한걸 사용하면 된다.
   <img>태그 쓰고 싶으면 <img src={bg}/> 이렇게 써도 보인다.

#### public 폴더의 용도

여러가지 소스코드는 src 폴더에 보관하면 되는데

이미지같은 static 파일의 경우 public 폴더에 보관해도 됩니다.

리액트로 개발을 끝내면 build 작업이라는걸 하는데

지금까지 짰던 코드를 한 파일로 압축해주는 작업입니다.

src 폴더에 있던 코드와 파일은 다 압축이 되는데 public 폴더에 있는 것들은 그대로 보존해줍니다.

그래서 형태를 보존하고 싶은 파일은 public 폴더에 넣으면 되는데 js 파일은 그럴 일은 거의 없고

이미지, txt, json 등 수정이 필요없는 static 파일들의 경우엔 public 폴더에 보관해도 상관없습니다.

#### public 폴더에 있는 이미지 사용할 땐

```js
<img src="/logo192.png" />
```

그냥 /이미지경로 사용하면 됩니다. 편리하죠?

그래서 페이지에 이미지 100장을 넣어야하는 경우

public 폴더에 밀어넣으면 import 100번 안해도 되니 편리합니다.

css 파일에서도 /이미지경로 사용하면 됩니다.

```js
<img src={process.env.PUBLIC_URL + "/logo192.png"} />
```

하지만 권장되는 방식은 이렇게입니다.

왜냐면 리액트로 만든 html 페이지를 배포할 때

codingapple.com 경로에 배포하면 아무런 문제가 없지만

codingapple.com/어쩌구/ 경로에 배포하면

/logo192.png 이렇게 쓰면 파일을 찾을 수 없다고 나올 수도 있습니다.

그래서 /어쩌구/ 를 뜻하는 process.env.PUBLIC_URL 이것도 더해주면 된다고 하는군요.

codingapple.com/어쩌구/ 경로에 리액트로 만든 페이지를 배포할 일이 아예 없으면 굳이 안해도 됩니다.

## 코드 길어지면 import export하면 됩니다.

### export default / import 문법

- 변수, 함수, 자료형 전부 export 가능합니다.

- 파일마다 export default 라는 키워드는 하나만 사용가능합니다.

- 파일경로는 ./ 부터 시작해야합니다. 현재경로라는 뜻임

### export {} / import {} 문법

여러개의 변수들을 내보내고싶으면 export default 말고 이런 문법을 씁니다.
export {} 이걸로 내보냈으면 가져다가 쓸 때 import {} 문법을 씁니다.

(유의점)

- export { } 했던 것들은 import { } 쓸 때 자유작명이 불가능합니다. export 했던 변수명 그대로 적어야함

그래서 결론은

export default / import 쓰거나

export { } / import { } 쓰거나 둘 중 마음에드는걸 써봅시다.

## 리액트 라우터 1 : 셋팅이랑 기본 라우팅

리액트는 html 파일을 하나만 사용합니다.
그래서 리액트에선 누가 다른 페이지 요청하면 그냥 내부에 있는 <div>를 갈아치워서 보여주면 됩니다.
근데 직접 코드짜면 귀찮으니 react-router-dom 이라는 외부 라이브러리 설치해서 구현하는게 일반적이라 그렇게 해봅시다.

### react-router-dom 설치하려면

외부라이브러리라서 설치 셋팅하는 법은
react-router-dom 홈페이지 들어가서 그대로 따라하면 되는데 그냥 알려드리자면
터미널 열어서
`npm install react-router-dom@6` 입력해서 설치합니다.
셋팅은 index.js 파일로 가서

```js
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

▲ import 어쩌구 해오고
<BrowserRouter> 이걸로 <App/> 이걸 감싸면 끝입니다.

### 라우터로 페이지 나누는 법

다른 웹사이트를 잘 살펴보면
codingapple.com/어쩌구로 접속하면 A페이지를 보여주고
codingapple.com/저쩌구로 접속하면 B페이지를 보여줍니다.
이런 식으로 url 경로마다 다른 페이지를 보여주고 싶으면 이렇게 작성합니다.

```js
(App.js)
import { Routes, Route, Link } from 'react-router-dom'

function App(){
  return (
    (생략)
    <Routes>
      <Route path="/detail" element={ <div>상세페이지임</div> } />
      <Route path="/about" element={ <div>어바웃페이지임</div> } />
    </Routes>
  )
}
```

1. 우선 상단에서 여러가지 컴포넌트를 import 해오고
2. <Routes> 만들고 그 안에 <Route>를 작성합니다.
3. <Route path="/url경로" element={ <보여줄html> } /> 이렇게 작성하면 됩니다.
   그래서 방금 페이지 2개 만든 것임
   진짜 페이지 보이나 url 뒤에 /about 입력해보고 /detail 도 입력해보십시오.

`<Route path="/" element={ <div>메인페이지에서 보여줄거</div> } />`
▲ 이 url 경로는 메인페이지입니다.
Q. 저는 메인페이지 접속시에만 상품목록 보여주고 싶습니다
A. 그럼 element={ } 안에 상품목록 레이아웃 다 넣으면 되는거 아닙니까

```js
<Route
  path="/"
  element={
    <>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i}></Card>;
          })}
        </div>
      </div>
    </>
  }
/>
```

이러면 메인페이지 접속시에만 상품목록이 보이고
나머지 /detail 그리고 /about 페이지에선 안보이겠군요.
이렇게 페이지에서 보여줄 html 내용은 마음대로 작성하면 됩니다.

### 페이지 이동 버튼은

유저들은 주소창에 url 입력해서 들어가지 않고 링크타고 들어갑니다.
링크를 만들고 싶으면 react-router-dom에서 Link 컴포넌트 import 해오고
원하는 곳에서 <Link> 쓰면 됩니다.

```js
<Link to="/">홈</Link>
<Link to="/detail">상세페이지</Link>
```

이러면 각각 url 경로로 이동하는 링크를 생성할 수 있습니다.
진짜 이동하는지 눌러봅시다.

## 리액트 라우터 2 : navigate, nested routes, outlet

오늘은 navigate() 함수와 간단한 프로젝트에선 쓸데없는데 가끔 쓰는 nested routes라는 기능을 배워봅시다.

### 리액트 프로젝트 폴더구조는

리액트는 그냥 html 이쁘게 만들어주는 쪼그만한 라이브러리일 뿐입니다.
그래서 여러분이 만들 파일들은 95% 확률로 .js 파일이기 때문에
비슷한 .js 파일끼리 한 폴더에 묶어놓으면 그냥 그게 좋은 폴더구조입니다.

- 컴포넌트 역할하는 js 파일은 components 폴더에 묶고
- 페이지 역할하는 js 파일은 routes 아니면 pages 폴더에 묶고
- 자주 쓰는 함수가 들어있는 js 파일은 utils 폴더에 묶고
  알아서 필요할 때마다 폴더 만들어쓰십시오

`import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'`

### 1. 페이지 이동기능을 만들고 싶으면 useNavigate() 씁니다.

페이지 이동은 Link 써도 된다고 했는데 그게 못생겼으면 이거 쓰면 됩니다.

```js
function App(){
  let navigate = useNavigate()

  return (
    (생략)
    <button onClick={()=>{ navigate('/detail') }}>이동버튼</button>
  )
}
```

useNavigate() 쓰면 그 자리에 유용한 함수가 남습니다.
페이지 이동시켜주는 함수입니다.
그럼 이제 navigate('/detail') 이런 코드가 실행되면 /detail 페이지로 이동가능합니다.
navigate(2) 숫자넣으면 앞으로가기, 뒤로가기 기능개발도 가능합니다.

-1 넣으면 뒤로 1번 가기
2 넣으면 앞으로 2번 가기 기능입니다.

### 404페이지는

유저가 이상한 경로로 접속했을 때 "없는 페이지입니다" 이런거 보여주고 싶으면

```
<Route path="*" element={ <div>없는페이지임</div> } />
```

<Route path="*"> 하나 맨 밑에 만들어두면 됩니다.

- 경로는 모든 경로를 뜻해서

위에 만들어둔 /detail 이런게 아닌 이상한 페이지 접속시 \* 경로로 안내해줍니다.

### 3. 서브경로 만들 수 있는 nested routes

/about/member로 접속하면 회사멤버 소개하는 페이지
/about/location으로 접속하면 회사위치 소개하는 페이지

를 만들고 싶으면 어떻게 합니까.

```js
<Route path="/about" element={<About />}>
  <Route path="member" element={<div>멤버들</div>} />
  <Route path="location" element={<div>회사위치</div>} />
</Route>
```

이렇게 만들어도 됩니다.

<Route>안에 <Route>를 넣을 수 있는데 이걸 Nested routes 라고 부릅니다.
저렇게 쓰면
/about/member로 접속시 <About> &<div>멤버들</div> 을 보여줍니다.
/about/location으로 접속시 <About> & <div>회사위치</div> 을 보여줍니다.
진짜 보이는지 <About>컴포넌트 하나 만들어서 확인해봅시다.

Q. <div>는 안보이는데요

실은 위처럼 코드짜면

/about/member로 접속시 <About>안에 <div>멤버들</div> 을 보여줍니다.

그래서 <About> 컴포넌트 안에 <div>를 어디다 보여줄지 표기해야 잘보여줍니다.

```js
<Route path="/about" element={<About />}>
  <Route path="member" element={<div>멤버들</div>} />
  <Route path="location" element={<div>회사위치</div>} />
</Route>;

function About() {
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  );
}
```

위에서 import해온 <Outlet>은 nested routes안의 element들을 어디에 보여줄지 표기하는 곳입니다.

그래서 이렇게 해두면

/about/member로 접속시 <Outlet>자리에 아까의 <div> 박스들이 잘 보입니다.

그래서 유사한 서브페이지들이 많이 필요하다면 이렇게 만들어도 됩니다.
방금 만든거 보면 페이지 url을 바꿀 때 마다 각각 다른 UI를 보여주는데

이것도 동적인 UI 만드는 방법 중 하나입니다.

그래서 라우터써도 동적인 UI 만들 수 있습니다.

라우터쓰면 뒤로가기 버튼을 이용가능하다는 장점이 있을듯요

## 리액트 라우터 3 : URL 파라미터로 상세페이지 100개 만들기

Q. 근데 shoes라는 state를 Detail.js 안에서 또 만들면 굳이 props 필요없지 않나요?

A. 나중에 수정이 필요하면 두군데 수정해야해서 귀찮으니 그러면 안됩니다.

### 상세페이지 여러 개 만들려면

```js
<Route path="/detail/:id" element={<Detail shoes={shoes} />} />
```

페이지를 여러개 만들고 싶으면 URL 파라미터라는 문법을 사용가능합니다.

path 작명할 때 /:어쩌구 이렇게 사용하면 "아무 문자"를 뜻합니다.

그래서 위의 <Route>는 누군가 주소창에 /detail/아무거나 입력했을 때

<Detail> 컴포넌트 보여달라는 뜻입니다.

이제 그럼

/detail/0

/detail/1

/detail/2

이렇게 접속해도 <Detail> 컴포넌트 잘 보여줄 수 있습니다.

문제해결

### 페이지마다 똑같은 내용 보여주기 싫은데요

/detail/0

/detail/1

/detail/2

이렇게 페이지는 여러개 만들어놨지만 접속해보면 다 똑같은 0번째 상품명만 보여주고 있습니다.

왜냐면 0번째 상품명 보여달라고 여러분이 코드짰으니까요.

이게 싫으면 이렇게 코드짤 수 있지않을까요.

```js
(Detail.js)

<h4 className="pt-5">{props.shoes[현재url에입력된숫자].title}</h4>
<p>{props.shoes[0].content}</p>
<p>{props.shoes[0].price}원</p>
<button className="btn btn-danger">주문하기</button>
```

0이라고 하드코딩해놨던 자리에

현재url파라미터에 입력된숫자를 넣는겁니다.

그럼 /detail/1로 접속하면 1번째 상품명을 보여줄 수 있을듯요.

저런 숫자를 가져올 수 있냐고요?

가져올 수 있습니다.

```js
import { useParams } from 'react-router-dom'

function Detail(){
  let {id} = useParams();
  console.log(id)

  return (
    <div className="container>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
        <h4 className="pt-5">{props.shoes[id].title}</h4>
        <p>{props.shoes[0].content}</p>
        <p>{props.shoes[0].price}원</p>
        <button className="btn btn-danger">주문하기</button>
      </div>
    </div>
  </div>
  )
}
```

useParams() 라는 함수를 상단에서 import 해오면 쓸 수 있는데

이거 쓰면 현재 /:url파라미터 자리에 유저가 입력한 값을 가져올 수 있습니다.

변수에 저장해서 쓰든가 하면 됩니다.

그래서 위처럼 사용하면

누가 /detail/1로 접속하면 id라는 변수에 1이 들어옵니다.

누가 /detail/2로 접속하면 id라는 변수에 2가 들어옵니다.

그래서 props.shoes[id].title 이러면 아까 의도했던 기능이 완성되겠군요.

페이지마다 각각 다른 상품명이 보입니다.

(참고)

path 작명시 url 파라미터는 몇번이고 사용가능합니다. detail/:어쩌구/:저쩌구 이런식
