// 파라미터 선언, 아규먼트 실행
/*
파선아실 : 파라미터 - 선언, 아규먼트 - 실행
// return 반환값 */
// 파선아실
function 안녕(파라미터) {
  console.log(파라미터);
  console.log("hello world");
  return 100;
}

let 아규먼트 = 1000;
안녕(아규먼트);
console.log(안녕(아규먼트) + 안녕(아규먼트));

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
  // 아래 코드는 실행하지 않습니다.
}

console.log(안녕());

console.log(String(console.log("hello")) + String(console.log("hello"))); // undefinedundefined

// 이렇게 작성하시면 안됩니다.
function sum(a, b) {
  return a * b;
}

console.log(sum(10, 20));

///////////////////////////////
