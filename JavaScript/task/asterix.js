function playWithAsterik(n) {
  // your code here
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) result += " ";
    for (let k = 0; k <= i; k++) result += "* ";
    if (i !== n - 1) result += "\n";
  }
  return result;
}

console.log(playWithAsterik(5));
