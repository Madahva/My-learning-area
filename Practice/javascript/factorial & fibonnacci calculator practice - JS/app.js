document.querySelector('#factorial__form').addEventListener("click", (event) => event.preventDefault());

// Factorial

const inputFactorialBtn = document.querySelector('#submitFactorial').addEventListener("click", () => {

  const inputFactorial = Math.floor(document.querySelector('#factorial__input').value);
  const outputFactorial = document.querySelector('.factorial__output');

  if (inputFactorial < 0) {
    return outputFactorial.textContent = "Enter a non-negative integer";
  }

  if (inputFactorial > 4999) {
    return outputFactorial.innerHTML = "Infinite" + '<br></br>' + "the number must be < 5000";
  }

  const factorial = (n) => {
    let aux = 1;
    let input = new Array(n).fill("").map(() => aux++);
    let result = input.reduce((previousValue, currentValue) => previousValue * currentValue, 1);

    return result;
  }

  console.log(factorial(inputFactorial));
  outputFactorial.textContent = factorial(inputFactorial);
});


// Fibonnacci

document.querySelector('#fibonnacci__form').addEventListener("click", (event) => event.preventDefault());

const inputFibonnacciBtn = document.querySelector('#submitFibonnacci').addEventListener("click", () => {

  const inputFibonnacci = Math.floor(document.querySelector('#fibonnacci__input').value);
  const outputFibonnacci = document.querySelector('.fibonnacci__output');

  if (inputFibonnacci <= 0) {
    return outputFibonnacci.textContent = "the number must be > 0";
  }

  if (inputFibonnacci > 35) {
    return outputFibonnacci.textContent = "Too big";
  }

  const fibonnacciSequence = (n) => {
    let a = 0;
    let b = 1;
    let input = new Array(n - 1).fill("")
    let result = input.reduce((acc) => {

      const temp = a;
      a = b;
      b = temp + b;
      acc.push(a);
      return acc;
    }, [0]);

    return result;
  }


  const fibonnacci = n => {
    const fib = [0, 1]
    
    for(let i = 2; i <= n; i++) {
      fib[i] = fib[i - 2] + fib[i -1]
    }
    return fib[n]
  }
  
  /* const fibonnacci = n => {
    if (n < 2) return n;
    return fibonnacci(n - 2) + fibonnacci(n-1);
  } */

  console.log(fibonnacci(inputFibonnacci));
  outputFibonnacci.innerHTML = (fibonnacciSequence(inputFibonnacci) + '<br></br>' + fibonnacci(inputFibonnacci));
});