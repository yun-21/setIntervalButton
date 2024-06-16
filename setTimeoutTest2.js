console.time("작업");

console.time('첫번째 setTimeout');
setTimeout(function(){
  console.timeLog("첫번째 setTimeout");
  console.log("1. 교통카드");
  console.timeEnd('첫번째 setTimeout');
},1000);
console.time('2');
setTimeout(function(){
  console.log("2. 발급하기");
  console.timeEnd('2');
},1000);
setTimeout(function(){
  console.log("3. 카드주세요");
},1000);
console.timeEnd("작업");