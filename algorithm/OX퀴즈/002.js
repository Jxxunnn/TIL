function solution(quiz) {
  let result = [];
  quiz.forEach((e) => {
    let arr = e.split(" = ");
    let left = arr[0].split(" ");
    if (left[1] === "+") {
      if (+left[0] + +left[2] === +arr[1]) {
        return result.push("O");
      } else {
        return result.push("X");
      }
    }
    if (left[1] === "-") {
      if (+left[0] - +left[2] === +arr[1]) {
        return result.push("O");
      } else {
        return result.push("X");
      }
    }
  });
  return result;
}
