//for of는 IE에서 사용이 불가합니다.

for (const i in data) {
  console.log(i);
}

for (const i in data) {
  console.log(i);
  console.log(data[i]);
}

let data2 = [10, 20, 30, 40];

for (const i in data2) {
  console.log(i);
}

let data3 = {
  0: 10,
  1: 20,
  2: 30,
  3: 40,
};
for (const i in data3) {
  console.log(i);
}

for (const i in "hello world") {
  console.log(i);
}

for (const i of data2) {
  console.log(i);
}

for (const i of "hello world") {
  console.log(i);
}

let s = 0;
for (const i of "12345") {
  s += parseInt(i);
}

const seat = [
  ["피카츄", "라이츄", "파이리"],
  ["꼬부기", "버터플", "야도란"],
  ["피죤투", "또가스", "메타몽"],
];

//for 문 사용
for (let i = 0; i < seat.length; i++) {
  const row = seat[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

//for of 문 사용
for (let row of seat) {
  for (let pocketmon of row) {
    console.log(pocketmon);
  }
}

////// 질의응답

for (const i in data) {
  console.log(data[i]);
}

let data = {
  one: "하나",
  two: "둘",
  three: "셋",
  four: "넷",
};
for (const i in data) {
  console.log(i);
  console.log(data);
  console.log(data.i); // error
}

/* 양궁대회 문제 풀이 전략 */

// 1. 0점부터 10점 순으로 어피치와 라이언을 비교해 가면서, 라이언이 해당 점수를 이길지, 포기할 지를 결정하며 가능한 경우를 만들어 간다.

// 2. 이기는 경우에는 화살을 어피치 + 1개 소모하고, 포기하는 경우에는 화살을 쏘지 않는다.

// 3. 단, 0점에 도달하기 전에 화살을 모두 소진하면 더이상 쏠 화살이 없으므로 나머지 점수는 쏘지 않는 것으로 한다. 마찬가지로 0점에 도달하였는데 화살이 남아있더라면, 남은 화살을 모두 0점에 쏜다.

// 4. 따라서 [어피치의 누적 점수, 라이언의 누적 점수, 지금까지 화살을 쏜 갯수, 현재 진행중인 라운드, 라이언의 점수판]을 파라미터로 갖는 재귀함수를 구현하면 모든 경우를 검사할 수 있다.

// 5. 경우를 검사하면서 어피치와 라이언의 점수차가 가장 큰 경우만 남긴다.
// 5-1. 같은 경우가 발생하면 마지막으로 쏜 화살이 많은 경우를 남긴다.
// RETURN. 남겨진 경우를 반환하고, 경우가 없다면 [-1]을 반환한다.
