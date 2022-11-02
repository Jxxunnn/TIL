//ID는 변하지 않는 값
//닉네임은 변하는 값.
function solution(record) {
  var answer = [];
  const obj = {};
  for (const log of record) {
    const [state, userId, nickName] = log.split(" ");
    if (state === "Enter") {
      obj[userId] = nickName;
    }
    if (state === "Change") {
      obj[userId] = nickName;
    }
  }
  for (const log of record) {
    const [state, userId, nickName] = log.split(" ");
    if (state === "Change") continue;
    state === "Enter"
      ? answer.push(`${obj[userId]}님이 들어왔습니다.`)
      : answer.push(`${obj[userId]}님이 나갔습니다.`);
  }
  return answer;
}
