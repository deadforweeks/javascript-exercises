let myString = "BUNNY is fucking stupid";

const reverseString = function(str) {
    let splitString = str.split("");
//     dissect into an as-per-letter array
  
  splitString = splitString.reverse()
//   reversing the array ^
  
  splitString = splitString.join("");
//   Join the array back together
  
  return splitString;
};


// Do not edit below this line
module.exports = reverseString;
