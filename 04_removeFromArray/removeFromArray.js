let myArray = [81, 17, 9, 7, 5, 0, 1, 4, 11, 64, 32, 2, 10, 29, 71, 41, 67, 20, 97, 8, 33, 89, 13, 66, 49, 21, 99, 22, 78, 84, 55, 57, 46, 39, 72, 94, 43, 37, 78, 85, 50, 3]

console.clear()
console.log('hello world! Refreshed.')
console.log('printing myArray at the length of', myArray.length, myArray)


function removeValue(value) {
  for (i=0; i < myArray.length; i++) {
    if (value == myArray[i]) {
      console.log('FOUND print',myArray[i], 'will remove...')
      console.log('removing ', myArray[i])
      let removedNow = myArray[i]
      delete myArray[i]
      console.log('now removed', removedNow);
    } else {
      console.log('displaying array', myArray[i])
      // continue;
    } 
  }  
}



// shit was trying out 1st time (didn't work)
// function removeFromArray (arr, removed){
//   delete arr[removed];
//   console.log('removed: ', removed)
//   return arr;
// }
// thisArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Do not edit below this line
module.exports = removeFromArray;
