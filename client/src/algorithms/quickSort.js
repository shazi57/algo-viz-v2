/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
// Find a "pivot" element in the array to compare all other
// elements against and then shift elements before or after
// pivot depending on their values

function partition(arr, left, right, coords) {
  const middle = Math.floor((right + left) / 2);
  const pivot = arr[middle];
  let i = left; // Start pointer at the first item in the array
  let j = right; // Start pointer at the last item in the array

  while (i <= j) {
    // Move left pointer to the right until the value at the
    // left is greater than the pivot value
    while (arr[i] < pivot) {
      i += 1;
    }

    // Move right pointer to the left until the value at the
    // right is less than the pivot value
    while (arr[j] > pivot) {
      j -= 1;
    }

    // If the left pointer is less than or equal to the
    // right pointer, then swap values
    if (i <= j) {
      coords.push([i, j]);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i += 1;
      j -= 1;
    }
  }

  return i;
}

function quickSort(arr, left = 0, right = arr.length - 1, coords = []) {
  const len = arr.length;
  let index;

  if (len > 1) {
    index = partition(arr, left, right, coords);

    if (left < index - 1) {
      quickSort(arr, left, index - 1, coords);
    }

    if (index < right) {
      quickSort(arr, index, right, coords);
    }
  }

  return coords;
}

export default quickSort;
