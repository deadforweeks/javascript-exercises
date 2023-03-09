const add = function(a,b) {
	return a+b;
};

const subtract = function(c,d) {
  return c-d	
};

const sum = function(e,f) {
  console.log('sum of (adding up) '+e+' with '+f)
	return e+f;
};

const multiply = function(a,b) {
  console.log('multiplying', a, 'with', b)
  multiplyResult = eval(a*b)
  console.log('result is', multiplyResult);
  return multiplyResult;
};

const power = function(c,d) {
	console.log('the power of ',c,d,'is the following:')
  // return 3**5;
  // return 4**5
  return c**d
};

const factorial = function(num) {
	console.log('factorializing incrementally 1*2*3*... all the way to', num);
  
  if (num === 0 || num === 1) return 1;
  
  for (var i=num-1; i>=1; i--) {
    num = num*i;
    console.log('calculating',i,'with',num);
  }
 
  console.log('displaying final result:')
  return num; 
};

const factorialize = function(start,num) {
	console.log('factorializing incrementally', 'starting from',start,'all the way to', num);
  
  if (num === 0 || num === 1) return 1;
  
  for (var i=num; i>=start; i--) {
    num = num*i;
    console.log('calculating',i,'with',num);
  }
 
  console.log('displaying final result! It is:', num)
  return num; 
};

// Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };

console.clear()
console.log('console cleared!')
