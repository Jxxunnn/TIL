function solution(numlist, n) {
  numlist.sort((a, b) => {
    const num1 = (n - a) ** 2;
    const num2 = (n - b) ** 2;
    if (num1 < num2) return -1;
    if (num1 > num2) return 1;
    if (num1 === num2) {
      if (a < b) return 1;
      else if (a > b) return -1;
      else return 0;
    }
  });
  return numlist;
}
