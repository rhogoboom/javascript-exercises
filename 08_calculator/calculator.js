const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(inArray) {
	return inArray.reduce((total, current) => total + current, 0);
};

const multiply = function(inArray) {
  let start = inArray.length > 0 ? 1 : 0;
  return inArray.reduce((product, current) => product * current, start);
};

const power = function(n, power) {
	return n ** power;
};

const factorial = function(x) {
  function factStep(x) {
    if (x === 0) {
      return 1
    }
    else {
      return x * factStep(x - 1); 
    }
  }
  return factStep(x);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
