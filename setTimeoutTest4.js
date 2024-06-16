setTimeout(function () {
  console.log("1.누구야");

  setTimeout(function () {
    console.log("2.뭐야");
    
    setTimeout(function () {
      console.log("3.몰라");
    }, 1000);

  }, 2000);

}, 3000);