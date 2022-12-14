/*
//////////////함수의 구조/////////////////

// 파선아실
function 안녕(파라미터){
    console.log(파라미터)
    console.log('hello world')
    return 100
}

let 아규먼트 = 1000
안녕(아규먼트)
console.log(안녕(아규먼트) + 안녕(아규먼트))

/*
console.log('hello world')
hello world
undefined

console.log(console.log('hello world'))
hello world
undefined
undefined
*/

// 파선아실
function 안녕() {
  console.log("hello");
}

안녕();
console.log(String(안녕()) + String(안녕()));

// 파선아실
// return은 반환
function 안녕() {
  console.log("hello");
  return 10;
}

안녕();
console.log(String(안녕()) + String(안녕()));

// 파선아실
function 안녕() {
  console.log("hello");
  // return undefined
  return;
}

안녕();
console.log(String(안녕()) + String(안녕()));

function 안녕() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return;
  console.log("hello");
  console.log("hello");
  console.log("hello");
}

안녕();

// 질의응답
function 안녕() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  if (특정조건) {
    return 100;
  } else {
    console.log("hello");
    console.log("hello");
    console.log("hello");
    return 1000;
  }
  return;
  // 아래 코드는 실행하지 않습니다.
}

console.log(안녕());

console.log(String(console.log("hello")) + String(console.log("hello"))); // undefinedundefined

// 이렇게 작성하시면 안됩니다.
function sum(a, b) {
  return a * b;
}

console.log(sum(10, 20));

//////////////함수를 사용하는 이유/////////////////

// 1. 재사용성 -> 재사용하지 않을 코드는 함수로 정의하나요? -> 가능하면 함수로 만드는 것을 권합니다.
// 2. 유지보수 -> 3번 사항 + 변수의 스코프 제한
// 3. 구조 파악이 용이하다.

// 참고만
// 4. 추상화로 개발하는 것이 객체지향 프로그래밍(OOP, Object Oriented Programming) 언어의 언어 철학에 맞다.

/*
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄
*/

//////////////함수의 다양한 형태/////////////////
function 함수1(a, b, c) {
  return a + b + c;
}

// 콘솔창의 기능이에요. 마지막 라인에 한하여 console.log()를 찍지 않아도 return값을 console창에 출력해줍니다.
함수1(10, 20, 30);
함수1(10, 20, 50);

// 다음 실행 값은?
console.log(함수1(10, 20, 30));
console.log(함수1(10, 20, 50));

// 필요 이상의 아규먼트를 넣었을 때
함수1(10, 20, 30, 40); // Error를 뿜지 않습니다. 60
