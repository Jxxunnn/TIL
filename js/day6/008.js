// 모던 자바스크립트 예제
async function f() {
  return 100;
}

f().then(alert); // 100

////////////////////

async function f() {
  return "hello world";
}

f()
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  });

///////////////////

// 모던 자바스크립트 예제
async function f() {
  return 100;
}

f().then(alert); // 100

////////////////////

async function f() {
  return "hello world";
}
console.log("!");
f()
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  });
console.log("!!");
