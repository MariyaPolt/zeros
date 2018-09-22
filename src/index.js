module.exports = function getZerosCount(number) {
  var zerosCount = 0;
  var i = 0;
  for (var n = 5; n <= number; n *= 5) {
    for (i = n; i <= number; i += n) {
      zerosCount++;
    }
  }
  return zerosCount;
}
