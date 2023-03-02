/*
  Bisa disebut bilangan prima kalau dia bisa habis dibagi dengan angka 1 dan juga dirinya sendiri, jika bisa dibagi habis selain dengan 2 angka yang sudah disebutkan sebelumnya maka bukan bilangan prima
  1. angka 1
  2. angka dirinya sendiri
  */
function primeNumber(number) {
  // your code here
  for (let i = 2; i <= number - 1; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(primeNumber(11)); // true
console.log(primeNumber(13)); // true
console.log(primeNumber(17)); // true
console.log(primeNumber(20)); // false
console.log(primeNumber(35)); // false
