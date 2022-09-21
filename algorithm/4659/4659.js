/* 비밀번호 발음하기 4659 */
//모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
//[aeiou]
//모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
//같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
for (const str of input) {
  let password = str;
  if (password === "end") break;
  const vowelRegex = /[aeiou]/g;
  const charRepeatedRegex = /(.)\1{1}/g;
  const typeRepeatedRegex = /[aeiou]{3,}|[bcdfghjklmnpqrstvwxyz]{3,}/g;
  const exceptionRegex = /ee|oo/g;
  let isStrRemoved = false;
  let password2 = "";
  if (!vowelRegex.test(password)) {
    console.log(`<${password}> is not acceptable.`);
    continue;
  }
  while (exceptionRegex.test(password)) {
    if (!isStrRemoved) password2 = password;
    isStrRemoved = true;
    password = password.replace(exceptionRegex, "");
  }
  if (charRepeatedRegex.test(password)) {
    console.log(`<${password}> is not acceptable.`);
    continue;
  }
  if (typeRepeatedRegex.test(password)) {
    console.log(`<${password}> is not acceptable.`);
    continue;
  }
  if (isStrRemoved) {
    console.log(`<${password2}> is acceptable.`);
  } else {
    console.log(`<${password}> is acceptable.`);
  }
}
