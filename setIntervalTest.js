let counter = 10;
const timer = function () {
  setTimeout(function () {
    console.log(counter+"vw");
    counter--;
    if(counter > 0){
      timer(); //재귀호출 
    }else{
      console.log("룰루 종료");
    }
  }, 100);
}
timer();