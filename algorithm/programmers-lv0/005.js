function solution(my_string) {
  const re = /[0-9]+/g;
  const found = my_string.match(re);
  return found.reduce((total, v) => total + +v, 0);
}
