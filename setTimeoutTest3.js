// setTimeout(() => {
//   console.log("1. 너굴희가 공중부양");

//   setTimeout(() => {
//     console.log("2. 멍구리씨 구리구리");
//   }, 1); //비동기함수를 동기화한것임. 순서를 어기는 놈을 지키게 할 수 있는게 콜백
// }, 1000);

// ! 굉장히 중요하다!
setTimeout(function() {
  console.log("1. 너구리가 공중부양");

  a();

}, 1000)

function a() {
  setTimeout(function() {
    console.log("2. 너구리가 늦잠");
  }, 1000)
}
