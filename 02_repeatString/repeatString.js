function repeatStringNumTimes (string, times) {
//   create a string that stores all the strings on repeat repeated
  var repeatedString = "";
  
//   while loop , while it is < the times kers
  while (times > 0) { 
    repeatedString += string; 
  //the cache of string stores gets added the string in the argument
    times--;
  }
  
  //after the while loop:
  return repeatedString;
}

thisString = repeatStringNumTimes('dope motherkkers ', 3)




// Do not edit below this line
module.exports = repeatString;
