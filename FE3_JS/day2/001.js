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
