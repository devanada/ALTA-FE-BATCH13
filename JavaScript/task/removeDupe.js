function removeDuplicates(array) {
  // your code here
  //   let unique = array.filter((i, j) => {
  //     return array.indexOf(i) === j;
  //   });
  //   return unique.length;
  //
  //   let result = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] !== array[i + 1]) {
  //       result.push(array[i]);
  //     }
  //   }
  //   return result.length;
  //
  return [...new Set(array)].length;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9])); // 6
console.log(removeDuplicates([2, 2, 2, 11])); // 2
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); // 4
console.log(removeDuplicates([1, 2, 3, 11, 11])); // 4
