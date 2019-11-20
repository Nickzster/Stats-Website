const { ASSERT } = require('./ASSERT');

const { calculateSampleMean } = require('./CalculateSampleMean');

const calculateSampleDeviation = arr => {
  let sampleMean = calculateSampleMean(arr);
  let sumOfSquaredDeviations = 0;
  for (var i = 0; i < arr.length; i++) {
    sumOfSquaredDeviations += Math.pow(arr[i] - sampleMean, 2);
  }
  return Math.sqrt(sumOfSquaredDeviations / (arr.length - 1));
};

//Testing

const debug = () => {
  console.log(calculateSampleDeviation([0, 2, 8, 8, 8, 10]));
};

// debug();

const test = () => {
  if (!ASSERT([0, 2, 8, 8, 8, 10], 4)) {
    console.log('TEST FAILED');
    return;
  }
  console.log('Test Passed!');
};

// test();
