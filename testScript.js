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
    console.log(arrayClone);
    console.log(result);
    return result;
  }
}


transform([1, 2, 3, '--double-next']);

