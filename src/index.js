module.exports = function getZerosCount(number) {
  let zerosCount = 0;
  for (let n = 5; n <= number; n *= 5) {
    for (let i = n; i <= number; i += n) {
      zerosCount++;
    }
  }
  return zerosCount;
}
