const fs = require("fs");
const input = fs
  .readFileSync("./algorithm/input.txt")
  .toString()
  .trim()
  .split("\n");
const log = input.slice(1).map((v) => v.trim().split(" "));
const scoreBoard = [0, 0];
const totalWinTime = [0, 0];
for (let i = 0; i < log.length; i++) {
  log[i][0] === 1 ? scoreBoard[0]++ : scoreBoard[1]++;
  console.log(log[i][1].split(":"));
  //   if (scoreBoard[0] > scoreBoard[1]) {
  //     if (totalWinTime[0] === 0) totalWinTime[0] = setTime(log[1]);
  //     else totalWinTime[0] += setTime(log[1]) - totalWinTime[0];
  //   } else if (scoreBoard[0] < scoreBoard[1]) {
  //     if (totalWinTime[1] === 0) totalWinTime[1] = setTime(log[1]);
  //     else totalWinTime[1] += setTime(log[1]) - totalWinTime[0];
  //   } else continue;
}
