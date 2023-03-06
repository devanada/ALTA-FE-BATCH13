function meanMedian(arrayInput) {
  // your code here
  return `${mean(arrayInput)} ${median(arrayInput)}`;
}

function mean(array) {
  const result = array.reduce((a, b) => a + b, 0);
  return result / array.length;
}

function median(array) {
  let mid = array.length / 2;
  if (array.length % 2 !== 0) {
    return array[Math.floor(mid)];
  } else {
    mid = array[mid - 1] + array[mid];
    return mid / 2;
  }
}

console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30
