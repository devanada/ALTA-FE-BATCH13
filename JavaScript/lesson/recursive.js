function penjelasanRecursive(n) {
  //   console.log("Nilai n:", n);
  if (n == 1) {
    // kondisi dimana loop harus berhenti ketika n == 1 (condition)
    return n;
  } else {
    const result = recursiveSolution(n - 1); // n - 1 adalah post, agar kondisi diatas bisa terpenuhi
    // console.log("hasil:", result);
    return n * result;
  }
}

function recursiveSolution(n) {
  if (n == 1) return n;
  else return n * recursiveSolution(n - 1);
}

function recursive(n) {
  console.time("recursive");
  const result = recursiveSolution(n);
  console.timeEnd("recursive");
  return result;
}

function iterativeSolution(n) {
  console.time("iterative");
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  console.timeEnd("iterative");
  return result;
}

console.log(recursive(15));
console.log(iterativeSolution(15));
