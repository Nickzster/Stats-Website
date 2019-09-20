const calculateSampleMean = arr => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i], 10);
  }
  return sum / arr.length;
};

const calculateSampleDeviation = arr => {
  let sampleMean = calculateSampleMean(arr);
  let sumOfSquaredDeviations = 0;
  for (var i = 0; i < arr.length; i++) {
    sumOfSquaredDeviations += Math.pow(parseInt(arr[i], 10) - sampleMean, 2);
  }

  return Math.sqrt(sumOfSquaredDeviations / (arr.length - 1));
};
