const me = {
  name: "웨이드",
  address: "제주도 제주시 인다 1길",
  phoneNum: "010-8001-6536",
  canWalk: function () {
    console.log("웨이드가 걷는다.");
  },
  teaching: function (student) {
    student.levelUp();
  },
};
const student = {
  level: 1,
  levelUp: function () {
    this.level++;
  },
};
me.teaching("asd");
