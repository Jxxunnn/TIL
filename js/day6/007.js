let p = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 10000); // (*)
});
console.log("hello world");
let p2 = p.then(function (result) {
  // (**)

  console.log(result); // 1
  return result * 2;
});
console.log("hello world2");
let p3 = p2.then(function (result) {
  // (***)

  console.log(result); // 2
  return result * 2;
});
console.log("hello world3");
let p4 = p3.then(function (result) {
  console.log(result); // 4
  return result * 2;
});
