function solution(quiz) {
  var answer = [];
  quiz = quiz.map((v) => v.split(" = "));
  for (i in quiz) {
    eval(quiz[i][0]) === Number(quiz[i][1])
      ? answer.push("O")
      : answer.push("X");
  }
  return answer;
}
