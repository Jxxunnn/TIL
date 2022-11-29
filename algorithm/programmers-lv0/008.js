function solution(quiz) {
  return quiz.map((val) => {
    const v = val.split(" ");
    const num1 = +v[0];
    const num2 = +v[2];
    const num3 = +v[4];
    let result = 0;
    if (v[1] === "+") {
      result = num1 + num2;
    }
    if (v[1] === "-") {
      result = num1 - num2;
    }
    return result === num3 ? "O" : "X";
  });
}
