function selectionSort(list) {
  // Getting the set length
  const copyArr = list.slice();
  const coords = [];
  const { length } = copyArr;

  // Main loop to iterate over all set elements
  for (let i = 0; i < length; i += 1) {
    // Min is the part that we are not going to loop again
    let min = i;
    for (let j = i + 1; j < length; j += 1) {
      // Executing statement comparison
      if (copyArr[min] > copyArr[j]) {
        // Updating our current min index to iterate
        min = j;
      }
    }

    // Swaping values
    if (min !== i) {
      coords.push([min, i]);
      const temp = copyArr[i];
      copyArr[i] = copyArr[min];
      copyArr[min] = temp;
    }
  }

  return coords;
}

export default selectionSort;
