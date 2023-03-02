/*
Bisa disebut palindrome ketika sebuah kata/string dibalik dan tetap menghasilkan kata/string yang sama
1. Membandingkan karakter pertama dengan karakter terakhir dari sebuah kata
2. Jikalau karakter pertama dan karakter terakhir tidak sama maka return false
3. Jika sama maka perulangan tetap berlanjut sampai loop berhenti
4. Ketika Loop telah berhenti maka return true 
*/
function palindrome(string) {
  // your code here
  // 1
  // return string.split("").reverse().join("") === string;
  //
  // 2
  // let end = string.length - 1;
  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] !== string[end]) {
  //     return false;
  //   }
  //   end--;
  // }
  // return true;
  //
  // 3
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result === string;
}

console.log(palindrome("civic")); // true
console.log(palindrome("katak")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("kupu-kupu")); // false
console.log(palindrome("lion")); // false
