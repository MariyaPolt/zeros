module.exports = function getZerosCount(number) {
  let zerosCount = 0;
  let devisor = 5;
  while ( Math.floor(number / devisor) >= 1 ) {
    zerosCount += Math.floor(number / devisor);
    devisor *= 5;
  }
  return zerosCount;
}

