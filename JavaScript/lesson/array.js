/*
- Array adalah sebuah tipe data yang mana dia digunakan untuk menyimpan kumpulan informasi/data yang disimpan secara berurutan dalam satu variabel.
- Setiap item/element yang ada didalam array memiliki index yang sifatnya zero-based, artinya untuk element pertama dimulai dari index 0, element kedua itu index 1, dan seterusnya.
*/

// ---------- DEKLARASI ARRAY ----------
let arrLiteral = [];
let arrConstructor = new Array();

let temp = ["Apple", 1, null, true, {}, []];
let fruits = ["Apple", "Orange", "Plum", "Banana"]; // array of string
let scores = [98, 85, 91, 78, 82]; // array of number
let posts = [
  {
    id: 1,
    title: "Test 1",
  },
  {
    id: 2,
    title: "Test 2",
  },
  {
    id: 3,
    title: "Test 3",
  },
  {
    id: 4,
    title: "Test 4",
  },
]; // array of object

let items = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// console.log(items[0][0]);

// ---------- MENGAKSES ELEMENT DI ARRAY ----------
// console.log(fruits[0]); // Apple
// console.log(scores[1]); // 85
// console.log(posts[2].title); // V -> Test 3
// console.log(posts.title); // X -> undefined

// ---------- MENGGANTI/MERUBAH NILAI DARI SEBUAH ELEMENT ----------
// fruits[2] = "Pear";
// posts[1].title = "Test Change 2";
// console.log(posts);

// ---------- MENAMBAHKAN ELEMENT DI SEBUAH ARRAY ----------
// fruits[3] = "Lemon"; // menambahkan element di spesifik index, atau merubah jikalau sudah ada element yang exist
// fruits[fruits.length] = "Lemon";
fruits.push("Lemon"); // menambahkan element di akhir array
fruits.unshift("Melon"); // menambahkan element di awal array
// console.log(fruits);

// ---------- MENGHAPUS ELEMENT DI SEBUAH ARRAY ----------
fruits.pop(); // menghapus element terakhir dari sebuah array
fruits.shift(); // menghapus element pertama dari sebuah array
// console.log(fruits);

let fruits2 = ["Apple", "Pear", "Lemon", "Banana", "Avocado"];
// fruits2.splice(2, 2); // menghapus element dimulai dari index 2 dengan delete count sebanyak 2
// fruits2.splice(2, 2, "SOLD OUT", "SOLD OUT"); // menghapus element dimulai dari index 2 dengan delete count sebanyak 2, setelah itu menambahkan element baru
fruits2.splice(2, 0, "Jackfruit", "Starfruit"); // tidak melakukan penghapusan element karena delete count yang di definisikan adalah 0, jadi menambahkan element baru dimulai dari index 2
// console.log(fruits2);

// ---------- MENDUPLIKASI SEBUAH ARRAY ----------
let sample = ["A", "B", "C", "D", "E", "F"];
let dupeSample = sample.slice(); // menduplikasi keseluruhan element di sebuah array
let halfDupe = sample.slice(0, sample.length / 2); // menduplikasi element mulai dari index 0 sampai index tengah-tengah dari sebuah array
let endDupe = sample.slice(sample.length / 2);
// console.log([...halfDupe, "Test", ...endDupe]); // ["A", "B", "C", "Test", "D", "E", "F"]
// console.log([halfDupe, "Test", endDupe]); // [ [ 'A', 'B', 'C' ], 'Test', [ 'D', 'E', 'F' ] ]

// ---------- MENGGABUNGKAN SEBUAH ARRAY DENGAN ARRAY LAINNYA ----------
// console.log(halfDupe);
// console.log(endDupe);
let spreadDupe = [...halfDupe, ...endDupe, ...sample]; // menggunakan spread operator
let concatDupe = halfDupe.concat(endDupe); // menggunakan method concat
// console.log(spreadDupe);

// ---------- MELAKUKAN PERULANGAN ARRAY ----------
for (let i = 0; i < fruits2.length; i++) {
  //   console.log(`${i}:`, fruits2[i]);
}

for (const fruit of fruits2) {
  //   console.log(fruit);
}

for (const key in fruits2) {
  //   console.log(`${key}:`, fruits2[key]);
}

// fruits2.map((fruit, index) => console.log(`${index}:`, fruit));

// fruits2.forEach((fruit, index) => console.log(`${index}:`, fruit));

let jual_kendaraan = [
  {
    title: "Rubicon",
    deskripsi: "Minus plat bodong",
    harga: 300,
    lokasi: "Indonesia",
  },
  {
    title: "Harley",
    deskripsi: "Dibeli pakai uang rakyat",
    harga: 150,
    lokasi: "Indonesia",
  },
  {
    title: "Pajero",
    deskripsi: "Dijual karena diamuk massa",
    harga: 100,
    lokasi: "Indonesia",
  },
];

// forEach bisa digunakan untuk menambahkan property baru didalam suatu element dalam array
jual_kendaraan.forEach((kendaraan, index) => {
  kendaraan.id = index + 1;
});

/* map selain bisa menambahkan property baru dalam suatu element di array, dia juga dapat me return property tertentu yang dipilih seperti dibawah ini.
selain itu map juga biasa digunakan untuk melakukan perulangan pada sebuah component, jadi kita membuat component cukup 1 tapi ketika didalam html dia bisa muncul lebih dari 1 kali tergantung seberapa banyak item/element didalam sebuah array.
 */
const cobaCoba = jual_kendaraan.map((kendaraan) => {
  return { title: kendaraan.title, deskripsi: kendaraan.deskripsi };
});

console.log(cobaCoba);
