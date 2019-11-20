let n = 10; //approximation quality

// let m = 10;

// let s = 3;

const stepSize = (a, b) => {
  //   return (b - a) / n;
  return 0.5;
};

// const func = varToEval => {
//   return 1 / varToEval;
// };

const func = (varToEval, m, s) => {
  return (
    (1 / (s * Math.sqrt(2 * Math.PI))) *
    Math.pow(Math.E, -1 * (Math.pow(varToEval - m, 2) / (2 * Math.pow(s, 2))))
  );
};

const simpson = (a, b, m, s) => {
  let currentStep = a;
  let solution = 0;
  solution += func(currentStep, m, s);
  for (var i = 1; ; i++) {
    currentStep += stepSize(a, b);
    if (currentStep >= b) {
      solution += func(currentStep, m, s);
      solution *= stepSize(a, b) / 3;
      return solution;
    }
    solution +=
      i % 2 == 0 ? 2 * func(currentStep, m, s) : 4 * func(currentStep, m, s);
  }
};

// const leftAsym = () => {
//   return Math.round(m - 3 * s);
// };

// const rightAsym = () => {
//   return Math.round(m + 3 * s);
// };

// console.log(simpson(-3, 3, 0, 1));

// console.log("LEFT ASYMTOTE", Math.round(m - 3 * s));
// console.log("RIGHT ASYMTOTE", Math.round(m + 3 * s));
