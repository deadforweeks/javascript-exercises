//   Sum from a to n = [n * (n + 1) / 2] – [(a - 1) * a / 2]
function sumAll (a, n) {
  //a is start number, n is end number
  var aa =  n*(n+1)/2
  console.log('first # is ', aa)
  
  var bb = (a-1)*a/2
  console.log('second # is ', bb)
  
  var sumResult = aa-bb
  console.log('return sumResult ',sumResult)
  
  return sumResult
  
}

console.clear()
console.log('cleared---')

// Do not edit below this line
module.exports = sumAll;
