// * First attempt
// const removeFromArray = function (array, ...removeArgs) {
//   for (const item of removeArgs) {
//     for (let i = 0; i < array.length; i++) {
//       if (item === array[i]) {
//         array.splice(i, 1);
//       }
//     }
//   }
//   return array;
// };

// * Second attempt
const removeFromArray = function (array, ...removeArgs) {
  return array.filter((item) => !removeArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
