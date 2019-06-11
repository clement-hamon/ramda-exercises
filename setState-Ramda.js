  /**
   * Allow the developer to modify an object by either passing a function or a value
   */
  const functionalize = unless(is(Function), always);
  
  const functionalEvolve = object => compose(evolve(R.__, object), map(functionalize));

  // example
  let state = {
    name: "toto",
    age: 32
  }
  
  const setState = functionalEvolve(state);
  
  state = setState({name: "titi", age: inc});