/*
- name = nama dari function, ditulis secara deskriptif tergantun dari apa yang dia proses didalamnya
- param = parameter yang didapat di luar dari function tersebut
function name(param) {
    ...
}
*/

// ---------- FUNCTION EXPRESSION ----------
function greeting(jam) {
  if (jam < 12) {
    console.log("Selamat Pagi");
  } else if (jam < 18) {
    console.log("Selamat Sore");
  } else {
    console.log("Selamat Malam");
  }
}

function multiply(a, b) {
  const result = a * b;
  return result;
}

function division(a, b) {
  return a / b;
}
// ------------------------------

// ---------- ARROW FUNCTION ----------
const arrowMultiply = (a, b) => {
  const result = a * b;
  return result;
};

const arrowDivision = (a, b) => a / b;

// ------------------------------

function luasSegitiga(a, b) {
  const result = arrowDivision(arrowMultiply(a, b), 2);
  return result;
}

let hour = 15;
greeting(hour);
const kali = arrowMultiply(2, 3);
const bagi = arrowDivision(kali, 2);
console.log(bagi);
console.log(luasSegitiga(2, 3));
