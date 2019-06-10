  const functionalize = unless(is(Function), always);
  
  const functionalEvolve = object => compose(evolve(R.__, object), map(functionalize));

  let state = {
    name: "toto",
    age: 32
  }
  
  const setState = functionalEvolve(state);
  
  state = setState({name: "titi", age: inc});