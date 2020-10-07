const bubbleSort = (arr) => {
  const copyArr = arr.slice();
  const coords = [];
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < copyArr.length; i += 1) {
      if (copyArr[i] > copyArr[i + 1]) {
        coords.push([i, i + 1]);
        const tmp = copyArr[i];
        copyArr[i] = copyArr[i + 1];
        copyArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return coords;
};

module.exports = bubbleSort;
