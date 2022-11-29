function solution(polynomial) {
  // +로 나누고 x와 상수항 따로 계산
  const polys = [0, 0];
  const arr = polynomial.replaceAll(/\s/g, "").split("+");
  if (arr.length === 1) return polynomial;
  for (char of arr) {
    if (!isNaN(+char)) polys[1] += +char;
    else {
      if (parseFloat(char.replace("x", "")) == 0) continue;
      polys[0] += parseFloat(char.replace("x", "")) || 1;
    }
  }
  let [str1, operator, str2] = [`${polys[0]}x`, " + ", `${polys[1]}`];
  if (str1 === "1x") {
    str1 = "x";
  }

  if (polys[0] && polys[1]) return str1 + operator + str2;
  else if (polys[0] && !polys[1]) return str1;
  else if (!polys[0] && polys[1]) return str2;
}
