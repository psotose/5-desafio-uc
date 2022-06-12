// Mostrar en consola la secuencia de Fibonacci:

// a. Entre los números 0 y 1000.
function fibonacci(number) {
  // let n1 = 0, n2 = 1, result;
  const fib = [0, 1];
  for (let i = 2; i <= number; i++) {
    // console.log(n1);
    // result = n1+n2;
    // n1 = n2;
    // n2 = result;
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log('fibonacci', fib[i])
  }
  // b. Números pares entre 0 y 1000.

  evenNumbers = fib.filter(e => e % 2 == 0);
  console.log('evenNumbers', evenNumbers);

  // c. Números impares entre 0 y 1000.
  oddNumbers = fib.filter(e => e % 2 !== 0);
  console.log('oddNumbers', oddNumbers);
}
fibonacci(1000);


