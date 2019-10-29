const mean = arr => {
  let sum = 0;
  arr.map(num => (sum += parseFloat(num)));
  return sum / arr.length;
};

const median = arr => {
  console.log(arr);
  if (arr.length % 2 === 1) {
    return parseFloat(arr[(arr.length + 1) / 2 - 1]);
  } else {
    return (
      (parseFloat(arr[Math.floor((arr.length + 1) / 2) - 1]) +
        parseFloat(arr[Math.ceil((arr.length + 1) / 2) - 1])) /
      2
    );
  }
};

const mode = arr => {};

// //Testing
// const { ASSERT } = require("./tests/ASSERT");
// const test = () => {
//   if (!ASSERT(mean(["0", "2", "8", "8", "8", "10"]), 6)) {
//     console.log("TEST FAILED");
//     return;
//   }
//   if (!ASSERT(median(["0", "2", "8", "16", "8", "10"]), 12)) {
//     console.log("TEST FAILED");
//     return;
//   }
//   if (!ASSERT(median(["0", "2", "7", "9", "7", "8", "10"]), 9)) {
//     console.log("TEST FAILED");
//     return;
//   }

//   console.log("Test Passed!");
// };
// test();

// const debug = () => {
//   console.log(median(["0", "2", "7", "8", "10"]));
// };

// // debug();
