console.log(obj1.hasOwnProperty("name"));

const arr = [1, 2, 3];

console.log(arr.hasOwnProperty("name"));

function Test() {}

const obj1 = new Test();

console.log(obj1.prototype);

function NewFactory2(name) {
  this.name = name;
}

NewFactory2.prototype.sayYourName = function () {
  console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
};
