/* 10709번 : 기상캐스터 */

//모든 구름은 1분이 지날 때마다 1킬로미터씩 동쪽으로.
//각 구역에 대해서 지금부터 몇 분뒤 처음으로 하늘에 구름이 오는지를 예측.
//구름은 c 구름이 없으면 .

//지금으로부터 몇 분 후에 처음으로 구역에 구름이 뜬느 지를 표시.
//원래 있었다면 0을. 몇 분이 지나도 뜨지 않는다면 -1을 표시.

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [H, W] = input[0].split(" ");
const area = input.slice(1).map((v) => v.trim().split(""));

for (let i = 0; i < H; i++) {
  let isCloudCome = false;
  let dist = 0;
  for (let j = 0; j < W; j++) {
    const weather = area[i][j];
    const answer = [];
    if (weather === "c") {
      area[i][j] = 0;
      answer.push(0);
      dist = 0;
      isCloudCome = true;
    }
    if (weather === ".") {
      if (!isCloudCome) {
        area[i][j] = -1;
        answer.push(-1);
      }
      if (isCloudCome) {
        dist++;
        area[i][j] = dist;
        answer.push(dist);
      }
    }
    console.log(...answer);
  }
}
