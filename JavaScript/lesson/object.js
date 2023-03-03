const objVar = {
  // collection of properties
  // jika mengakses key diluar dari apa yang ditulis didalam object ini, nilainya akan undefined
  name: "Thomas Shelby", // name is the key, Thomas Shelby is the value
  age: 36,
  job: "Businessman",
  is_married: true,
  address: {
    city: "Birmingham",
    country: "United Kingdom",
  },
  hobbies: ["Ride a horse", "Gambling"],
  // jika nilai dari sebuah property itu fungsi, maka property tersebut bisa disebut sebagai method
  getRandomNumber: () => {
    const num = Math.random();
    return num;
  },
  func2: function () {
    const num = Math.random();
    return num;
  },
  home: null,
};

// ---------- DEKLARASI OBJECT KOSONG TANPA PROPERTY ----------
// let objLiteral = {}; // Literal syntax
// let objConstructor = new Object(); // Constructor syntax

// ---------- AKSES NILAI DARI SEBUAH PROPERTY ----------
// console.log(objVar.getRandomNumber()); // dot notation
// console.log(objVar.job); // dot notation
// console.log(objVar["job"]); // bracket notation
// console.log(objVar.address.city); // akses nilai didalam nested object dengan menggunakan dot notation
// console.log(objVar.address["city"]);
// console.log(objVar["address"].city);
// console.log(objVar["address"]['city']);
// console.log(objVar.hobbies[0]); // akses nilai didalam array dengan menggunakan index

// ---------- MELAKUKAN PERULANGAN OBJECT ----------
// for (const key in objVar) {
//   console.log(key); // memunculkan daftar nama key dari sebuah property
//   console.log(objVar[key]); // memunculkan daftar nilai dari sebuah property
// }

// ---------- MERUBAH NILAI DARI SEBUAH PROPERTY ----------
objVar.age = 40;
objVar["job"] = "Politician";
objVar.address.city = "Liverpool";

// console.log("BEFORE", objVar);

// ---------- MENGHAPUS PROPERTY DARI SEBUAH OBJECT ----------
delete objVar.func2; // dot notation
// delete objVar["home"]; // bracket notation
// delete objVar.address.country; // nested dot notation
// delete objVar["address"]["country"]; // nested bracket notation
// delete objVar.address["country"]; // nested dot bracket notation
// delete objVar["address"].country; // nested bracket dot notation

// console.log("AFTER", objVar);

// ---------- MENGECEK TIPE DATA SEBUAH PROPERTY/VARIABEL ----------
// console.log(typeof objVar.hobbies);

// ---------- MENAMBAHKAN PROPERTY BARU DALAM OBJECT ----------
objVar.blood_type = "O";
objVar.car = { brand: "Volkswagen" };
objVar.car.color = "Black";
objVar.hobbies.push("Drinking");

// ---------- MEMBUAT ARRAY OF KEYS/VALUES DARI SEBUAH OBJECT ----------
let keysInObject = Object.keys(objVar);
let valuesInObject = Object.values(objVar);

let formInput = {
  full_name: "John McAlister",
  nick_name: "John",
  address: "Ireland",
  message: "",
};

const check = Object.values(formInput).every((value) => {
  return value !== "";
});

// console.log(check);

// ---------- DUPLIKASI SEBUAH OBJECT ----------
let dupe1 = Object.assign({}, objVar); // menggunakan object assign
let dupe2 = { ...objVar }; // menggunakan spread operator
let dupe3 = JSON.parse(JSON.stringify(objVar)); // menggunakan JSON method (efektif untuk melakukan deep copy)

delete dupe3.address.country;
console.log("OBJVAR", objVar);
console.log("DUPE", dupe3);
