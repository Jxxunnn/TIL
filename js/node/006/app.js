const path = require("path");
// node.js에서 파일이나 디렉토리의 경로를 다룰 때 사용하는 path 모듈
const fs = require("fs");

let filename = "/Users/paullab/Desktop/FE3/GitHub/test.txt";
console.log(`디렉토리 : ${path.dirname(filename)}`);
console.log(`파일이름 : ${path.basename(filename)}`);
console.log(`확장자 : ${path.extname(filename)}`);

let 변수 = "이준근"; // 사용자 이름
let 날짜 = new Date();
// fs.rename(
//   "./이호준575.txt",
//   `./${변수}${날짜.getMilliseconds()}.txt`,
//   (err) => {
//     console.log(err);
//   }
// );
fs.readFile("./이준근459.txt", "utf8", (err, data) => {
  console.log(err);
  console.log(data);
});
