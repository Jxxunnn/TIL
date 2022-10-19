let value = [10, 1, 100, 200, 300, 10];
let value2 = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

Object.keys(value);
Object.keys(value2);

for (i in value2) {
  // for of로 순회를 돌 수가 없음
  console.log(i);
}

for (i of value2) {
  // of로 순회를 돌아야 key와 value를 한꺼번에 출력하고 싶은 것입니다. -> error
  console.log(i);
}

Object.entries(value);
Object.entries(value2);

for (i of Object.entries(value2)) {
  console.log(i);
}

for (i of Object.entries(value2)) {
  console.log(`key는 ${i[0]}고 value는 ${i[1]}입니다.`);
}

for ([i, j] of Object.entries(value2)) {
  console.log(`key는 ${i}고 value는 ${j}입니다.`);
}

for ([i, j] of [
  [10, 20],
  [30, 40],
]) {
  console.log(i, j);
}

for ([i, j] of [
  [10, 20, 300],
  [30, 40, 500],
]) {
  console.log(i, j); // 300과 500을 받지 못했습니다.
}

for ([i, j, ...k] of [
  [10, 20, 300, 1, 2],
  [30, 40, 500, 1],
]) {
  // 몇 개 들어올지 모르는 경우
  console.log(i, j, k);
}
