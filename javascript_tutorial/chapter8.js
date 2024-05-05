let var1;
let var2 = 10;
let var3 = 20;
console.log(var1, var2); //undefined 10

let var4 = var1 ?? var2; //null 병합 연산자 :
// null, undefined인건 걸러내기
console.log(var4); //var1은 undefined라서, 10이 출력됨

console.log(var2 ?? var3); // 10 둘 다 null이나 undefined가 아니면, 그냥 앞의 값을 출력

//사실상, var4=var1??var2 이렇게 하면 ==> var4=var1?var1:var2 이렇게인듯

// --- case

let animal = "wow";
switch (animal) {
  case "cat":
    console.log("고양이");
    break; //break없으면 계속 내려감
  case "dog":
    console.log("강아지");
    break;
  case "tiger":
    console.log("호랑이");
    break;
  case "fish":
    console.log("물고기");
    break;
  case "snake":
    console.log("뱀");
    break;
  default:
    console.log("얜 머임?");
}
