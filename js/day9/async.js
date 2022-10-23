function sayHello() {
  return new Promise((성공, 실패) => {
    성공("hi");
  });
}
function test() {
  const hello1 = sayHello();
  console.log(hello1);
}
test();
