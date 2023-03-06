function caesarCipher(offset, input) {
  // your code here
  let result = "";
  input.toLowerCase();
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      result += input[i];
      continue;
    }
    offset %= 26;
    let code = input[i].charCodeAt() + offset;
    if (code > 122) code -= 26;
    if (code < 97) code -= offset;
    result += String.fromCharCode(code);
  }
  return result;
}

console.log(caesarCipher(3, "abc")); // def
console.log(caesarCipher(2, "alta")); // cnvc
console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz"));
// bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"));
// mnopqrstuvwxyzabcdefghijkl
