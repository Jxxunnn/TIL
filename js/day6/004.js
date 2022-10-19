/*
new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)
*/

// - pending(대기상태) - resolve(해결) - fulfilled(성공)
// - pending(대기상태) - reject(거부) - rejected(실패)

// resolve
/*
let p = new Promise(function (resolve, reject) {
  // 비동기적으로 실행될 code 작성
  resolve("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지;
  });

console.log(p);
console.log(p);

// reject
let p = new Promise(function (resolve, reject) {
  // 비동기적으로 실행될 code 작성
  reject("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지;
  })
  .catch((메시지) => {
    alert("catch 실행!!");
  });

console.log(p);
console.log(p);

// resolve인데 중간에 error가 던져졌을 때
let p = new Promise(function (resolve, reject) {
  // 비동기적으로 실행될 code 작성
  resolve("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    throw Error("Error 발생! 경고경고!");
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지;
  })
  .catch((메시지) => {
    console.log(메시지);
    alert("catch 실행!!");
  });

console.log(p);

// 예제를 위한 예제, 이런식으로 처리하지 않습니다.
let p = new Promise(function (resolve, reject) {
  // 비동기적으로 실행될 code 작성
  resolve("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    throw Error("Error 발생! 경고경고!");
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지;
  })
  .catch((메시지) => {
    console.log(메시지);
    alert("catch 실행!!");
  })
  .then((메시지) => {
    alert("catch 이후에 then");
    throw Error("Error 발생! 경고경고!");
  })
  .catch((메시지) => {
    console.log(메시지);
    alert("catch 이후에 then 이후에 catch 실행!!");
  });

console.log(p);
*/
