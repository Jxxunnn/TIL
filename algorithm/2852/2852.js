/* NBA 농구 */
//골이 들어간 시간과 팀을 적는 취미.
//경기는 정화깋 48분 진행.
const { Console } = require("console");
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
  log[i][0] === "1" ? scoreBoard[0]++ : scoreBoard[1]++;
  /* */
  /*동점이 될 때도 싸악 먹어줘야 하는데말이야. */

  if (scoreBoard[0] > scoreBoard[1]) {
    if (totalWinTime[0] === 0) {
      totalWinTime[0] = setTime(log[i][1]);
    } else {
      totalWinTime[0] += setTime(log[i][1]) - totalWinTime[0];
    }
  } else if (scoreBoard[0] < scoreBoard[1]) {
    if (totalWinTime[1] === 0) {
      totalWinTime[1] = setTime(log[i][1]);
    } else {
      totalWinTime[1] += setTime(log[i][1]) - totalWinTime[0];
    }
  } else {
    if (log[i - 1][0] == 1) {
      totalWinTime[0] += setTime(log[i][1]) - totalWinTime[0];
    }
    if (log[i - 1][0] == 2) {
      totalWinTime[1] += setTime(log[i][1]) - totalWinTime[0];
    }
  }
  //   if(i === log.length) {
  //     scoreBoard[0] > scoreBoard[1]
  //   ? (totalWinTime[0] += setTime("48:00") - totalWinTime[0])
  //   : (totalWinTime[1] += setTime("48:00") - totalWinTime[1]);
  //  }
  /**/
}

console.log(totalWinTime);
function setTime(timeLog) {
  const time = timeLog.split(":");
  return parseInt(time[0]) * 60 + parseInt(time[1]);
}
function reTime(timeLog) {
  let [min, sec] = [Math.floor(timeLog / 60), timeLog % 60];
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  return `${min}:${sec}`;
}
