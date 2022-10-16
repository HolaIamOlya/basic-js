const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
    const arrayClone = arr.slice();
    const actions = {
      "--double-next": (inputArray, outputArray, index) => {
        if(index !== inputArray.length - 1){
          outputArray.push(inputArray[index + 1]);
        }
      },
      "--double-prev": (inputArray, outputArray, index) => {
        if(inputArray[index - 1]){
          outputArray.push(inputArray[index - 1]);
        }
      },
      "--discard-next": (inputArray, outputArray, index) => {
        if(index !== inputArray[inputArray.length - 1]){
          delete inputArray[index + 1];
        }
      },
      "--discard-prev": (inputArray, outputArray, index) => {
        if(inputArray[index - 1]){
          outputArray.pop();
        }
      },
    };
    const result = [];
    for (let i = 0; i < arrayClone.length; i++) {
      const el = arrayClone[i];
      if (actions[el]) {
        actions[el](arrayClone, result, i);
      }
      else if(el){
        result.push(el);
      }
    }
    return result;
  }
}

module.exports = {
  transform,
};
