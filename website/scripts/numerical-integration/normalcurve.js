const func = (varToEval, m, s) => {
  return (
    (1 / (s * Math.sqrt(2 * Math.PI))) *
    Math.pow(Math.E, -1 * (Math.pow(varToEval - m, 2) / (2 * Math.pow(s, 2))))
  );
};

console.log(func(0, 0, 1));
console.log(func(10, 9, 1));
