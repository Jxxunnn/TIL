// 프로미스 체이닝의 다른 형태
// 모던 자바스크립트 예제
let p = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 10000); // (*)
});

console.log("hello world");
// code 1000줄

let p2 = p.then(function (result) {
  // (**)
  console.log(result); // 1
  return result * 2;
});

console.log("hello world2");
// code 1000줄

let p3 = p2.then(function (result) {
  // (***)
  console.log(result); // 2
  return result * 2;
});

console.log("hello world3");
// code 1000줄

let p4 = p3.then(function (result) {
  console.log(result); // 4
  return result * 2;
});
