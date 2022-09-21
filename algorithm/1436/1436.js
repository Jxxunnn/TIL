// 영화감독 숌
// 어떤 수에 6이 적어도 3개이상 연속으로 들어가는 수.
// 666 -> 1666 -> 2666 -> 3666
// N번째 영화의 제목은 N번째로 작은 종말의 숫자와 같다.
// 숌이 만든 N번째 영화의 제모겡 들어간 숫자를 출력하라.
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
const target = "666";
let num = 0;
let count = 0;
let ans = 0;
while (count !== +input) {
  str = num.toString();
  //   num에 666이 들어가는지 체크
  //   true면 count 증가
  if (str.includes("666")) {
    count++;
    ans = +str;
  }
  num++;
}
console.log(ans);
