//for (let i = 0; i < 100; i++) console.log(i);
// 반복문 .

// 함수 Hoisting : 끌어 올리다
let area = getArea(10, 20);
console.log(`면적 : ${area}`);

// 함수 사용을 함수 선언보다 먼저 해도 에러 X

function getArea(width, height) {
  return width * height;
}

let getAreaFunction = getArea;
console.log(getAreaFunction);
// 함수도 함수나 문자열같은 하나의 값(객체)으로 취급받음. 일급객체!!

let varA = function funcA() {
  console.log("함수 A.");
};
varA();
//이렇게 하면, funcA는 선언식이 아니라서, funcA()를 호출할 수 없음
// funcA(); <--- Uncaught ReferenceErrors ; funcA is not defined

//varB(); //함수 선언이 아닌 함수 표현식으로 만든 함수는 호이스팅X

let varB = function () {
  //그럼 이렇게 익명함수! 로 만들 수도 있음
  console.log("함수 B.");
};

let varC = () => {
  console.log("함수 C.");
};
varC();

let arrowFunctionToReturnTen = () => 10; //그냥 10 반환
let arrowFunctionToAddTen = (value) => 10 + value; //10에 매개변수 더한 값 반환
console.log(arrowFunctionToAddTen(10));
console.log(arrowFunctionToReturnTen());
