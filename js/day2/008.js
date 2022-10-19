////// 재귀 함수 //////

// 재귀함수 <-> 반복문
function factorial(n) {
  if (n <= 1) {
    // 종료조건이 없으면 무한반복이 됩니다.
    return 1;
  }
  return n * factorial(n - 1);
}

factorial(5);

let result = 1;
for (let i = 2; i < 6; i++) {
  result *= i;
}
console.log(result);

/*
5! = 5 * 4 * 3 * 2 * 1

                n       n <= 1      return
factorial(5)    5       false       5 * factorial(4) = 120
factorial(4)    4       false       4 * factorial(3) = 24
factorial(3)    3       false       3 * factorial(2) = 6
factorial(2)    2       false       2 * factorial(1) = 2
factorial(1)    1       true        1
*/

// hint
function reverse(txt) {
  if (txt.length === 1) {
    return txt;
  }
  return reverse(txt.slice(1)) + txt[0];
}

txt = "hello world";
result = "";
for (const i of txt) {
  result = i + result;
}

console.log(result);

// 깔끔함, 사이트에 나와 있음
function func2({ a = 2, b = 1, c = 3 } = {}) {
  console.log(a, b, c);
  return a + b + c;
}
console.log(func2({ a: 20, b: 30, c: 10 }));

// 이렇게 해도 됨
function func3({ a, b, c } = { a: 2, b: 1, c: 3 }) {
  console.log(a, b, c);
  return a + b + c;
}
console.log(func3({ a: 20, b: 30, c: 10 }));
