// 사과 담기 게임
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((v) => +v);
const apples = input.slice(2).map((v) => +v);
let [start, end] = [0, m - 1];
let dist = 0;
for (let i = 0; i < +input[1]; i++) {
  apple = apples[i] - 1;
  console.log(apple);
  while (!(start <= apple && apple <= end)) {
    console.log(start, end);
    if (start > apple) {
      start--;
      end--;
      console.log(`왼쪽으로 이동 ${start},${end}`);
    }
    if (end < apple) {
      start++;
      end++;
      console.log(`오른쪽으로 이동 ${start},${end}`);
    }
    dist++;
  }
  console.log(`현재 위치는 ${start},${end}`);
}
console.log(dist);

//바구니의 이동 거리의 최솟값을 구하는 프로그램.
//바구니는 왼쪽 오른쪽으로 이동 가능하지만 스크린의 경계를 벗어날 수 없음.
// 사과 3개.
