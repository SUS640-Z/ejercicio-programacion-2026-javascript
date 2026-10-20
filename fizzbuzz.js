const fizBuzz = (n) => {
  if (n == undefined || Number.isNaN(n) || n <= 0 ||  n % 1 != 0){
    console.error("El dato del valor es incorrecto")
    return null
  }
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizBuzz(5)
fizBuzz(15)
fizBuzz(20)