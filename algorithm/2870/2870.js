/* 수학숙제 2870 */
const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);
const numbers = [];
const findNumRegex = /\d+/g;
for (i = 0; i < input.length; i++) {
  if (input[i].match(regExp)) {
    numbers.push(...input[i].match(findNumRegex));
  }
}
numbers.sort((a, b) => a - b);
console.log(numbers.map(BigInt).join("\n"));
/*numbers.forEach((num) => {
  if (parseFloat(num) == 0) console.log("0");
  else if (findZeroRegex.test(num)) {
    console.log(num.replace(findZeroRegex, ""));
  } else console.log(num);
});
*/
//const answer = numbers.map((v) => +v).sort((a, b) => a - b);
//console.log(answer);
//console.log(Number(answer[8]));
/*
numbers
  .sort((a, b) => a - b)
  .forEach((num) => {
    console.log(num);
  });
*/

//console.log(answer);
//숫자 앞에 0이 있는 경우에는 정리하면서 생략할 수있다.
//숫자와 알파벳 소문자로 되어있는 글자에서 숬자를 모두 찾은 뒤 비내림차순으로 정리.
//가장 큰 숫자를 찾아야 한다.

/*logic
0만 있으면 0을 집어넣는다.
숫자의 맨 앞에 0이 있으면 제거하고 numbers에 넣는다.
*/
