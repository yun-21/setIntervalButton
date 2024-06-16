let intervalHandler = 0; //상태변수
let timer = setInterval(() => {
  console.log('1초' + intervalHandler);
  intervalHandler++;
  if(intervalHandler>10){
    clearInterval(timer);
  }
}, 100);