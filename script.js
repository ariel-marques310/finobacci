function fibonacci(num) {
   
    var seq = [0, 1]; 
    while (seq[seq.length - 1] < num) { 
      var next = seq[seq.length - 1] + seq[seq.length - 2];
      seq.push(next);
    }
    return seq;
  }
  
  function verificaFibonacci(num) {
   
    var seq = fibonacci(num);
    if (seq.includes(num)) {
      console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
    }
  }
  