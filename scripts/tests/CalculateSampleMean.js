const { ASSERT } = require('./ASSERT');

const calculateSampleMean = arr => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

//Testing

const test = () => {
  if (!ASSERT(calculateSampleMean([0, 2, 8, 8, 8, 10]), 6)) {
    console.log('TEST CASE FAILED');
    return;
  }
  console.log('Test Passed!');
};

// test();

module.exports = { calculateSampleMean };
