# React

`$npx create-react-app 생성할폴더명 --template basic-react`

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

## Styled-Components 쓰면 CSS 파일 없어도 되는데

컴포넌트가 많은 경우 스타일링을 하다보면 불편함이 생기는데

1. class 만들어놓은걸 까먹고 중복해서 또 만들거나
2. 갑자기 다른 이상한 컴포넌트에 원하지않는 스타일이 적용되거나
3. CSS 파일이 너무 길어져서 수정이 어렵거나

이런 경우가 있습니다.
그래서 스타일을 바로 입혀서 컴포넌트를 만들어버릴 수도 있는데
styled-components 라는 인기 라이브러리를 설치하여 이용하시면 됩니다.

`npm install styled-components`
`import styled from 'styled-components'`
그리고 사용하고 싶은 컴포넌트 맨위에 이런걸 import 해와야합니다.

Detail.js 파일 위에 ▲ 위처럼 입력해서 import 해오십시오. 그럼 셋팅 끝

### styled-components 기본적인 사용법

이 라이브러리를 이용하면 컴포넌트를 만들 때 스타일을 미리 주입해서 만들 수 있습니다.

제가 한번 예시로 padding : 20px인 div박스를 styled-components를 이용해 만들어보겠습니다.

```js
import styled from "styled-components";

let Box = styled.div`
  padding: 20px;
  color: grey;
`;
let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;

function Detail() {
  return (
    <div>
      <Box>
        <YellowBtn>버튼임</YellowBtn>
      </Box>
    </div>
  );
}
```

1. <div>를 하나 만들고 싶으면 저렇게 styled.div 라는걸 사용하면 됩니다.

<p> 만들려면 styled.p 이런 식임

2. 오른쪽에 `` backtick 기호를 이용해서 CSS 스타일을 넣을 수 있습니다.

3. 그럼 그 자리에 컴포넌트를 남겨주는데 변수에 저장해서 쓰면 됩니다.

장점1. CSS 파일 오픈할 필요없이 JS 파일에서 바로 스타일넣을 수 있습니다.

장점2. 여기 적은 스타일이 다른 JS 파일로 오염되지 않습니다. 원래 그냥 CSS파일은 오염됩니다.

장점3. 페이지 로딩시간 단축됩니다.

왜냐면 저기 적은 스타일은 html 페이지의 <style>태그에 넣어줘서 그렇습니다.

### 실은 일반 CSS 파일도 오염방지 가능

여러분이 App.css 파일을 만들어서 App.js에서 import해서 쓴다고 해도

거기 적은 클래스명들은 Detail.js까지 사용가능합니다. (오염됨)

프로젝트 사이즈가 작을 땐 편리하겠지만 사이즈가 커지면 관리하기 힘들어집니다.

그럴 땐 styled-components 써도 되지만 그냥 CSS파일에서도 다른 JS 파일에 간섭하지 않는 '모듈화' 기능을 제공하는데

컴포넌트명.module.css

이렇게 CSS 파일을 작명하면 됩니다.

그리고 컴포넌트명.js 파일에서 import 해서 쓰면 그 스타일들은 컴포넌트명.js 파일에만 적용됩니다.

### 추가 문법: props로 재활용가능

여러가지 비슷한 UI가 필요한 경우 어쩌죠?

예를 들어 지금 노란 버튼말고 오렌지색 버튼이 필요해지면?

물론 예전 강의를 잘 되살려보면 props 이용하면 기존 컴포넌트를 살짝씩 다르게 이용할 수 있다고 했습니다.

그래서 여기도 props 문법 지원합니다.

```js
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
`;

function Detail() {
  return (
    <div>
      <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
      <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
    </div>
  );
}
```

${ props => props.bg } 이게 styled-components 에서의 props 뚫는 문법입니다.

bg부분에 자유롭게 작명하면되고

이제 컴포넌트 쓸 때 bg라는 props를 입력가능합니다.

물론 CSS 쓴다고 이게 불가능한건 아닙니다. class 더 만들면 되는 것임

Q. 저거 ${ } 이거 무슨 문법임?

A. 자바스크립트 `` 백틱 따옴표 안에 적어도 문자를 만들 수 있는데

백틱으로 만든 문자 중간에 변수같은걸 넣고 싶을 때 ${ 변수명 } 이렇게 쓸 수 있습니다.

Q. props 전송시 작명={ } 이렇게 전송안하고 따옴표써도 되나요?

A. 넴

```js
let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;
```

### 세상에 장점만 있는 게 어딨습니까.

단점1. JS 파일이 매우 복잡해집니다.

그리고 이 컴포넌트가 styled 인지 아니면 일반 컴포넌트인지 구분도 어렵습니다.

단점2. JS 파일 간 중복 디자인이 많이 필요하면 어쩌죠?

다른 파일에서 스타일 넣은 것들 import 해와서 쓰면 됩니다.

근데 그럼 CSS파일 쓰는거랑 차이가 없을 수도요

단점3. CSS 담당하는 디자이너가 있다면 협업시 불편할텐데

그 사람이 styled-components 문법을 모른다면

그 사람이 CSS로 짠걸 styled-components 문법으로 다시 바꾸거나 그런 작업이 필요하겠군요.

그래서 신기술같은거 도입시엔 언제나 미래를 생각해보아야합니다.

styled-components를 써보고 싶다면 직접 레이아웃 몇개 만들어보며 익혀보면 되겠습니다.

## Lifecycle과 useEffect 1

오늘은 Lifecycle 어쩌구랑 useEffect라는 함수에 대해 알아봅시다.

어딜 들쳐봐도 다들 어렵게 가르치는 Lifecycle 이라는 개념이 있는데 실은 별거아닙니다.

이걸 배우는 이유는 componentDidMount() 이런 유용한 Lifecycle 함수들을 쓰기 위해서 배우는겁니다.

요즘 사람들은 저렇게 긴 함수 안쓰고 useEffect() 라는 깔끔한 함수를 사용하기 때문에 우리도 그걸 배워봅시다.

### 컴포넌트의 인생

여러분이 만들어쓰고있는 컴포넌트는 Lifecycle이라는 개념이 있습니다.
컴포넌트도 인생이 있다는겁니다.
컴포넌트는

1. 생성이 될 수도 있고 (전문용어로 mount)

2. 재렌더링이 될 수도 있고 (전문용어로 update)

3. 삭제가 될 수도 있습니다. (전문용어로 unmount)

컴포넌트의 인생을 배우는 이유는 컴포넌트 인생 중간중간에 간섭할 수 있기 때문입니다.

간섭이 뭐냐면 그냥 코드실행인데

컴포넌트가 장착이 될 때 특정 코드를 실행할 수도 있고

컴포넌트가 업데이트될 때 특정 코드를 실행할 수도 있다는 겁니다.

그럼 재밌는 기능들 개발가능

### 인생에 간섭하는 방법

Detail 컴포넌트 등장 전에 이것좀 해줘"

"Detail 컴포넌트 사라지기 전에 이것좀 해줘"

"Detail 컴포넌트 업데이트 되고나서 이것좀 해줘"

이렇게 코드좀 실행해달라고 간섭할 수 있는데 간섭은 갈고리(hook)를 달아서 합니다.
갈고리를 달아서 코드를 넣어주면 됩니다. 그럼 진짜 페이지 장착시, 업데이트시, 제거시 코드실행가능 갈고리는 영어로 hook이라고 합니다. 그래서 저걸 Lifecycle hook 이라고 부릅니다

### 옛날 React에서 Lifecycle hook 쓰는 법

```js
class Detail2 extends React.Component {
  componentDidMount() {
    //Detail2 컴포넌트가 로드되고나서 실행할 코드
  }
  componentDidUpdate() {
    //Detail2 컴포넌트가 업데이트 되고나서 실행할 코드
  }
  componentWillUnmount() {
    //Detail2 컴포넌트가 삭제되기전에 실행할 코드
  }
}
```

예전엔 class 문법으로 컴포넌트를 만들었습니다.
그 경우엔 안에 함수명을 저렇게 써주면 각각 특정 Lifecycle에서 코드를 실행할 수 있었습니다.

### 요즘 React에서 Lifecycle hook 쓰는 법

```js
import { useState, useEffect } from "react";

function Detail() {
  useEffect(() => {
    //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    console.log("안녕");
  });

  return 생략;
}
```

useEffect 를 사용 할 때에는 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣습니다. 만약에 deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출됩니다.

주로, 마운트 시에 하는 작업들은 다음과 같은 사항들이 있습니다.

props 로 받은 값을 컴포넌트의 로컬 상태로 설정
외부 API 요청 (REST API 등)
라이브러리 사용 (D3, Video.js 등...)
setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
그리고 언마운트 시에 하는 작업들은 다음과 같은 사항이 있습니다.

setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
라이브러리 인스턴스 제거

**Q. 왜 저는 '안녕' 2번 출력됨?**

index.js에 <React.StrictMode>라는 태그가 있으면 2번 출력해줍니다.
디버깅용으로 편하라고 2번 출력해주는데 싫으면 저 태그를 제거하거나 그럽시다.

### 근데 useEffect 밖에 적어도 똑같은데요

들킴

실은 useEffect 바깥에 적어도 똑같이 컴포넌트 mount & update시 실행됩니다.

컴포넌트가 mount & update시 function 안에 있는 코드도 다시 읽고 지나가서 그렇습니다.

그럼 대체 useEffect 왜 만들어놓은 것이죠

그래서 문법 배우는게 중요한게 아니라 이걸 배웠으면

어떤 상황에서 언제 사용할지도 함께 배워야합니다.

그래야 나중에 "여기서 useEffect 써도 되나요" 이런 초보질문 안함

**useEffect 안에 적은 코드는 html 렌더링 이후에 동작합니다.**

그럼 이제 useEffect가 뭔가 유용할 것 같지 않습니까

예를 들어서 굉장히 시간이 오래걸리는 쓸데없는 코드가 필요하다고 가정해봅시다.

> 함수안에 이것저것 코드짤 때 함수의 핵심기능 외에 쓸데없는 기능들을 프로그래밍 용어로 side effect라고 부릅니다. 그래서 useEffect도 거기서 따온건데 컴포넌트의 핵심 기능은 html 렌더링이라 그거 외의 쓸데없는 기능들은 useEffect 안에 적으라는 소리입니다. 오래걸리는 반복연산, 서버에서 데이터가져오는 작업, 타이머다는거 이런건 useEffect 안에 많이 적습니다.

## Lifecycle과 useEffect 2

동적인 UI 같은 거 만들 땐

1. UI 상태를 저장할 state 만들고

2. state에 따라서 UI가 어떻게 보일지 작성하라고 했으니 그거부터 해봅시다.

### useEffect에 넣을 수 있는 실행조건

`useEffect(()=>{ 실행할코드 }, [count])`

useEffect()의 둘째 파라미터로 [ ] 를 넣을 수 있는데 거기에 변수나 state같은 것들을 넣을 수 있습니다. 그렇게 하면 [ ]에 있는 변수나 state 가 변할 때만 useEffect 안의 코드를 실행해줍니다. 그래서 위의 코드는 count라는 변수가 변할 때만 useEffect 안의 코드가 실행되겠군요.

(참고) [ ] 안에 state 여러개 넣을 수 있음

`useEffect(()=>{ 실행할코드 }, [])`
아무것도 안넣으면 컴포넌트 mount시 (로드시) 1회 실행하고 영영 실행해주지 않습니다.
그래서 저번시간 숙제에도 [ ] 이걸 넣어봤습니다.

### clean up function

useEffect 동작하기 전에 특정코드를 실행하고 싶으면

return ()=>{} 안에 넣을 수 있습니다.

```js
useEffect(()=>{
  그 다음 실행됨
  return ()=>{
    여기있는게 먼저실행됨
  }
}, [count])
```

그럼 useEffect 안에 있는 코드를 실행하기 전에

return ()=>{ } 안에 있는 코드를 실행해줍니다.

참고로 저걸 clean up function 이라고 부릅니다.

왜 저딴 쓸데없는 기능이 있냐고요?여러분 복잡하고 어려운 숙제할 때

책상을 싹 치우고 하면 잘되는 것 처럼

useEffect 안에 있는 코드를 실행할 때도

싹 치우고 깔끔한 마음으로 실행하는게 좋을 때가 있습니다.

예를 들면 숙제로 했던 setTimeout 타이머인데

setTimeout() 쓸 때마다 브라우저 안에 타이머가 하나 생깁니다.

근데 useEffect 안에 썼기 때문에 컴포넌트가 mount 될 때 마다 실행됩니다.

그럼 잘못 코드를 짜면 타이머가 100개 1000개 생길 수도 있겠군요.

나중에 그런 버그를 방지하고 싶으면useEffect에서 타이머 만들기 전에 기존 타이머를 싹 제거하라고 코드를 짜면 되는데

그런거 짤 때 return ()=>{} 안에 짜면 됩니다.

```js
useEffect(() => {
  let a = setTimeout(() => {
    setAlert(false);
  }, 2000);
  return () => {
    clearTimeout(a);
  };
}, []);
```

타이머 장착하기 전에 기존 타이머가 있으면 제거를 해줄듯요.
(참고1) clean up function에는 타이머제거, socket 연결요청제거, ajax요청 중단 이런 코드를 많이 작성합니다.

(참고2) 컴포넌트 unmount 시에도 clean up function 안에 있던게 1회 실행됩니다.

### 빡통 정리 시간

저런 코드가 언제 실행되는지만 잘 알아두면 알아서 개발가능한데

원리이해가 싫다면 사용법만 정리해둡시다.

`useEffect(()=>{ 실행할코드 })`

1. 이러면 재렌더링마다 코드를 실행가능합니다.
   `useEffect(()=>{ 실행할코드 }, [])`
2. 이러면 컴포넌트 mount시 (로드시) 1회만 실행가능합니다.

```js
useEffect(() => {
  return () => {
    실행할코드;
  };
});
```

3. 이러면 useEffect 안의 코드 실행 전에 항상 실행됩니다.

```js
useEffect(() => {
  return () => {
    실행할코드;
  };
}, []);
```

4. 이러면 컴포넌트 unmount시 1회 실행됩니다.

```js
useEffect(() => {
  실행할코드;
}, [state1]);
```

5. 이러면 state1이 변경될 때만 실행됩니다.

## 리액트에서 서버와 통신하려면 ajax 1

오늘은 상품 더보기 기능을 만들어봅시다. 그래서 실제 상품을 서버에서 가져와볼 것인데 서버가 뭔지 그리고 통신은 어떻게 하는지 부터 알아봅시다.

### 서버란?

유저가 데이터달라고 요청을 하면 데이터를 보내주는 간단한 프로그램일 뿐입니다. 네이버웹툰 서버 : 유저가 웹툰 달라고 하면 웹툰 보내주는 프로그램 유튜브 서버 : 유저가 영상 달라고 하면 영상 보내주는 프로그램 입니다. 그래서 서버개발 별거아님 "누가 A를 요청하면 A를 보내주세요" 라고 코드짜는게 서버개발 끝입니다. 유저가 그냥 데이터달라고 떼쓰면 서버가 보내주진 않습니다. 서버에 데이터를 요청할 때는 정확한 규격에 맞춰서 요청해야하는데

1. 어떤 데이터인지 (URL 형식으로)
2. 어떤 방법으로 요청할지 (GET or POST)
   잘 기재해야 데이터를 보내줍니다.

   데이터를 가져올 때는 보통 GET 고르면 되고

데이터를 서버로 보낼 때는 POST 고르면 됩니다.

그리고 어떤 데이터를 보고싶은지 URL만 잘 기재하면 되는데

예를 들어서 쇼미더럭키짱이라는 네이버웹툰을 보고싶으면

https://comic.naver.com/webtoon/list?titleId=783054 여기 URL로 GET요청하면 보내줍니다.

예를 들어서 독립일기라는 네이버웹툰을 보고싶으면

https://comic.naver.com/webtoon/list?titleId=748105 여기 URL로 GET요청하면 보내줍니다.

URL을 어떻게 알았냐고요?

네이버 웹툰 서버개발자에게 물어보거나 URL이 기재된 html 페이지를 찾아보거나 그러면 됩니다

### GET/POST 요청하는 법?

GET요청을 날리고 싶으면 가장 쉬운 방법은 브라우저 주소창입니다.

거기에 URL 아무거나 적으면 그 곳으로 GET요청을 날려줍니다.

진짠지 테스트해보셈

POST요청을 날리고 싶으면

<form action="요청할url" method="post"> 태그 이용하면 됩니다.

그럼 폼이 전송되었을 때 POST요청을 날려줍니다.

근데 GET, POST 요청을 저렇게 날리면 단점이 뭐냐면 브라우저가 새로고침됩니다.

### AJAX란?

서버에 GET, POST 요청을 할 때 새로고침 없이 데이터를 주고받을 수 있게 도와주는 간단한 브라우저 기능을 AJAX라고 합니다. 그거 쓰면 새로고침 없이도 쇼핑몰 상품을 더 가져올 수도 있고 새로고침 없이도 댓글을 서버로 전송할 수도 있고 그런 기능을 만들 수 있는 것임 AJAX로 GET/POST요청하려면 방법 3개 중 택1 하면 됩니다.

1. XMLHttpRequest라는 옛날 문법 쓰기

2. fetch() 라는 최신 문법 쓰기

3. axios 같은 외부 라이브러리 쓰기

3번이 가장 편하니 3번을 써봅시다.

`npm install axios`

### AJAX 요청하는 법

버튼누르면 제가 만든 서버로 ajax 요청을 해봅시다.
https://codingapple1.github.io/shop/data2.json 이 URL로 GET요청을 하면 상품 3개를 가져와줍니다.
여기로 요청해봅시다.

```js
import axios from "axios";

function App() {
  return (
    <button
      onClick={() => {
        axios
          .get("https://codingapple1.github.io/shop/data2.json")
          .then((결과) => {
            console.log(결과.data);
          })
          .catch(() => {
            console.log("실패함");
          });
      }}
    >
      버튼
    </button>
  );
}
```

1. axios를 쓰려면 상단에서 import해오고

2. axios.get(URL) 이러면 그 URL로 GET요청이 됩니다.

3. 데이터 가져온 결과는 결과.data 안에 들어있습니다.

그래서 위의 버튼 누르면 서버에서 가져온 데이터가 콘솔창에 출력됩니다.

4. 인터넷이 안되거나 URL이 이상하면 실패하는데

실패했을 때 실행할 코드는 .catch() 안에 적으면 됩니다.

그래서 오늘의 숙제로

버튼을 누르면 서버에서 상품데이터 3개를 가져와서

메인페이지에 상품카드 3개를 더 생성해봅시다.

(팁) 리액트에선 html을 3개 더 생성해주세요~라고 코드짜지 않는다고 했습니다.

state 조작하면 html 알아서 생성될걸요

### POST요청 하는 법

`axios.post('URL', {name : 'kim'})`
이거 실행하면 서버로 { name : 'kim' } 자료가 전송됩니다.

완료시 특정 코드를 실행하고 싶으면 이것도 역시 .then() 뒤에 붙이면 됩니다.

### 동시에 AJAX 요청 여러 개 날리려면

`Promise.all( [axios.get('URL1'), axios.get('URL2')] )`
이러면 URL1, URL2로 GET요청을 동시에 해줍니다.

둘 다 완료시 특정 코드를 실행하고 싶으면 .then() 뒤에 붙이면 됩니다.

### 원래 서버와 문자자료만 주고받을 수 있음

object/array 이런거 못주고받습니다.

근데 방금만해도 array 자료 받아온 것 같은데 그건 어떻게 한거냐면

object/array 자료에 따옴표를 쳐놓으면 됩니다.

"{"name" : "kim"}"

이걸 JSON 이라고 합니다.

JSON은 문자 취급을 받기 때문에 서버와 자유롭게 주고받을 수 있습니다.

그래서 실제로 결과.data 출력해보면 따옴표쳐진 JSON이 나와야하는데

axios 라이브러리는 JSON -> object/array 변환작업을 자동으로 해줘서

출력해보면 object/array가 나옵니다.

`fetch('URL').then(결과 => 결과.json()).then((결과) => { console.log(결과) } )`
쌩자바스크립트 문법인 fetch() 를 이용해도 GET/POST 요청이 가능한데
그건 JSON -> object/array 이렇게 자동으로 안바꿔줘서 직접 바꾸는 작업이 필요합니다.
마음에 들면 쓰도록 합시다.

## 리액트에서 탭 UI 만들기

### 리액트 국룰

1. html css로 디자인 미리 완성해놓고
2. UI의 현재 상태를 저장할 state 하나 만들고
3. state에 따라서 UI가 어떻게 보일지 작성하면 된다고 했습니다.

### 1. HTML, CSS 탭 디자인 미리 완성하기

버튼3개와 <div> 3개가 필요합니다.

디자인하기 귀찮아서 버튼은 react-bootstrap 사이트에서 복사해서 Detail 페이지에 넣어봤습니다.

```js
<Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<div>내용0</div>
<div>내용1</div>
<div>내용2</div>
```

거기 문서 보니까 eventKey 속성은 버튼마다 맘대로 작명하면 된다고 합니다.

defaultActiveKey 여기는 페이지 로드시 어떤 버튼에 눌린효과를 줄지 결정하는 부분입니다.

### 2. UI의 현재 상태를 저장할 state 하나 만들기

```js
function Detail() {
  let [탭, 탭변경] = useState(0)(생략);
}
```

상단에 state 하나 만들었습니다.

탭 UI의 상태는

0번 내용이 보이거나 / 1번 내용이 보이거나 / 2번 내용이 보이거나

셋 중 하나기 때문에 저는 0, 1, 2 숫자로 상태를 표현해보겠습니다.

### 3. state에 따라서 UI가 어떻게 보일지 작성

state가 0이면 0번 내용 보여주세요~

1이면 1번 내용 보여주세요~

이렇게 코드짜면 됩니다. 삼항연산자 이런거 써도 되는데 심심하니까 컴포넌트로 만들어봅시다.

```js
<Nav variant="tabs" defaultActiveKey="link0">
  <Nav.Item>
    <Nav.Link
      onClick={() => {
        탭변경(0);
      }}
      eventKey="link0"
    >
      버튼0
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link
      onClick={() => {
        탭변경(1);
      }}
      eventKey="link1"
    >
      버튼1
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link
      onClick={() => {
        탭변경(2);
      }}
      eventKey="link2"
    >
      버튼2
    </Nav.Link>
  </Nav.Item>
</Nav>
```

### 센스좋으면 if 필요 없을 수도 있습니다

```js
function TabContent({ 탭 }) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭];
}
```

## 멋있게 컴포넌트 전환 애니메이션 주는 법 (transition)

컴포넌트 등장, 퇴장 애니메이션같은게 필요하면 라이브러리설치해서 써도 되겠지만 CSS 잘하면 간단한건 알아서 개발가능합니다. 옛날에 배웠던 useEffect 이런거 활용하면 되는데
CSS 애니메이션 처음인 분들을 위해 오늘도 정확한 개발스텝을 알려드립니다.

애니메이션 만들고 싶으면

1. 애니메이션 동작 전 스타일을 담을 className 만들기

2. 애니메이션 동작 후 스타일을 담을 className 만들기

3. transition 속성도 추가

4. 원할 때 2번 탈부착

이게 끝입니다. CSS 잘쓰면 모든 애니메이션 알아서 만들 수 있습니다.

저번에 만들었던 탭의 내용이 서서히 등장하는 fade in 애니메이션을 만들어봅시다.

### 1. 애니메이션 동작 전 2. 애니메이션 동작 후 className 만들기

```js
.start {
  opacity : 0
}
.end {
  opacity : 1;
  transition : opacity 0.5s;
}
```

CSS 파일 열어서 이런거 추가하면 됩니다.
애니메이션 동작 전엔 투명도가 0, 동작 후엔 투명도가 1이 되면 좋을듯요
transition은 "해당 속성이 변할 때 서서히 변경해주세요~" 라는 뜻입니다.

그럼 이제 원하는 <div> 요소에 start 넣어두고 end 를 탈부착할 때 마다 fade in이 됩니다.

### 원할 때 end 부착

이제 "버튼을 누를 때 마다 end를 저기 부착해주세요" 라고 코드짜면 애니메이션 동작합니다.

버튼누르면 end 부착하라고 코드짜려면 코드를 3번이나 짜야할듯요 버튼이 3개니까요.

그게 싫으면 useEffect 이런거 활용해봐도 됩니다.

useEffect 쓰면 특정 state 아니면 props가 변할 때 마다 코드실행이 가능하다고 했습니다.

그래서 "탭이라는 state가 변할 때 end를 저기 부착해주세요" 라고 코드짜도 같을듯

```js
function TabContent({ 탭 }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setFade("end");
  }, [탭]);

  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}
```

탭이라는게 변할 때 end를 저기 부착하고 싶으면 동적인 UI 만드는 법 떠올리면 됩니다.

- fade라는 state 하나 만들고

- state에 따라서 className이 어떻게 보일지 작성하고

- 원할 때 fade를 변경했습니다.

이제 탭이라는 state가 변할 때 마다

fade라는 state가 'end'로 변하고

그럼 className="start end" 이렇게 변합니다.

이제 버튼 막 누르면 end가 부착되니까 애니메이션이 잘 보이겠군요

Q. 안보이는데요

내 의도와 다르게 동작하는건 개발자도구에서 검사해보면 됩니다.

end라는 클래스명을 부착하는게 맞긴 맞는데

실은 떼었다가 붙여야 애니메이션이 보입니다. end를 떼었다가 붙여보셈

```js
function TabContent({ 탭 }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTImeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [탭]);

  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}
```

▲ 떼었다가 부착하라고 코드짜봤습니다.

clean up function 안에 fade라는 state를 공백으로 바꾸라고 했으니

useEffect 실행 전엔 'end'가 ' ' 이걸로 바뀝니다.

이제 잘될듯

### Q. setTimeout 왜 씁니까

리액트 18버전 이상부터는 automatic batch 라는 기능이 생겼습니다.

state 변경함수들이 연달아서 여러개 처리되어야한다면

state 변경함수를 다 처리하고 마지막에 한 번만 재렌더링됩니다.

그래서 'end' 로 변경하는거랑 ' ' 이걸로 변경하는거랑 약간 시간차를 뒀습니다.

찾아보면 setTimeout 말고 flushSync() 이런거 써도 될 것 같기도 합니다. automatic batching을 막아줍니다.

## props 싫으면 Context API 써도 됩니다.

App에 있던 state를 TabContent 컴포넌트에서 사용하고 싶어지면 어떻게 코드짜야하죠?

App -> Detail -> TabContent 이렇게 props를 2번 전송해주면 됩니다.
이게 귀찮으면 Context API 문법을 쓰거나 Redux 같은 외부 라이브러리 쓰면 되는데 오늘은 전자를 알아봅시다.

### Context API 문법으로 props 없이 state 공유하기

재고라는 state를 App 컴포넌트에 만들어봅시다.

이걸 TabContent라는 자식컴포넌트에서 쓰고싶다고 가정해봅시다.

Context API 문법을 쓰면 props 전송없이도 TabContent 컴포넌트가 쓸 수 있는데

이거 쓰려면 일단 셋팅부터 해야합니다.

```js
App.js;

export let Context1 = React.createContext();

function App() {
  let [재고, 재고변경] = useState([10, 11, 12]);

  생략;
}
```

▲ 1. 일단 createContext() 함수를 가져와서 context를 하나 만들어줍니다.

context를 쉽게 비유해서 설명하자면 state 보관함입니다.

```js
App.js;

export let 재고context = React.createContext();

function App() {
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <Context1.Provider value={{ 재고, shoes }}>
      <Detail shoes={shoes} />
    </Context1.Provider>
  );
}
```

▲ 2. 아까만든 Context1로 원하는 곳을 감싸고 공유를 원하는 state를 value 안에 다 적으면 됩니다.

그럼 이제 Context1로 감싼 모든 컴포넌트와 그 자식컴포넌트는

state를 props 전송없이 직접 사용가능합니다.

### Context 안에 있던 state 사용하려면

1. 만들어둔 Context를 import 해옵니다.

2. useContext() 안에 넣습니다.

그럼 이제 그 자리에 공유했던 state가 전부 남는데 그거 쓰면 됩니다.

```js
Detail.js;

import { useState, useEffect, useContext } from "react";
import { Context1 } from "./../App.js";

function Detail() {
  let { 재고 } = useContext(Context1);

  return <div>{재고}</div>;
}
```

▲ 예를 들어서 Detail 컴포넌트에서 Context에 있던 state를 꺼내 쓰려면

1. Context1을 import 하고

2. useContext() 안에 담으면 됩니다. Context 해체해주는 함수임

그럼 그 자리에 공유했던 모든 state가 남습니다.

변수에 담아서 가져다쓰거나 하면 됩니다.

심지어 Detail 안에 있는 모든 자식컴포넌트도 useContext() 쓰면 자유롭게 재고 state를 사용가능합니다.

TabContent 안에서 실험해봅시다.

### Q. props보다 불편한데요?

A. 그럼 props를 씁시다. 이건 중첩해서 사용한 컴포넌트가 많을 때 편리한 문법입니다.

### Context API 단점

실은 잘 안쓰는 이유는

1. state 변경시 쓸데없는 컴포넌트까지 전부 재렌더링이 되고

2. useContext() 를 쓰고 있는 컴포넌트는 나중에 다른 파일에서 재사용할 때 Context를 import 하는게 귀찮아질 수 있습니다.

그래서 이것 보다는 redux 같은 외부라이브러리를 많이들 사용합니다.

## 장바구니 페이지 만들기 & Reduc 1 : Redux Toolkit 설치

/cart로 접속하면 장바구니 페이지를 보여줍시다.

근데 장바구니 기능은 Redux 배울 겸 그걸 이용해서 만들어봅시다.

### 여기서 잠깐! 리덕스(Redux)란 무엇인가?

리덕스는 어플리케이션의 클라이언트쪽 state를 관리하기 위한 거대한 이벤트루프이다.
액션 = 이벤트
리듀서 = 이벤트에 대한 반응

Redux공식 문서(참조)에 의하면 리덕스는 클라이언트 앱의 복잡성을 제어하기 위한 하나의 state제어 수단이라고 한다(정확히는 방법론이 맞는것 같다.)

### Redux의 원리

어플리케이션 전체에는 store라는 커다란 하나의 state가 존재하는데 이것이 어플리케이션의 state를 총괄한다.

이 store의 state는 그 자체를 직접 변형할 수 없고, 오직 순수 함수인 `리듀서`로만 새로운 형태로 갈아치우는 것이 가능하다.

리듀서는 type과 payloads(꼭 속성이름이 이렇지 않아도 됨)를 속성으로 갖는 단순 객체인 action이벤트가 발생했을 때에만 작동하며

action이벤트를 발생시키는 방법은 dispatch라는 함수에 단순 객체인 action을 넣는것으로 가능하게 한다.

이제 앞서 말했던 순서를 시간순으로 정리해보자.

dispatch(action) => 리듀서 작동 => store의 state변경 => 변경된 state가 state를 subscribe하고 있는 컴포넌트에 전달

### application전체의 상태를 redux로 관리하면 어떤 장점이 있을까?

1. 가장 먼저, application state의 변화가 예측가능하게 변한다는 점이다.
2. 리듀서가 순수 함수(외부에 영향을 끼치지 않는 함수. ex: api calling이 없는 함수)이기 때문에 test코드를 짤 수 있다는 장점도 존재한다.
3. 마지막으로 선언적으로 프로그래밍을 할 수 있다는 점이다(Declarative Programming)

### 결론 `redux는 state관리를 위한 거대한 event loop`

액션 = 이벤트
리듀서 = 이벤트에 대한 반응

즉, 액션이벤트를 발생시켜서 리듀서라는 이벤트에 대한 반응을 일으키므로서 어플리케이션의 state를 a라는 상태에서 b라는 상태로 만든다.(a is b)

### 장바구니 페이지만들기

페이지하나 필요하면 어떻게 해야합니까.

라우터 쓰면 되는 것 아니겠습니까 그래서 App.js의 <Routes> 쓰던 곳을 찾아가봅시다.

```js
<Route path="/cart" element={<Cart />} />
```

그리고 <Route>를 하나 추가했습니다. 누가 /cart 로 접속하면 <Cart> 컴포넌트를 보여주기로 했습니다.

<Cart> 컴포넌트는 알아서 만들어서 저기 넣으면 됩니다.

전 Cart.js 라는 다른 파일에 컴포넌트 만들었음

### 장바구니 페이지에서 사용할 Table 레이아웃은

```js
<Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>안녕</td>
      <td>안녕</td>
      <td>안녕</td>
    </tr>
  </tbody>
</Table>
```

이거 넣으면 표가 생성됩니다. Cart 컴포넌트에 넣어봤습니다.

물론 React-bootstrap에서 가져온거라 상단에서 import { Table } from 'react-bootstrap' 하면 됩니다.

### Redux 쓰면 뭐가 좋냐면

Redux는 props 없이 state를 공유할 수 있게 도와주는 라이브러리입니다.
이거 설치하면 js 파일(`redux store.js`) 하나에 state들을 보관할 수 있는데

그걸 모든 컴포넌트가 직접 꺼내쓸 수 있습니다.

그래서 귀찮은 props 전송이 필요없어집니다.

컴포넌트가 많아질 수록 좋겠군요.

그래서 사이트가 커지면 쓸 수 밖에 없어서

개발자 구인시에도 redux같은 라이브러리 숙련도를 대부분 요구합니다.

### Redux 설치는

```js
npm install @reduxjs/toolkit react-redux
```

터미널에 입력하면됩니다.

참고로 redux toolkit이라는 라이브러리를 설치할 건데 redux의 개선버전이라고 보면 됩니다. 문법이 좀 더 쉬워짐

근데 설치하기 전에 package.json 파일을 열어서

"react"

"react-dom"

항목의 버전을 확인합시다.

이거 두개가 18.1.x 이상이면 사용가능합니다.
그게 아니면 `package.json`에서 직접 두개를 18.1.0 이렇게 수정한 다음 파일저장하고

터미널에서 npm install 누르면 됩니다. 그럼 이제 redux 설치가능

### Redux 세팅은

```js
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {},
});
```

1. 아무데나 store.js 파일을 만들어서 위 코드를 복붙해줍니다.

저는 src 폴더 안에 만들었음

이게 뭐냐면 아까 말했던 state들을 보관하는 파일입니다.

```js
import { Provider } from "react-redux";
import store from "./store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
```

2. index.js 파일가서 Provider 라는 컴포넌트와 아까 작성한 파일을 import 해옵니다.

그리고 밑에 <Provider store={import해온거}> 이걸로 <App/> 을 감싸면 됩니다.

그럼 이제 <App>과 그 모든 자식컴포넌트들은 store.js에 있던 state를 맘대로 꺼내쓸 수 있습니다.

간편하겠군요 실제 사용은 다음시간에 해봅시다.

## Redux 2 : store에 state 보관하고 쓰는 법

**오늘의 숙제 :**

하단에 있는 데이터를 Redux store 안에 보관해둡시다.

그리고 Cart.js 페이지에 가져와서 데이터바인딩해봅시다.

데이터 갯수에 맞게 표 생성해달라고 반복문쓰는 것도 좋을듯요

```js
[
  { id: 0, name: "White and Black", count: 2 },
  { id: 2, name: "Grey Yordan", count: 1 },
];
```

▲ 유저가 장바구니에 추가한 데이터라고 생각하고

redux store에 보관해두고 가져다가 써봅시다.

array 자료 안에 object 자료가 2개 들어있을 뿐입니다.

object 자료 안엔 상품 1개의 정보가 들어있군요

### Redux 왜 쓰느냐

뭐 배우기 전에 항상 이걸 왜 쓰는지 생각해보는게 중요합니다.

그래야 나중에 "여기서 Redux 쓰는게 맞나요?" 이런 질문 안하고 알아서 코드 잘짬

Redux 라이브러리 왜 쓴다고 했냐면

state를 Redux store에 보관해둘 수 있는데 모든 컴포넌트가 거기 있던 state를 직접 꺼내쓸 수 있어서

props 없어도 편리하게 state 공유가 가능하다고 했습니다.

오늘은 Redux store에 state 보관하는 법을 알아봅시다.

### Redux store에 state 보관하는 법

저번시간에 만들어둔 store.js 파일 열어서 이렇게 코드짜면 state 하나 만들 수 있습니다.

step 1. createSlice( ) 로 state 만들고

step 2. configureStore( ) 안에 등록하면 됩니다.

```js
import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
});

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
```

1. createSlice( ) 상단에서 import 해온 다음에

**{ name : 'state이름', initialState : 'state값' }** 이거 넣으면 state 하나 생성가능합니다.

(createSlice( ) 는 useState( ) 와 용도가 비슷하다고 보면 됩니다)

2. state 등록은 configureStore( ) 안에 하면 됩니다.

**{ 작명 : createSlice만든거.reducer }** 이러면 등록 끝입니다.

여기 등록한 state는 모든 컴포넌트가 자유롭게 사용가능합니다.

### Redux store에 있던 state 가져다쓰는 법

```js
Cart.js;

import { useSelector } from "react-redux";

function Cart() {
  let a = useSelector((state) => {
    return state;
  });
  console.log(a);

  return 생략;
}
```

아무 컴포넌트에서 useSelector((state) => { return state } ) 쓰면 store에 있던 모든 state가 그 자리에 남습니다.

변수에 저장해서 진짜로 출력해보십시오.

{ user : 'kim' } 이런거 출력될듯

```js
let a = useSelector((state) => state.user);
```

이런 식으로 쓰면 좀 더 편리할 수도 있습니다.

### Redux 편하니까 맨날 쓰면 되겠네요

간단한거 만들 때

컴포넌트가 몇개 없을 때

이럴 땐 그냥 props 쓰는게 더 코드가 짧습니다.

## Redux 3: store의 state 변경하는 법

Redux의 state를 변경하고 싶으면 변경하는 법이 따로 있습니다.

1. store.js에 state변경해주는 함수부터 만들고

2. export 해두고

3. 필요할 때 import 해서 쓰면 되는데 dispatch() 로 감싸서 써야합니다.

좀 길고 복잡합니다.

### 저번 시간 숙제는

store.js에 장바구니 데이터 보관한 다음에

Cart.js 적절한 곳에 꽂아넣어보라고 했습니다.

```js
let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
})``;
```

▲ state 이렇게 만들어두고

```js
<tbody>
  {state.cart.map((a, i) => (
    <tr key={i}>
      <td>1</td>
      <td>{state.cart[i].name}</td>
      <td>{state.cart[i].count}</td>
      <td>안녕</td>
    </tr>
  ))}
</tbody>
```

▲ Cart.js 에선 이렇게 코드짜봤습니다.

let state = useSelector((state)=> state)

당연히 위에서 이렇게 state 부터 가져와야할듯

### store의 state 변경하는 법

큰 그림부터 그려드리면

state 수정해주는 함수부터 store.js에 만들어두고

그걸 컴포넌트에서 원할 때 실행하는 식으로 코드를 짭니다.

버튼누르면 예전에 'kim' 이라고 저장해놓은걸 'john kim' 으로 수정하고 싶으면 어떻게 해야할지 알아봅시다.

정확한 step으로 딱딱 알려드려야 혼자 코드짤 때 편하니까 step을 알려드리면

### 1. store.js 안에 state 수정해주는 함수부터 만듭니다.

```js
let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return "john " + state;
    },
  },
});
```

slice 안에 reducers : { } 열고 거기 안에 함수 만들면 됩니다.

- 함수 작명 맘대로 합니다.

- 파라미터 하나 작명하면 그건 기존 state가 됩니다.

- return 우측에 새로운 state 입력하면 그걸로 기존 state를 갈아치워줍니다.

이제 changeName() 쓸 때 마다 'kim' -> 'john kim' 이렇게 변할듯

### 2. 다른 곳에서 쓰기좋게 export 해둡니다.

```js
export let { changeName } = user.actions;
```

이런 코드 store.js 밑에 추가하면 됩니다.

slice이름.actions 라고 적으면 state 변경함수가 전부 그 자리에 출력됩니다.

그걸 변수에 저장했다가 export 하라는 뜻일 뿐임

3. 원할 때 import 해서 사용합니다. 근데 dispatch() 로 감싸서 써야함

예를 들어서 Cart.js 에서 버튼같은거 하나 만들고

그 버튼 누르면 state를 'kim' -> 'john kim' 이렇게 변경하고 싶으면

```js
(Cart.js)

import { useDispatch, useSelector } from "react-redux"
import { changeName } from "./../store.js"

(생략)

<button onClick={()=>{
  dispatch(changeName())
}}>버튼임</button>
```

이렇게 코드짜면 됩니다.

- store.js에서 원하는 state변경함수 가져오면 되고

- useDispatch 라는 것도 라이브러리에서 가져옵니다.

- 그리고 dispatch( state변경함수() ) 이렇게 감싸서 실행하면 state 진짜로 변경됩니다.

진짜인지 궁금하면 user라는 state 한 번 출력해보십시오.

dispatch로 꼭 감싸야 실행됩니다.

`그지같고 복잡한데요`

store안에 있는 state를 수정하고 싶으면

- state 수정해주는 함수를 store.js에 만들어두고

- 컴포넌트는 그걸 부르기만 하는 식으로 state 수정하게 되어있습니다.

`Q. 왜 이렇게 복잡하고 그지같나요?`

Redux 만든 사람이 정한 문법일 뿐이라 Redux 만든사람에게 뭐라하면 됩니다.

`Q. 컴포넌트에서 state 직접 수정하면 편하지 않나요?`

그럼 당장은 편한데 나중에 프로젝트가 커지면 심각한 단점이 있을 수 있습니다.

컴포넌트 100개에서 직접 'kim' 이라는 state 변경하다가

갑자기 'kim'이 123이 되어버리는 버그가 발생하면

범인 찾으려고 컴포넌트 100개를 다 뒤져야합니다.

근데 state 수정함수를 store.js에 미리 만들어두고

컴포넌트는 그거 실행해달라고 부탁만 하는 식으로 코드를 짜놓으면

'kim'이 123이 되어버리는 버그가 발생했을 때 범인찾기가 수월합니다.

범인은 무조건 store.js에 있으니까요. (수정함수를 잘 만들어놨다면)

아무튼 그런 장점 덕분에 저따구로 코드를 짜는 것일 뿐이고

자신있으면 예습 차원으로

Cart 페이지에 만들어둔 버튼누르면 왼쪽에 있는 수량이 +1 되는 기능을 만들어봅시다.

## Redux 4 : state가 object/array일 경우 변경하는 법

**오늘의 숙제 :**

1. - 버튼을 누르면 해당 상품의 수량부분이 +1 되는 기능을 만들어옵시다.

2. 상세페이지 주문하기 버튼을 누르면 새로운 상품이 state에 추가되는 기능을 만들어옵시다.

약간의 힌트

1번은 이렇게 코드짜면 쉬울텐데

"0번째 버튼을 누르면 state의 0번째 상품을 +1 해주세요~"

"1번째 버튼을 누르면 state의 1번째 상품을 +1 해주세요~"

그러면 됩니다.

근데 나중에 Cart페이지에 있는 상품들 정렬 순서같은게 바뀌거나 그럴 경우

store의 state는 정렬순서가 그대로라면 약간 이상한 일이 일어날 수도 있겠군요.

그래서 "버튼을 누르면 옆에 있는 상품id와 동일한 상품id 가진걸 state에서 찾은 다음에 그걸 +1"

하라고 하면 좀 정확할듯요

Q. 전 array에서 원하는 항목 찾는 방법을 모르는데요

A. 모르는건 생각해본다고 나오지 않습니다

2번은 그냥 state에 새로운 { } 하나 추가하면 그게 상품추가기능 끝입니다.

---

store에 저장된 state가 array, object 자료인 경우 state 변경을 좀 쉽게 편리하게 할 수 있는데

오늘은 그 방법을 알아봅시다.

### redux state가 array/object인 경우 변경하려면

대충 {name : 'kim', age : 20} 이렇게 생긴 자료를 state로 만들어봅시다.

근데 저기서 'kim' -> 'park' 이렇게 변경하고 싶으면 state 변경함수 어떻게 만들어야할까요?

```js
let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      return { name: "park", age: 20 };
    },
  },
});
```

당연히 저렇게 쓰면 changeName() 사용시 변경됩니다.

return 오른쪽에 적은걸로 기존 state를 갈아치워주니까요.

```js
let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park";
    },
  },
});
```

근데 state를 직접 수정하라고해도 변경 잘 됩니다.

state를 직접 수정하는 문법을 사용해도 잘 변경되는 이유는

Immer.js 라이브러리가 state 사본을 하나 더 생성해준 덕분인데 Redux 설치하면 딸려와서 그렇습니다.

그래서 결론은 array/object 자료의 경우 state변경은

state를 직접 수정해버려도 잘 되니까 직접 수정하십시오.

(참고) 그래서 state 만들 때 문자나 숫자하나만 필요해도

redux에선 일부러 object 아니면 array에 담는 경우도 있습니다.

수정이 편리해지니까요.

**간단한 퀴즈시간**

사이트 아무데나 버튼 하나만 만들어봅시다.

그 버튼을 누르면 위에 있는 state 중에 age 항목이 +1 되어야합니다.

어떻게 만들면 될까요?

```js
let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    increase(state) {
      state.age += 1;
    },
  },
});
```

이렇게 increase라는 함수 만들고

export 하고

필요한 곳에서 import 해서 dispatch(increase()) 하면 +1 됩니다.

**state 변경함수가 여러개 필요하면**

방금 퀴즈에서 +1 하는 기능을 만들어봤는데

가끔은 +10 하고 가끔은 +100 하고싶으면 어떻게 하죠?

+10 하는 함수만들고

+100 하는 함수만들고

그렇게 여러개를 미리 만들어놔도 되는데

근데 함수는 파라미터문법 이용하면 비슷한 함수 여러개 만들 필요가 없다고 했습니다.

state변경함수에도 파라미터문법 사용가능함

```js
let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    increase(state, a) {
      state.age += a.payload;
    },
  },
});
```

state변경함수의 둘째 파라미터를 작명하면 이제

increase(10)

increase(100)

이런 식으로 파라미터입력을 해서 함수사용이 가능합니다.

파라미터자리에 넣은 자료들은 a.payload 하면 나옵니다.

그래서 위처럼 코드 작성해놓으면

increase(10) 이거 실행하면 +10 됩니다.

increase(100) 이거 실행하면 +100 됩니다.

여기서도 파라미터문법 이용하면 비슷한 함수들은 여러개 만들 필요없습니다.

진짜 잘되는지 확인하려면 가져다가 써봅시다.

**(참고)**

- a 말고 action 이런 식으로 작명 많이 합니다.

- action.type 하면 state변경함수 이름이 나오고

- action.payload 하면 파라미터가 나옵니다.

**파일 분할은**

코드가 길어서 보기싫으면 코드 덩어리들을 다른 파일로 빼면 됩니다.

그래서 강의에선 let user 변수와 state변경함수 export 부분을

store폴더/userSlice.js로 빼봤습니다.

import export 문법 배웠으면 알아서 잘할 수 있겠군요.

## Redux 5 : 장바구니 기능 만들기 숙제 & 응용문제

실력향상 응용문제들 :

응용1. 표의 행마다 삭제버튼 만들고 그거 누르면 상품이 삭제되게 만들려면?

응용2. 주문하기 버튼 누를 때 이미 상품이 state안에 있으면 추가가 아니라 기존 항목 수량증가만?

### 숙제1. 수량 +1 기능 만들기

버튼누르면 일단 state를 수정해야하니까 state를 +1 해주는 수정함수부터 만들었습니다.

```js
let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      state[action.payload].count++;
    },
  },
});
```

addCount라는 함수 만들어놨습니다.

addCount(0) 하면 0번째 상품이 +1 됩니다.

addCount(1) 하면 1번째 상품이 +1 됩니다.

export 해놓고 필요할 때 쓰면 되겠군요.

```js
(Cart.js)

<tbody>
  {
    state.cart.map((a, i)=>
      <tr key={i}>
        <td>{state.cart[i].id}</td>
        <td>{state.cart[i].name}</td>
        <td>{state.cart[i].count}</td>
        <td>
          <button onClick={()=>{ dispatch(addCount(i)) }}>+</button>
        </td>
      </tr>
     )
   }
</tbody>
```

장바구니페이지에 있는 + 버튼 누르면 addCount() 하라고 코드짜봤습니다.

당연히 쓰려면 import해와야합니다.

근데 addCount(i) 이렇게 i 변수를 넣어봤는데 이러면

0번째 버튼을 누르면 addCount(0) 실행해줍니다.

1번째 버튼을 누르면 addCount(1) 실행해줍니다.

왜냐고요? i 변수는 반복문에서 생성해주는 0,1,2 이렇게 1씩 증가하는 숫자니까요.

여기까지만 하면 잘 동작하긴 합니다.

### 근데 좀 정확히하고 싶으면

"버튼 누르면 버튼 옆에 있는 상품 id 가져와서

이거랑 똑같은 id를 가진 상품을 state에서 찾아서 그걸 +1 해주쇼"

라고 코드짜는게 더 확실할 것 같군요.

그럼 나중에 상품 순서가 이상하게 바뀌거나 그래도 잘 동작할듯 하니까요.

```js
dispatch(addCount(state.cart[i].id));
```

1. 그래서 버튼누르면 이렇게 옆에있던 상품 id를 payload로 전송하라고 해놨고

```js
let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
  },
});
```

2. "payload와 같은 id를 가진 상품을 찾아서 +1 해달라~"고 코드짰습니다.

array 자료에서 원하는 항목을 찾으려면

반복문, find(), findIndex() 이런거 골라서 쓰면 됩니다.

findIndex()는 array 뒤에 붙일 수 있는데

- 안에 콜백함수넣고 return 뒤에 조건식도 넣으면 됩니다.

- a라는 파라미터는 array 안에 있던 하나하나의 자료입니다.

- array에 있던 자료를 다 꺼내서 조건식에 대입해보는데 조건식이 참이면 그게 몇번째 자료인지 알려줍니다.

그래서 위의 코드는 a.id와 payload가 같으면 그게 몇번째 자료인지 변수에 저장하라는 소리입니다.

Q. 안가르쳐준건데 저걸 내가 어떻게 알고 사용합니까?

A. 저도 "array에서 원하는거 찾는 법"을 검색했읍니다

### 숙제2. 주문버튼누르면 state에 새로운 상품추가

상세페이지의 주문하기 버튼을 누르면

장바구니 state에 항목이 하나 추가되어야합니다.

이것도 state 변경함수 만들고 export하고 import해서 사용했습니다.

```js
let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      state[action.payload].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});
```

1. addItem이라고 함수 만들어놨습니다.

addItem( {id : 2, name : 'Grey Yordan', count : 1} )

이렇게 사용하면 {id : 2, name : 'Grey Yordan', count : 1} 이 상품이 state에 추가가 됩니다.

export 하고 가져다쓰도록 합시다.

```js
(Detail.js)

<div className="col-md-6">
  <h4 className="pt-5">{찾은상품.title}</h4>
  <p>{찾은상품.content}</p>
  <p>{찾은상품.price}원</p>
  <button className="btn btn-danger" onClick={()=>{
    dispatch(addItem( {id : 1, name : 'Red Knit', count : 1} ))
  }}>주문하기</button>
  </div>
</div>
```

2. 상세페이지에서 주문버튼 누르면 addItem() 이거 실행해달라고 코드짰습니다.

(당연히 상단에서 import 해와야겠죠)

그럼 이제 버튼 누를 때 {id : 1, name : 'Red Knit', count : 1} 이런 상품이 추가되는데

'Red Knit' 라고 하드코딩하는게 아니라 현재 페이지의 상품명을 집어넣는 것도 좋겠군요.

그럼 각각 다른 상세페이지여도 잘 동작하겠네요.

Q. 근데 cart 페이지로 가보면 장바구니에 새로운 상품이 없는데요

A. 주소창에 /cart 입력하면 페이지가 새로고침됩니다.

새로고침되면 state도 초기값으로돌아갑니다. 라우터 버튼 만들어서 페이지 이동합시다.

실은 지금 설치해서 사용중인 라이브러리는 Redux Toolkit임

Redux 만든 사람이 이전의 과오를 깨닫고 새롭게 만든 라이브러리입니다.

Redux를 조금 더 쓰기 쉽게 만든 버전인데

Redux 만든 아저씨가 요즘은 이거 쓰라고하니까 이걸 많이 쓰도록 합시다.

## 리액트에서 자주쓰는 if문 작성패턴 5개

딱히 설명할 부분이 없어서 글로 진행합니다.

지금까지 JSX 이용해서 html을 작성하고 있는데

if문을 써서 조건부로 html을 보여주고 싶을 때가 매우 많습니다.

지금까지는 삼항연산자만 주구장창 사용했는데 또 어떤 if문들을 쓸 수 있는지 맛만 보고 지나갑시다.

그냥 코딩 스타일적인 부분이기 때문에 그냥 이런게 있다고 알아두기만 해도 될듯요

### 1. 컴포넌트 안에서 쓰는 if/else

```js
function Component() {
  if (true) {
    return <p>참이면 보여줄 HTML</p>;
  } else {
    return null;
  }
}
```

컴포넌트에서 JSX를 조건부로 보여주고 싶으면 그냥 이렇게 씁니다.

우리가 자주 쓰던 자바스크립트 if문은

return () 안의 JSX 내에서는 사용 불가능합니다.

<div> if (어쩌구) {저쩌구} </div> 이게 안된다는 소리입니다.

그래서 보통 return + JSX 전체를 퉤 뱉는 if문을 작성해서 사용합니다.

**(참고) 근데 이렇게 쓰시려면 else 생략이 가능합니다**

```js
function Component() {
  if (true) {
    return <p>참이면 보여줄 HTML</p>;
  }
  return null;
}
```

else와 중괄호를 하나 없애도 아까 코드와 똑같은 기능을 합니다.

왜냐면 자바스크립트 function 안에선 return 이라는 키워드를 만나면 return 밑에 있는 코드는 더이상 실행되지 않으니까요.

그래서 else가 필요없는 경우도 많으니 깔끔한 코드를 위해 한번 생략해보십시오.

if -> else if -> else 이렇게 구성된 조건문도 if 두개로 축약가능합니다. 한번 생각해보시면 됩니다.

### JSX안에서 쓰는 삼항연산자

영어로 간지나게 ternary operator 라고 합니다.

조건문 ? 조건문 참일때 실행할 코드 : 거짓일 때 실행할 코드

이 형식에 맞춰 쓰면 끝입니다.

```js
function Component() {
  return <div>{1 === 1 ? <p>참이면 보여줄 HTML</p> : null}</div>;
}
```

그냥 JSX 내에서 if/else 대신 쓸 수 있다는게 장점이고 이전 강의들에서 자주 해본 것이니 설명은 스킵하도록 하겠습니다.

삼항연산자는 그냥 if와는 다르게 JSX 안에서도 실행가능하며 조건을 간단히 주고 싶을 때 사용합니다.

삼항연산자는 중첩 사용도 됩니다.

```js
function Component() {
  return (
    <div>
      {1 === 1 ? (
        <p>참이면 보여줄 HTML</p>
      ) : 2 === 2 ? (
        <p>안녕</p>
      ) : (
        <p>반갑</p>
      )}
    </div>
  );
}
```

else 문 안에 if/else 문을 하나 추가한 건데 제가 써놓고도 뭔소린지 모르겠군요

이렇게 나중에 읽었을 때 + 남이 읽었을 때 보기싫은 코드는 좋지 않습니다.

그냥 return문 바깥에서 if else 쓰신 다음 그 결과를 변수로 저장해놓고 변수를 저기 집어넣든 하십시오.

### && 연산자로 if 역할 대신하기

(문법) 자바스크립트에선 &&연산자라는게 있습니다.

"그냥 왼쪽 오른쪽 둘다 true면 전체를 true로 바꿔주세요~" 라고 쓰고싶을 때 씁니다.

```js
true && false;
true && true;
```

맨 위의 코드는 그 자리에 false가 남고

밑의 코드는 true가 남습니다.

별거 아닙니다.
근데 자바스크립트는 && 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면

```js
true && "안녕";
false && "안녕";
true && false && "안녕";
```

맨 윗 코드는 '안녕'이 남고

중간 코드는 false가 남고

맨 아래 코드는 false가 남습니다.

왜냐면 && 연산자를 잘 생각해보면 이해도 가능한데 이해를 하기 싫으면

"자바스크립트는 그냥 &&로 연결된 값들 중에 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막값을 남겨준다"

이런 이상한 현상이 있다고 외우면 됩니다.

이걸 리액트에서 약간 exploit 하면 if문을 조금 더 간략하게 쓸 수 있습니다.

html 조건부로 보여줄 때 이런 경우가 많습니다.

"만약에 이 변수가 참이면 <p></p>를 이 자리에 뱉고 참이 아니면 null 뱉고"

UI만들 때 이런거 매우 자주 씁니다.

이걸 조금 더 쉽게 축약할 수 있습니다. && 연산자를 쓰면 됩니다.

```js
function Component() {
  return <div>{1 === 1 ? <p>참이면 보여줄 HTML</p> : null}</div>;
}

function Component() {
  return <div>{1 === 1 && <p>참이면 보여줄 HTML</p>}</div>;
}
```

그래서 위의 예제 두개는 동일한 역할을 합니다.

밑의 예제를 보시면 && 연산자로 조건식과 오른쪽 JSX 자료를 비교하고 있습니다.

이 때, 왼쪽 조건식이 true면 오른쪽 JSX가 그 자리에 남습니다.

왼쪽 조건식이 false면 false가 남습니다.

`(false가 남으면 HTML로 렌더링하지 않습니다)`

아무튼 "만약에 이 변수가 참이면 <p></p>를 이 자리에 뱉고 참이 아니면 null 뱉고"

이런 상황에서 자주 쓸 수 있는 간단한 조건문입니다.

### switch / case 조건문

이것도 기본 문법인데 if문이 중첩해서 여러개 달려있는 경우에 가끔 씁니다.

```js
function Component2() {
  var user = "seller";
  if (user === "seller") {
    return <h4>판매자 로그인</h4>;
  } else if (user === "customer") {
    return <h4>구매자 로그인</h4>;
  } else {
    return <h4>그냥 로그인</h4>;
  }
}
```

▲ if문을 저렇게 연달아 여러개 써야되는 상황들이 있으면

자바스크립트 switch 문법을 이용하면 괄호를 조금 더 줄일 수 있습니다.

```js
function Component2() {
  var user = "seller";
  switch (user) {
    case "seller":
      return <h4>판매자 로그인</h4>;
    case "customer":
      return <h4>구매자 로그인</h4>;
    default:
      return <h4>그냥 로그인</h4>;
  }
}
```

▲ switch 문법 어떻게 쓰냐면

1. switch (검사할변수){} 이거부터 작성하고

2. 그 안에 case 검사할변수가이거랑일치하냐 : 를 넣어줍니다.

3. 그래서 이게 일치하면 case : 밑에 있는 코드를 실행해줍니다.

4. default : 는 그냥 맨 마지막에 쓰는 else문과 동일합니다.

장점은 if문 연달아쓸 때 코드가 약간 줄어들 수 있는데

조건식란에서 변수하나만 검사할 수 있다는게 단점입니다.

### `5. object/array 자료형 응용`

"경우에 따라서 다른 html 태그들을 보여주고 싶은 경우"

if문 여러개 혹은 삼항연산자 여러개를 작성해야겠죠? 근데 이렇게 작성할 수도 있습니다.

예를 들면 쇼핑몰에서 상품설명부분을 탭으로 만든다고 합시다.

탭이 뭐냐면 그냥 경우에 따라서 상품정보 / 배송정보 / 환불약관 내용을 보여주고 싶은겁니다.

현재 state가 info면 <p>상품정보</p>

현재 state가 shipping이면 <p>배송정보</p>

현재 state가 refund면 <p>환불약관</p>

이런걸 보여주자는겁니다.

일단 state를 만들어놓고 if문으로 state를 검사하는 문법을 써야할 것 같지만

이번엔 if문이 아니라 자바스크립트 object 자료형에 내가 보여주고 싶은 HTML을 다 담습니다.

```js
function Component() {
  var 현재상태 = "info";
  return (
    <div>
      {
        {
          info: <p>상품정보</p>,
          shipping: <p>배송관련</p>,
          refund: <p>환불약관</p>,
        }[현재상태]
      }
    </div>
  );
}
```

▲ 원래 JSX 상에서 html 태그들은 저렇게 object에 담든, array에 담든 아무 상관없습니다.

암튼 이렇게 object 자료형으로 HTML을 다 정리해서 담은 다음

마지막에 object{} 뒤에 [] 대괄호를 붙여서 "key값이 현재상태인 자료를 뽑겠습니다" 라고 써놓는겁니다.

그럼 이제 현재상태라는 변수의 값에 따라서 원하는 HTML을 보여줄 수 있습니다.

만약에 var 현재상태가 'info'면 info 항목에 저장된 <p>태그가 보여질 것이고

만약에 var 현재상태가 'refund'면 refund 항목에 저장된 <p>태그가 보여지겠죠?

아주 간단하고 직관적인 if문이 완성되었습니다.

이제 if/else 몰라도 조건부로 html 보여주기 가능

(예제에선 귀찮아서 state가 아니라 var 변수를 만들었습니다)

```js
var 탭UI = {
  info: <p>상품정보</p>,
  shipping: <p>배송관련</p>,
  refund: <p>환불약관</p>,
};

function Component() {
  var 현재상태 = "info";
  return <div>{탭UI[현재상태]}</div>;
}
```

▲ 뭔가 매우 깔끔해졌습니다.

실은 안깔끔합니다

리액트처럼 html css js를 마구 한데 비벼서 개발하면 어떻게 해도 코드가 더러움

# localStorage로 만드는 최근 본 상품 기능 1

새로고침하면 모든 state 데이터는 리셋됩니다.

왜냐면 새로고침하면 브라우저는 html css js 파일들을 첨부터 다시 읽기 때문입니다.

이게 싫다면 state 데이터를 서버로 보내서 DB에 저장하거나 하면 됩니다.

내가 서버나 DB 지식이 없다면 localStorage를 이용해도 됩니다.

유저의 브라우저에 몰래 정보를 저장하고 싶을 때 쓰는 공간입니다.

▲ 크롬개발자 도구에서 Application 탭 들어가면 구경가능합니다.

- 사이트마다 5MB 정도의 문자 데이터를 저장할 수 있습니다.

- object 자료랑 비슷하게 key/value 형태로 저장합니다.

유저가 브라우저 청소를 하지 않는 이상 영구적으로 남아있습니다.

밑에 있는 Session Storage도 똑같은데 브라우저 끄면 삭제됩니다.

## localStorage 문법

그냥 js 파일 아무데서나 다음 문법을 쓰면

localStorage에 데이터 입출력할 수 있습니다.

```js
localStorage.setItem("데이터이름", "데이터");
localStorage.getItem("데이터이름");
localStorage.removeItem("데이터이름");
```

차례로 추가, 읽기, 삭제 문법입니다.

진짜 저장되었는지 application 탭에서 확인해보십시오.

## localStorage에 array/object 자료를 저장하려면

문자만 저장할 수 있는 공간이라 array/object를 바로 저장할 수는 없습니다.

강제로 저장해보면 문자로 바꿔서 저장해주는데 그럼 array/object 자료가 깨져서 저장됩니다.

그래서 편법이 하나 있는데 array/object -> JSON 이렇게 변환해서 저장하면 됩니다.

JSON은 문자취급을 받아서 그렇습니다.

JSON은 그냥 따옴표친 array/object 자료입니다.

```js
localStorage.setItme("obj", JSON.stringify({ name: "kim" }));
```

JSON.stringify() 라는 함수에 array/object를 집어넣으면 그 자리에 JSON으로 변환된걸 남겨줍니다.

그래서 위처럼 코드짜면 저장가능합니다.

"{"name":"kim"}" 이런거 저장될듯

```js
var a = localStorage.getItem("obj");
var b = JSON.parse(a);
```

당연히 데이터를 다시 꺼내면 JSON이 나옵니다.

JSON -> array/object 변환하고 싶으면

JSON.parse()를 쓰면 되겠습니다.

## 최근 본 상품 UI 기능 만들기

메인페이지에 최근 본 상품을 보여주는 성가신 UI를 만들어봅시다.

근데 사이트를 재접속해도 잘 보여야하기 때문에 localStorage를 활용해봅시다.

그래서 다음 시간까지 만들어오면 되는데

하지만 여러분에 대한 기대치가 높지 않기 때문에 가장 쉬운거 하나만 해오면 됩니다.

상세페이지 들어가면 현재 페이지에 있는 상품 id를 localStorage에 저장되게 만들어오면 됩니다.

저장할 땐 array 자료형을 활용합시다.

만약에 0번 1번 상품을 보았다면 [0,1] 이런 데이터가 localStorage에 저장되게 하면 되겠군요.

그리고 시간남으면 메인페이지에서 이 데이터를 가지고

최근 본 상품 UI도 자유롭게 만들어보십시오.

### 약간의 힌트

누가 내 사이트로 접속시 localStorage에 [ ] 가 하나 있어야

자료 추가같은게 쉬울 것 같습니다.

```js
function App() {
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);
}
```

# localStorage로 만드는 최근 본 상품 기능 2

## 내가 코드 짜는 법을 모른다면

이런 기능만들라고 하면 코드 어떻게 짜야할지 모르겠다는 분들은

리액트를 못하는게 아니라 프로그래밍하는 법을 모를 뿐입니다.

잠깐 설명하자면 "컴퓨터라는 노예에게 명령내리는 행위"를 프로그래밍이라고 합니다.

그리고 컴퓨터는 코드만 알아듣기 때문에 자바스크립트로 명령내리면 됩니다.
근데 안타깝게도 컴퓨터는 지능이란게 없어서

"최근 본 상품 기능좀 만들어줘"

이렇게 대충 명령하면 절대 못알아듣습니다.
10 분
localStorage로 만드는 최근 본 상품 기능 2

0:00 아직 코드짜는 법을 모른다면

2:12 저번시간 숙제

8:06 응용사항

저번시간 숙제만 해보고 지나갈 것이기 때문에

잘 했으면 응용사항만 보고 지나갑시다.

내가 코드짜는 법을 모른다면

이런 기능만들라고 하면 코드 어떻게 짜야할지 모르겠다는 분들은

리액트를 못하는게 아니라 프로그래밍하는 법을 모를 뿐입니다.

잠깐 설명하자면 "컴퓨터라는 노예에게 명령내리는 행위"를 프로그래밍이라고 합니다.

그리고 컴퓨터는 코드만 알아듣기 때문에 자바스크립트로 명령내리면 됩니다.

근데 안타깝게도 컴퓨터는 지능이란게 없어서

"최근 본 상품 기능좀 만들어줘"

이렇게 대충 명령하면 절대 못알아듣습니다.

5살짜리 애한테 설명하듯이

1. 누가 Detail 페이지 접속하면

2. 상품번호 가져와서

3. localStorage에 우선 array 형식으로 보관하고..

이런 식으로 하나하나 상세히 설명해야 명령을 수행합니다. 컴퓨터는 빡통이라그럼

그래서 저렇게 상세히 설명을 한글로 적어놓고

그걸 그대로 자바스크립트 문법으로 옮기기는게 프로그래밍입니다.

그래서 코드부터 짜는게 아니라 컴퓨터에게 어떤걸 시킬지 한글부터 쭉 상세히 적고 번역하면 됩니다.

## Q. 코딩고수들 강의 보면 코딩할 때 한글 그런거 안적는데요?

A. 머릿속으로 함

아무튼 프로그래밍 하는 법을 알아야 코드짤 수 있습니다.

한글은 짜겠는데 코드로 번역을 못하겠다고요?

그건 자바스크립트 기초를 이상한데서 배워서 그럼

## localStorage에 state를 자동저장되게 만들고 싶으면

직접 코드짜도 되긴 하는데

redux-persist 이런 라이브러리 설치해서 쓰면 redux store 안에 있는 state를 자동으로 localStorage에 저장해줍니다.

state 변경될 때마다 그에 맞게 localStorage 업데이트도 알아서 해줌

하지만 셋팅문법 복잡하고 귀찮습니다.

그래서 요즘은 신규 사이트들은 Redux 대신 Jotai, Zustand 같은 라이브러리를 사용합니다.

같은 기능을 제공하는데 셋팅도 거의 필요없고 문법이 훨씬 더 쉬우니까요.

그리고 그런 라이브러리들도 아마 localStorage 자동저장기능들이 있습니다.

물론 빨리 취업하려면 리덕스 떡칠된 포트폴리오 만들어서 보여주면 됩니다.

## 응용사항

지금은 사이트 새로고침시 localStorage에 있던 항목도 싹 [] 이렇게 비워집니다.

왜냐면 App컴포넌트 로드시 [] 이거 새로 넣으라고 코드짰으니까요.

이게 싫으면

이미 localStorage에 watched 항목이 있으면 [] 이거 새로 넣지 말라고 코드를 짜봅시다.

# 실시간 데이터가 중요하면 react-query

(업데이트 사항) 라이브러리 이름이 react-query에서 @tanstack/react-query로 바뀌어서

```js
npm install @tanstack/react-query
```

1. 설치시엔 이거 입력합시다

```js
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
```

2. import 해서 사용시엔 이거 입력합시다

```js
useQuery(['작명'],
```

3. useQuery쓸 때 '작명' 말고 ['작명'] 입니다

---

ajax 요청하다보면 이런 기능들이 가끔 필요해집니다.

- 몇초마다 자동으로 데이터 다시 가져오게 하려면?

- 요청실패시 몇초 간격으로 재시도?

- 다음 페이지 미리가져오기?

- ajax 성공/실패시 각각 다른 html을 보여주려면?

직접 개발해도 되겠지만 귀찮으면 react-query 라는 라이브러리 설치해서 써도 됩니다.

SNS, 코인거래소같은 실시간 데이터를 보여줘야하는 사이트들이 쓰면 유용하고

나머지 사이트들은 딱히 쓸데는 없습니다.

원래 강의할 때 다양한거 얕게 찍먹하면 "와 많은걸 배웠네요" 하면서 만족도가 높아지는 이상한 현상이 있습니다.

그래서 찍먹하고 넘어가야합니다.

## react-query 설치 & 세팅은

터미널에서 npm install react-query 하고

index.js 파일 열어서

```js
import { QueryClient, QueryClientProvider } from "react-query"; //1번
const queryClient = new QueryClient(); //2번

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    {" "}
    //3번
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);
```

1번 2번 3번 하면 됩니다.

## react-query로 ajax 요청하는 법

그냥 ajax 요청해도 되는데

react-query를 써서 ajax 요청을 날리면 더 편리한 기능을 제공합니다.

```js
function App() {
  let result = useQuery("작명", () =>
    axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
      return a.data;
    })
  );
}
```

useQuery 라는걸 상단에서 import 해온 뒤에

useQuery()로 ajax 요청을 감싸면 됩니다.

그럼 유용한 기능을 제공해주는데

## 장점1. ajax 요청 성공/실패/로딩중 상태를 쉽게 파악할 수 있습니다.

```js
function App() {
  let result = useQuery("작명", () =>
    axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
      return a.data;
    })
  );

  return (
    <div>
      {result.isLoading && "로딩중"}
      {result.error && "에러남"}
      {result.data && result.data.name}
    </div>
  );
}
```

result라는 변수에 ajax 현재 상태가 알아서 저장됩니다.

- ajax요청이 로딩중일 땐 result.isLoading 이 true가 됩니다.

- ajax요청이 실패시엔 result.error 가 true가 됩니다.

- ajax요청이 성공시엔 result.data 안에 데이터가 들어옵니다.

그래서

ajax 로딩중일 땐 <A/> 보여주세요~

ajax 성공시엔 <B/> 보여주세요~

이런거 직접 개발하려면 state 부터 만들어야 했을텐데 얘는 그럴 필요가 없습니다.

## 장점2. 틈만나면 알아서 ajax 재요청해줍니다.

페이지 체류하고나서 일정시간이 경과하거나

님들이 다른 창으로 갔다가 다시 페이지로 돌아오거나

다시 메인페이지로 돌아가거나

이런 여러 경우에 알아서 ajax 요청을 다시 해줍니다.

당연히 재요청 끄는 법, 재요청간격 조절하는 법도 있습니다.

## 장점3. 실패시 재시도 알아서 해줌

잠깐 인터넷이 끊겼거나 서버가 죽었거나 그러면 ajax 요청이 실패합니다.

실패했을 때는 얘가 4번인가 5번인가 재시도를 알아서 해줍니다.

편리합니다.

## 장점4. ajax로 가져온 결과는 state 공유 필요없음

지금 App 컴포넌트에서 유저이름 가져오는 ajax 요청을 날리고 있습니다.

근데 그 유저이름 결과가 Detail 컴포넌트에도 필요하면 어쩌죠?

- 유저이름을 props 전송하면 됩니다.

근데 실은 props 전송 필요없습니다.

Detail 컴포넌트에다가 유저이름 ajax 요청하는 코드 똑같이 또 적으면 됩니다.

react-query는 스마트하기 때문에 ajax 요청이 2개나 있으면 1개만 날려주고

캐싱기능이 있기 때문에 이미 같은 ajax 요청을 한 적이 있으면 그걸 우선 가져와서 씁니다.

react-query가 주장하는 장점은

server-state (DB 데이터)를 프론트엔드에서 실시간 동기화해주는걸 도와준다고 합니다.

근데 ajax 요청을 몇초마다 계속 날려서 가져오는 방식이라 좀 비효율적일 수도 있습니다.

실시간으로 서버에서 데이터를 자주 보내려면 웹소켓이나 Server-sent events 같은 가벼운 방식들도 있습니다.

그래서 react-query는 ajax 관련 기능개발 편하게 할 수 있는데에 의의가 더 있습니다.

## RTK Query 라이브러리도 있음

Redux Toolkit 설치한 경우 RTK Query 라는것도 기본적으로 사용가능한데

비슷한 기능들을 제공합니다.

다만 셋팅하는 코드가 좀 더럽습니다.

RTK Query는 실은 다른 용도로도 많이 쓰는데

ajax 요청후 Redux state 변경을 하고 싶다면...

원래 Redux state변경함수 안에선 ajax요청하면 안되어서 컴포넌트 안에서 해야합니다.

근데 ajax 요청하는 코드가 다양하고 많으면 컴포넌트 안의 코드가 길어지고 관리도 귀찮은데

그런걸 Slice 안에서 관리가능하게 도와줍니다.

그리고 ajax 요청하는 코드가 100만개 있으면 그걸 편리하게 관리할 수 있게 도와줍니다.

근데 코드가 약간 더러울 뿐

# 성능개선 1: 개발자 도구 & lazy import

props를 보냈는데 출력이 안된다거나

이미지를 넣었는데 안보이는 버그같은게 생기면

개발자도구를 켜서 Elements 탭 살펴보면 되는데

여기선 여러분이 짠 코드가 실제 html css로 변환되어서 보여집니다.

그게 싫고 컴포넌트로 미리보고 싶으면 리액트 개발자도구를 설치해서 켜보면 됩니다.

## 크롬 확장프로그램: React Developer Tools

https://chrome.google.com/webstore/

크롬 웹스토어 들어가면 확장프로그램 설치가 가능합니다.

여기서 React Developer Tools 설치하면 Components 탭이 생기는데

여러분들이 개발중인 리액트사이트를 컴포넌트로 미리볼 수 있습니다.

왼쪽에서 컴포넌트구조 파악이 가능하고

왼쪽상단 아이콘눌러서 컴포넌트 찍어보면

거기 있는 state, props 이런거 조회가능합니다. 수정해볼 수도 있음

그리고 우측 상단 여러가지 버튼도 있는데 함 눌러보시면 됩니다. 크게 쓸모는 없습니다.

## Profiler 탭에서 성능평가 가능

Profiler 탭 들어가서

- 녹화버튼 누르고

- 페이지 이동이나 버튼조작을 해보고

- 녹화를 끝내면

방금 렌더링된 모든 컴포넌트의 렌더링시간을 측정해줍니다.

이상하게 느린 컴포넌트가 있다면 여기서 범인을 찾을 수 있습니다.

<div>를 1만개 만들거나 그러지 않는 이상 보통은 걱정할 필요는 없습니다.

지연 원인 대부분은 서버에서 ajax 요청결과가 늦게 도착해서 그런 경우가 많습니다.

서버가 느린 건 어쩔 수 없음

## Redux Developer Tools

이것도 크롬 웹스토어에서 설치가능합니다.

Redux store에 있던 state를 전부 확인가능합니다.

그리고 dispatch 날릴 때 마다 뭐가 어떻게 바뀌었는지 로그를 작성해줍니다.

store 복잡해지면 유용함

## lazy import

리액트 코드 다 짰으면 npm run build 입력해서

여러분이 짰던 이상한 코드들을 역사와 전통의 html css js 파일로 변환해야합니다.

근데 리액트로 만드는 Single Page Application의 특징은 html, js 파일이 하나만 생성됩니다.

그 안에 지금까지 만든 App / Detail / Cart 모든 내용이 들어있어서 파일사이즈가 좀 큽니다.

원래 그래서 리액트 사이트들은 첫 페이지 로딩속도가 매우 느릴 수 있습니다.

그게 싫다면 js 파일을 잘게 쪼개면 됩니다.

쪼개는 방법은 import 문법을 약간 고치면 되는데

지금 메인페이지 보면 Detail, Cart를 import 해서 쓰고있습니다.

근데 잘 생각해보면 Detail, Cart 컴포넌트는 메인페이지에서 전혀 보이지 않고 있기 때문에

이런 컴포넌트들은 이런 문법으로 import 해놓으면 좋습니다.

```js
App.js;
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart.js";
```

이거를

```js
App.js;
import { lazy, Suspense, useEffect, useState } from "react";

const Detail = lazy(() => import("./routes/Detail.js"));
const Cart = lazy(() => import("./routes/Cart.js"));
```

이렇게 바꾸라는 소리입니다.

lazy 문법으로도 똑같이 import가 가능한데 이 경우엔

"Detail 컴포넌트가 필요해지면 import 해주세요" 라는 뜻이 됩니다.

그리고 이렇게 해놓으면 Detail 컴포넌트 내용을 다른 js 파일로 쪼개줍니다.

그래서 첫 페이지 로딩속도를 향상시킬 수 있습니다.

필요할 것 같으면 씁시다.

```js
<Suspense fallback={<div>로딩중임</div>}>
  <Detail shoes={shoes} />
</Suspense>
```

lazy 사용하면 당연히 Detail 컴포넌트 로드까지 지연시간이 발생할 수 있습니다. 그럴 땐

1. Suspense 라는거 import 해오고

2. Detail 컴포넌트를 감싸면

Detail 컴포넌트가 로딩중일 때 대신 보여줄 html 작성도 가능합니다.

귀찮으면 <Suspense> 이걸로 <Routes> 전부 감싸도 됩니다.
넴 그렇게 하겠씁니다.

# 성능개선 2: 재렌더링 막는 memo, useMemo

컴포넌트가 재렌더링되면 거기 안에 있는 자식컴포넌트는 항상 함께 재렌더링됩니다.

리액트는 그렇게 대충 무식하게 동작하는데

평소엔 별 문제가 없겠지만 자식컴포넌트가 렌더링시간이 1초나 걸리는 무거운 컴포넌트면 어쩔 것입니까.

부모컴포넌트에 있는 버튼 누를 때 마다 1초 버벅이는 불상사가 발생합니다.

그럴 땐 자식을 memo로 감싸놓으면 됩니다.

## 테스트용 자식 컴포넌트 하나 만들어보기

```js
function Child(){
  console.log('재렌더링됨')
  return <div>자식임</div>
}

function Cart(){

  let [count, setCount] = useState(0)

  return (
    <Child />
    <button onClick={()=>{ setCount(count+1) }}> + </button>
  )
}
```

Cart 컴포넌트 안에 Child 컴포넌트를 만들었습니다.

그리고 버튼누를 때 Cart 컴포넌트가 재렌더링되게 만들어놨는데

이 경우 <Child> 이것도 재렌더링됩니다.

평소엔 별 문제가 없겠지만 <Child> 얘가 렌더링이 2초정도 걸리는 느린 컴포넌트면 어쩌죠?

그럼 버튼 누를 때 마다 버벅일듯요.

그럴 땐 memo라는 함수를 쓰면

"꼭 필요할 때만 <Child> 컴포넌트 재렌더링해주세요" 라고 코드를 짤 수도 있습니다.

## memo()로 컴포넌트 불필요한 재렌더링 막기

memo() 써보려면 'react' 라이브러리로부터 import 해오시면 됩니다.

```js
import {memo, useState} from "react"

const child = memo( function(){
  console.log("재렌더링됨")
  return <div>자식임</div>
})

function Cart() {
  const [count, setCount] = useState(0)

  return (
    <Child />
    <button onClick={()=>{setCount(count+1)}}>+</button>
  )
}
```

1. memo를 import 해와서

2. 원하는 컴포넌트 정의부분을 감싸면 됩니다.

근데 컴포넌트를 let 컴포넌트명 = function( ){ } 이런 식으로 만들어야 감쌀 수 있습니다.

그럼 이제 Child로 전송되는 props가 변하거나 그런 경우에만 재렌더링됩니다.

진짜 그러나 버튼눌러서 테스트해봅시다.

**Q. 어 그럼 memo는 좋은거니까 막써도 되겠네요?**
memo로 감싼 컴포넌트는 헛된 재렌더링을 안시키려고

기존 props와 바뀐 props를 비교하는 연산이 추가로 진행됩니다.

`props가 크고 복잡하면 이거 자체로도 부담`이 될 수도 있습니다.

그래서 꼭 필요한 곳에만 사용합시다.

## 비슷하게 생긴 useMemo

비슷한 useMemo라는 문법도 있는데 이건 그냥 useEffect와 비슷한 용도입니다.

컴포넌트 로드시 1회만 실행하고 싶은 코드가 있으면 거기 담으면 됩니다.

```js
import {useMemo, useState} from "react"

function 함수() {
  return 반복문10억번돌린결과
}

function Cart() {
  const result = useMemo(()=>{return 함수()},[])
  return (
  <Child />
  <button onClick={()=>{setCount(count+1)}}>+</button>
)
}

```

1. 예를 들어서 반복문을 10억번 돌려야하는 경우

2. 그 함수를 useMemo 안에 넣어두면 컴포넌트 로드시 1회만 실행됩니다.

그럼 재렌더링마다 동작안하니까 좀 효율적으로 동작하겠죠?

useEffect 처럼 dependency도 넣을 수 있어서

특정 state, props가 변할 때만 실행할 수도 있습니다.

# 성능개선3: useTransition, useDeferredValue

리액트 18버전 이후부터 렌더링 성능이 저하되는 컴포넌트에서 쓸 수 있는 혁신적인 기능이 하나 추가되었습니다. useTransition 이건데 이걸로 오래 걸리는 부분을 감싸면 렌더링시 버벅이지 않게 해줍니다.
**실은 코드 실행시점만 조절해주는 식임**

## 리액트 18버전부터 추가된 기능 1: 일관된 batching

automatic batching 이라는 기능이 있는데

```js
setCount(1);
setName(2);
setValue(3); //여기서 1번만 재렌더링됨
```

state변경함수를 연달아서 3개 사용하면 재렌더링도 원래 3번 되어야하지만

리액트는 똑똑하게도 재렌더링을 마지막에 1회만 처리해줍니다.

일종의 쓸데없는 재렌더링 방지기능이고 batching이라고 합니다.

```js
fetch().then(() => {
  setCount(1); //재렌더링됨
  setName(2); //재렌더링됨
});
```

근데 문제는 ajax요청, setTimeout안에 state변경함수가 있는 경우 batching이 일어나지 않습니다.

리액트 17버전까진 그런 식으로 일관적이지 않게 동작했는데

18버전 이후 부터는 어디 있든 간에 재렌더링은 마지막에 1번만 됩니다.

batching 되는게 싫고 state변경함수 실행마다 재렌더링시키고 싶으면

flushSync라는 함수를 쓰면 됩니다. 필요하면 찾아봅시다.

## 리액트 18버전부터 추가된 기능 2: useTransition 추가됨

렌더링시간이 매우 오래걸리는 컴포넌트가 있다고 칩시다.

버튼클릭, 타이핑할 때 마다 그 컴포넌트를 렌더링해야한다면

이상하게 버튼클릭, 타이핑 반응속도도 느려집니다.

사람들은 원래 클릭, 타이핑을 했을 때 0.3초 이상 반응이 없으면 불편함을 느끼기 때문에 (한국인은 0.2초)

개선방법을 알아봅시다.

당연히 그 컴포넌트 안의 html 갯수를 줄이면 대부분 해결됩니다.

근데 그런게 안되면 useTransition 기능을 쓰면 됩니다.

## 우선 재렌더링이 느린 컴포넌트 만들어보기

```js
import {useState} from 'react'

let a = new Array(10000).fill(0)

function App(){
  let [name, setName] = useState('')

  return (
    <div>
      <input onChange={ (e)=>{ setName(e.target.value) }}/>
      {
        a.map(()=>{
          return <div>{name}</div>
        })
      }
    </div>
  )
```

- 데이터가 10000개 들어있는 array자료를 하나 만들고

- 그 갯수만큼 <div>를 생성하라고 했습니다.

- 그리고 유저가 타이핑할 수 있는 <input>도 만들어봤습니다.

유저가 <input>에 타이핑하면 그 글자를 <div> 1만개안에 집어넣어줘야하는데

<div> 1만개 렌더링해주느라 <input>도 많은 지연시간이 발생합니다.

타이핑한 결과가 바로바로 반응이 안옵니다. 답답해죽음

## useTransition 쓰면

```js
import { useState, useTransition } from "react";

let a = new Array(10000).fill(0);

function App() {
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();

  return (
    <div>
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      />

      {a.map(() => {
        return <div>{name}</div>;
      })}
    </div>
  );
}
```

- useTransition() 쓰면 그 자리에 [변수, 함수]가 남습니다.

- 그 중 우측에 있는 startTransition() 함수로 state변경함수 같은걸 묶으면

그걸 다른 코드들보다 나중에 처리해줍니다.

그래서 <input> 타이핑같이 즉각 반응해야하는걸 우선적으로 처리해줄 수 있습니다.

타이핑해보면 아까보다 반응속도가 훨씬 낫습니다.

물론 근본적인 성능개선이라기보단 특정코드의 실행시점을 뒤로 옮겨주는 것일 뿐입니다.

html이 많으면 여러페이지로 쪼개십시오.

## isPending은 어디다 쓰냐면

startTransition() 으로 감싼 코드가 처리중일 때 true로 변하는 변수입니다.

```js
{
  isPending
    ? "로딩중기다리셈"
    : a.map(() => {
        return <div>{name}</div>;
      });
}
```

그래서 이런 식으로 코드짜는 것도 가능합니다.

위의 코드는 useTransition으로 감싼게 처리완료되면 <div>{name}</div> 이게 보이겠군요.

## useDeferredValue 이것도 비슷함

startTransition() 이거랑 용도가 똑같습니다.
근데 얘는 state 아니면 변수 하나를 집어넣을 수 있게 되어있습니다.
그래서 그 변수에 변동사항이 생기면 그걸 늦게 처리해줍니다.

```js
import { useState, useTransition, useDeferredValue } from "react";

let a = new Array(10000).fill(0);

function App() {
  let [name, setName] = useState("");
  let state1 = useDefferedValue(name);

  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      {a.map(() => {
        return <div>{state1}</div>;
      })}
    </div>
  );
}
```

이렇게 쓰면 아까랑 똑같은 기능을 개발가능합니다.

- useDeferredValue 안에 state를 집어넣으면 그 state가 변동사항이 생겼을 때 나중에 처리해줍니다.

그리고 처리결과는 let state에 저장해줍니다.

# PWA 셋팅해서 앰으로 발행하기 (모바일앱인척하기)

구글이 밀고있는 PWA라는게 있습니다.

Progressive Web App이라는건데 이건 웹사이트를 안드로이드/iOS 모바일 앱처럼 사용할 수 있게 만드는 일종의 웹개발 기술입니다.

여러분 지금까지 강의 따라오면서 리액트로 모바일 App 처럼 동작하는 사이트 만들어놨죠?

모바일 앱처럼 스무스하잖아요.

그래서 이 웹사이트를 모바일 앱으로 발행해서 그냥 쓰자는겁니다.

근데 iOS, Android 앱으로 발행하는게 아니라 웹사이트 자체를 스마트폰 홈화면에 설치합니다. 그게 바로 PWA 입니다.

## 웹 사이트를 PWA화 시키는게 뭐가 좋냐면

1. 스마트폰, 태블릿 바탕화면에 여러분 웹사이트를 설치 가능합니다.

(저거 설치된 앱 누르면 상단 URL바가 제거된 크롬 브라우저가 뜹니다. 일반 사용자는 앱이랑 구분을 못함)

2. 오프라인에서도 동작할 수 있습니다.

service-worker.js 라는 파일과 브라우저의 Cache storage 덕분에 그렇습니다.

자바스크립트로 게임만들 때 유용하겠네요.

3. 설치 유도 비용이 매우 적습니다.

앱설치를 유도하는 마케팅 비용이 적게들어 좋다는 겁니다.

구글플레이 스토어 방문해서 앱 설치하고 다운받게 하는건 항상 매우 높은 마케팅비용이 듭니다.

근데 PWA라면 웹사이트 방문자들에게 간단한 팝업을 띄워서 설치유도할 수 있으니 훨씬 적은 마케팅 비용이 들고요.

그래서 미국에선 PWA를 적극 이용하고 있는 쇼핑몰들이 많습니다.

---

PWA 만드는건 별거 없고 그냥 아무사이트나 파일 2개만 사이트 로컬경로에 있으면 브라우저가 PWA로 인식합니다. (그리고 HTTPS 사이트여야합니다)

manifest.json과 service-worker.js 라는 이름의 파일 두개를 만드시면 됩니다.

하지만 기본 프로젝트를 npm build / yarn build 했을 경우 manifest.json 파일만 생성해줍니다.

service-worker.js 까지 자동으로 생성을 원한다면 프로젝트를 처음 만들 때 애초에
