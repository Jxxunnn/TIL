function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = "hello hello";
    reject(new Error());
  });
}
sayHello()
  .then((resolvedData) => {
    console.log(resolvedData);
  })
  .catch((error) => {
    console.log(error);
  });
