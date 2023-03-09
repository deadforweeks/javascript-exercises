const ftoc = function(fa) {
  var c
  c = eval( (fa-32)*(5/9) );
  // console.log(c);
  return c;
};

const ctof = function(ce) {
  var f
  f = eval ( (ce*9/5)+32 )
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
