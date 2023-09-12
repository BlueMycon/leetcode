/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  // build frequency counter O(n); turn it into entries
  const freqCounts = makeFrequencyCounter(nums);
  const freqCountList = [...freqCounts.entries()];

  // quickSelect the k largest entries by frequency
  const kLargestEntries = quickSelect(freqCountList, 0, freqCountList.length - 1, k);

  return kLargestEntries.map(e => e[0]); // return the nums from the entries
};

function makeFrequencyCounter(arr) {
  let counts = new Map();

  for (let elem of arr) {
    counts.set(elem, (counts.get(elem) || 0) + 1);
  }

  return counts;
}

function partition(arr, left, right) {
  const pivotIndex = Math.floor((left + right) / 2);
  const pivotValue = arr[pivotIndex][1];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i][1] > pivotValue) {
      i++;
    }
    while (arr[j][1] < pivotValue) {
      j--;
    }
    if (i <= j) {
      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  return i;
}

function quickSelect(arr, left, right, k) {
  if (left === right) {
    return arr;
  }

  const pivotIndex = partition(arr, left, right);

  if (k === pivotIndex) {
    return arr.slice(0, pivotIndex); // Return the k largest elements
  } else if (k < pivotIndex) {
    return quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    return quickSelect(arr, pivotIndex, right, k);
  }
}
