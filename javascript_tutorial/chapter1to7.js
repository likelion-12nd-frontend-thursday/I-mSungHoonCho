let a = 1.1;
let b = 0.1;
console.log(a + b === 1.2); // false ㅋㅋ

let integer = 1;
let name = "sunghoon";
console.log(integer + name); // 숫자 + 문자열 : 숫자를 묵시적 형변환

let boolean = true;
let string = "string";
console.log(boolean + string);

// ---

let integer2 = 2;
let name2 = "3000";
console.log(Number(name2) + 2); // 3002
console.log(Number("10개.")); // NaN
console.log(parseInt("10개.")); // 10
console.log(parseInt("이건 10개.")); // NaN

console.log(typeof String(20)); // String

// ----
