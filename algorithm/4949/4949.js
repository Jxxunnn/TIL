/*  4949번 균형잡힌 세상 */
//모든 오른쪽 괄호는 자신과 짝지을 수 있는 왼쪽 괄호 존재.
/*  괄호 - 9012번 */
const fs = require("fs");
const input = fs
  .readFileSync("./algorithm/input.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input;
for (word of arr) {
  if (word.length === 1 && word === ".") break;
  //const word = input[2];
  const stack = [];
  for (letter of word) {
    if (
      (stack.length && stack[stack.length - 1] === "(" && letter === ")") ||
      (stack[stack.length - 1] === "[" && letter === "]")
    ) {
      stack.pop();
    } else if (
      letter === ")" ||
      letter === "(" ||
      letter === "[" ||
      letter === "]"
    ) {
      stack.push(letter);
    }
    // if (stack.length && stack[stack.length - 1] === "(" && letter === ")") {
    //   stack.pop();
    // } else if (
    //   stack.length &&
    //   stack[stack.length - 1] === "[" &&
    //   letter === "]"
    // ) {
    //   stack.pop();
    // } else {
    //   if (letter === "(" || letter === ")" || letter === "[" || letter === "]")
    //     stack.push(letter);
    // }
  }
  if (!stack.length) console.log("yes");
  else console.log("no");
}
