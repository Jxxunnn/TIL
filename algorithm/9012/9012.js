/*  괄호 - 9012번 */
const fs = require("fs");
const input = fs
  .readFileSync("./algorithm/input.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input.slice(1);

//( 와 )
//()로 되어있으면 굿
//(x)도 굿.

for (let word of arr) {
  const stack = [];
  for (let letter of word) {
    if (stack.length && stack[stack.length - 1] === "(" && letter === ")") {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }
  if (stack.length === 0) console.log("YES");
  else console.log("NO");
}
