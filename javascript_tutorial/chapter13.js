// callback함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수

function main(value) {
  value();
}
function sub() {
  console.log("this is sub");
}
main(sub); // sub함수를 callback함수로써 넘겼다

//뒤늦게 실행시키는. => callback

//함수 표현식처럼,
main(() => {
  console.log("this is callback written by arrow");
});
