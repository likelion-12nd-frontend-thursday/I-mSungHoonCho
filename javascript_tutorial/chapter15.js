let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴

let me = {
  //객체 프로퍼티와 함께 리터럴 선언
  name: "성훈", //프로퍼티의 key는 ""로 감싸지 않아도 됨
  age: 25,
  track: "front-end",
  sayHi: () => {
    //객체 프로퍼티로 함수나 다른 객체도 가능함
    console.log("hello");
  },
  "like lion": true, //근데 key에 공백넣거나 하고싶으면 ""로 감싸야
};

console.info(me);
me.sayHi();
console.log(me["name"]); //me[name] 이라고 쓰면 변수로 인식해버리니까 ""로 감싸야 key인줄 안다.

//새로운 프로퍼티 추가하기. 이미 있으면 수정
me.favoriteFood = "burger";
me["job"] = "백수";

delete me.job; //프로퍼티 삭제

let hasName = "name" in me;
console.log(hasName);

let hasCat = "cat" in me;
console.log(hasCat);

const animal = {
  type: "고냥이",
  name: "나비",
  color: "black",
};
animal.age = 23;
animal.name = "치즈";
delete animal.color; //추가, 수정과 삭제는 됨

console.log(animal);
