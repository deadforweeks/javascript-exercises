const leapYears = function(yr) {

  if (yr%4==0 && yr%100!=0) {
    console.log(`Leap year! ${yr} is divisible by four but not divisible by 100`)
    return true;
  } else if (yr%4==0 && yr%400==0) {
    console.log(`special leap year! ${yr} is divisible by 400`)
    return true;
  } else {
    console.log(`not leap year, ${yr}`)
    return false;
  }
 }
  
console.clear()
console.log('console cleared')



// Do not edit below this line
module.exports = leapYears;
