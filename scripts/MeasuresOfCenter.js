const mean = arr => {
  let sum = 0;
  arr.map(num => (sum += parseInt(num, 10)));
  return sum / arr.length;
};

const median = arr => {
  if (arr.length % 2 === 1) {
    return parseInt(arr[(arr.length + 1) / 2 - 1], 10);
  } else {
    return (
      (parseInt(arr[Math.floor((arr.length + 1) / 2)], 10) +
        parseInt(arr[Math.ceil((arr.length + 1) / 2)], 10)) /
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
