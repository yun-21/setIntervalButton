let fromData = {
  a : "1. 꽁꽁 얼어붙은",
  b : "2. 유등천 위로",
  c : "3. 고양이가 날라다닙니다."
}

function a() {
  console.log(fromData.a);
}

function b(){
  console.log(fromData.b);
}

function c(){
  console.log(fromData.c);
}

setTimeout(()=>{
  console.log("4. 고양이가 날라갈까말까");
},4000);

a();
b();
c();