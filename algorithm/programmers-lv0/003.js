function solution(A, B) {
  if (A === B) return 0;
  const arr = A.split("");
  for (let i = 1; i < arr.length; i++) {
    arr.splice(0, 0, arr[arr.length - 1]);
    arr.splice(-1, 1);
    if (arr.join("") === B) return i;
  }
  return -1;
}
