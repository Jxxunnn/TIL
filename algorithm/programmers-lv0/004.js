function solution(my_string) {
  const nums = [];
  for (const char of my_string) {
    if (!isNaN(+char)) nums.push(+char);
  }
  return nums.reduce((total, v) => total + v);
}
