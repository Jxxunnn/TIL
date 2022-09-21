/* 빈도정렬 2910 */
/*﻿문제 정의.
1.각 숫자의 빈도 수 체크후 내림차순 정렬
2.빈도 수가 같으면 삽입 순서 체크 후 정렬
해결 방법.
1.순서와 빈도를 오브젝트에 저장한 후 객체의 속성에 접근하여 비교 정렬,
*/
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [len, max] = input[0].split(" ").map((v) => +v);
const sequence = input[1].split(" ").map((v) => +v);
const answer = [];
const numList = [];
const countList = {};
const orderList = {};
let order = 0;
for (let i = 0; i < len; i++) {
  const num = sequence[i];
  countList[num] = countList[num] + 1 || 1;
  if (orderList.hasOwnProperty(num)) continue;
  orderList[num] = order;
  order++;
}
for (let num in countList) {
  numList.push([num, countList[num]]);
}
numList
  .sort(function (a, b) {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] === b[1]) {
      return orderList[a[0]] - orderList[b[0]];
    }
  })
  .forEach((list) => {
    for (let i = 0; i < list[1]; i++) {
      answer.push(list[0]);
    }
  });
console.log(answer.join(" "));

//숫자 N개로 이루어진 수열
//숫자는 모두 C보다 작거나 같다.
//자주 등장하는 빈도순대로 정렬.
//등장하는 횟수가 같다면 먼저 나온 것이 앞에
//빈도 정렬
