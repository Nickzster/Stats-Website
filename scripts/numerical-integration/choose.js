const fact = num => {
  if (num === 0) return 1;
  else return num * fact(num - 1);
};

const choose = (a, b) => {
  return fact(a) / (fact(b) * fact(b - a));
};

console.log(choose(5, 2));
