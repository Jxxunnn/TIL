function solution(emergency) {
  const obj = {};
  const arr = [...emergency].sort((a, b) => b - a);
  arr.forEach((v, i) => (obj[v] = i + 1));
  return emergency.map((v) => obj[v]);
}
