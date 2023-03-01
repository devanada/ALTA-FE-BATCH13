// let variabelName = value
let contohVariabel = "Hello World";
// console.log(contohVariabel); // Hello World -> string
contohVariabel = 1234;
// console.log(contohVariabel); // 1234 -> number/integer
contohVariabel = true;
// console.log(contohVariabel); // true -> boolean

/*
lowercase -> tempvariable
UPPERCASE -> TEMPVARIABLE
camelCase -> tempVariable
PascalCase -> TempVariable
snake_case -> temp_variable
*/

// ----==== Deklarasi Variabel ====----
let variabelLet = "Hello Let";
const variabelConst = "Hello Const";
var variabelVar = "Hello Var";

console.log(variabelLet, variabelConst, variabelVar);

// ----==== Perubahan Nilai Variabel ====----
// Yang hanya bisa dirubah nilainya yaitu let dan var, const tidak bisa
variabelLet = 1234; // V
// variabelConst = 1234; // X
variabelVar = 1234; // V

console.log(variabelLet, variabelConst, variabelVar);

// ----==== Mendeklarasikan Ulang Variabel (Redeclare) ====----
// var bisa di inisialisasi/deklarasi ulang, let dan const tidak
// let variabelLet = true; // X
// const variabelConst = true; // X
var variabelVar = true; // V

console.log(variabelLet, variabelConst, variabelVar);

// ----==== Hoisting ====----
console.log(varKedua); // undefined
// console.log(letKedua); // ReferenceError: Cannot access 'letKedua' before initialization
// console.log(constKedua); // ReferenceError: Cannot access 'constKedua' before initialization

var varKedua = "Test";
let letKedua = "Test";
const constKedua = "Test";

/*
Saran mending pakai let kalau misalnya temen-temen membutuhkan variabel yang bisa dirubah nilainya. Kalau misalkan mendeklarasikan variabel, nilainya tidak perlu dirubah bisa pakai const.
*/

let penampung = "";
// proses pengambilan data dari pihak luar
penampung = "Fetch Data";

const DAYS_IN_WEEK = 7;

let variabelLet1 = 2;
const variabelConst1 = 2;

console.log(variabelLet1 / variabelConst1);
