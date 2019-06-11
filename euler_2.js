function* fib(a, b) {
    let c = 0
    yield a
    yield b
    while (true) {
      c = a + b
      a = b
      b = c
      yield c
    }
  }
  
  function seq(generator) {
    return function(){
       return generator.next().value;
    }
  }
  
  function toList(sequence, listCondition ,endCondition) {  
    const arr = [];  let value = sequence(); 
    while (endCondition(value)) {    
      if(listCondition(value)){ arr.push(value);}
      value = sequence();  
    }  
    return arr;
  }
  
  const fibSquence = seq(fib(1,2));
  
  const isEven = curry ((x) => not(x % 2));

  const list = toList(fibSquence, isEven , (x) => x < 4000000)
list