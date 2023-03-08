/*
Jenis looping di JavaScript
1. for loop
2. while loop
3. for in
4. for of
5. foreach
6. map
*/

/*
for (init; condition; post) {
    .......
}
- Jika kondisi terpenuhi/true maka perulangan akan dilakukan
- Jika kondisi tidak terpenuhi/false maka perulangan akan berhenti
- Agar perulangan tersebut bisa berhenti, bisa membuat sebuah additional condition didalam block scope looping, atau bisa menaikkan/mengurangi nilai dari init itu sendiri
*/

function forLoop(number) {
  console.time("FOR LOOP");
  for (let i = 1; i <= number; i++) {
    console.log("I 1:", i);
  }
  //   for (let i = number; i > 0; i--) {
  //     console.log("I 2:", i);
  //   }
  console.timeEnd("FOR LOOP");
}

function nestedForLoop(number) {
  console.time("NESTED FOR LOOP");
  for (let i = 1; i <= number; i++) {
    console.log("I 1:", i);
    for (let j = 1; j <= number; j++) {
      console.log("J 1:", j);
    }
  }
  console.timeEnd("NESTED FOR LOOP");
}

// forLoop(5);
// nestedForLoop(100);

/*
while (condition) {
    ...
}
- Mirip seperti for loop, hanya saja untuk variabel init dan juga post-nya ditulis diluar dari scope while itu sendiri
- Untuk variabel init biasa di deklarasikan diluar looping, sedangkan post ditulis didalam looping/perulangan itu sendiri
- Harap hati-hati ketika menggunakan while loop karena kalau salah dalam penulisan post/condition akan berakibat infinite loop
*/
function whileLoop(number) {
  console.time("WHILE LOOP");
  let i = 1;
  while (i <= number) {
    console.log("I:", i);
    i++;
  }
  console.timeEnd("WHILE LOOP");
}

function nestedWhileLoop(number) {
  console.time("NESTED WHILE LOOP");
  let i = 1;
  while (i <= number) {
    console.log("I 1:", i);
    let j = 1;
    while (j <= number) {
      console.log("J 2:", j);
      j++;
    }
    i++;
  }
  console.timeEnd("NESTED WHILE LOOP");
}

// whileLoop(5);
// nestedWhileLoop(5);

function whileLoop2(number) {
  console.time("WHILE LOOP 2");
  let i = 1;
  do {
    console.log("I:", i);
    i++;
  } while (i <= number);
  console.timeEnd("WHILE LOOP 2");
}

function nestedWhileLoop2(number) {
  console.time("NESTED WHILE LOOP 2");
  let i = 1;
  do {
    console.log("I 1:", i);
    let j = 1;
    do {
      console.log("J 2:", j);
      j++;
    } while (j <= number);
    i++;
  } while (i <= number);
  console.timeEnd("NESTED WHILE LOOP 2");
}

// whileLoop2(5);
// nestedWhileLoop2(5);

function continueBreakLoop(number) {
  for (let i = 1; i < number; i++) {
    if (i % 2 == 0) {
      continue; // Dia bakal menginstuksikan sebuah program agar dia bisa melanjutkan iterasi/perulangan berikutnya tanpa perlu memproses perintah/code selanjutnya.
    } // 0, 2, 4, 6, 8
    if (i > 10) {
      break; // Dia bakal menginstruksikan sebuah program agar menghentikan proses perulangan, mirip seperti return.
    }
    console.log(i);
  }
}

// continueBreakLoop(20);

const arrItem = ["apel", "jeruk", "mangga", "belimbing", "pir"]; // array of string
const strVal = "Ada Lovelace";

function forLoopArray(elements) {
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
  }
}

// forLoopArray(strVal);

function forInLoop(elements) {
  for (const key in elements) {
    // code here
    console.log(elements[key]);
  }
}

forInLoop(strVal);

function forOfLoop(elements) {
  for (const iterator of elements) {
    // code here
  }
}

function forEachLoop(elements) {
  elements.forEach((item, index) => {
    // code here
  });
}

function mapLoop(elements) {
  elements.map((item, index) => {
    // code here
  });
}
