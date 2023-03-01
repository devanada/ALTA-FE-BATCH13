/*
1. String - "Hello World", "Test", 'Halo', `Halo`, "Halo 123", "123"
2. Number/Integer - 123, 12.3
3. Boolean - true / false
4. Null - null
5. Undefined - 
*/

let strVal = "Hello World"; // <~ string
let numVal = 123; // <~ number
let boolVal = true; // <~ boolean
let nullVal = null; // <~ null
let undVal; // <~ undefined

// console.log(strVal, numVal, boolVal, nullVal, undVal);

// ----==== STRING ====----

/*
`` -> backtick
'' -> single quote
"" -> double quote
*/

let firstName = "Robert";
let lastName = "Smalls";

const fullName = firstName + " " + lastName;
// console.log("Full name:", fullName);
// console.log("Full name:", firstName, lastName);
// console.log(`Full name: ${fullName}`);
// console.log(`Full name: ${firstName} ${lastName}`);

let peopleName = "Ada Lovelace";

// console.log(peopleName.length);
// console.log(peopleName.toUpperCase());

// ----==== NUMBER ====----
let nomor = 123;
nomor = 12.345;

const varA = 4;
const varB = 5;

const sum = varA + varB;
const difference = varB - varA;
const multiply = varA * varB;
const division = varA / varB;
const mod = varB % varA;

// console.log(sum, difference, multiply, division, mod);

// ----==== OPERATOR ====----
// Arithmetic
let varC = 3;
let varD = 5;
// console.log(varC, varD);
varC++; // varC = varC + 1
varD--; // varD = varD - 1
// console.log(varC, varD);
// console.log(varC ** varD);

// Comparison
// console.log(5 > 5);
// console.log(5 < 5);
// console.log(5 >= 5);
// console.log(5 <= 5);

/*
= -> melakukan assignment/reassignment suatu nilai didalam variabel
== -> yang dia bandingkan yaitu value-nya saja
=== -> yang dia bandingkan yaitu value dan juga tipe datanya
*/
// console.log("5" == 5); // true
// console.log("5" === 5); // false
// console.log("5" != 5); // false
// console.log("5" !== 5); // true

// ----==== LOGICAL ====----
const condition1 = 5 < 4; // false
const condition2 = 5 > 4; // true

/*
&& -> outputnya menjadi true kalau semua kondisi dalam keadaan true. selain itu outputnya false
|| -> outputnya menjadi false kalau semua kondisi dalam keadaan false, selain itu outputnya true
*/
// console.log(condition1 && condition2); // false
// console.log(condition1 || condition2); // true

// ----==== ASSIGNMENT ====----
let cobaA = 1;
let cobaB = 4;
let cobaC = 4;
let cobaD = 4;
let cobaE = 4;
cobaA += 2; // cobaA = cobaA + 2 -> 3
cobaB -= 2; // cobaB = cobaB - 2 -> 2
cobaC *= 2; // cobaC = cobaC * 2 -> 8
cobaD /= 2; // cobaD = cobaD / 2 -> 2
cobaE %= 2; // cobaE = cobaE % 2 -> 0
console.log(cobaA, cobaB, cobaC, cobaD, cobaE);
