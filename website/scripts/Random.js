const generateRN = (min, max) => {
  return Math.floor(Math.random() * (+max - +min) + +min);
};

// const testRN = () => {
//   for (var i = 0; i < 10; i++) {
//     console.log(generateRN(1, 100));
//   }
// };

// testRN();
