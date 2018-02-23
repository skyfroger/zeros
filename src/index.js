module.exports = function getZerosCount(number) {
  var numOfZeros = 0;
  var i = 5;
  while(Math.floor(number / i) >= 1){
    numOfZeros += Math.floor(number / i);
    i *= 5;
  }

  return numOfZeros;
}
