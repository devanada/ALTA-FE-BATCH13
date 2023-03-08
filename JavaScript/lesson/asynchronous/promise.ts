/*
Promise -> sebuah object yang merepresentasikan sebuah kejadian/event yang hasil akhirnya bisa terpenuhi (fulfill) atau gagal (reject) yang berdasarkan pada operasi asynchronous dan bisa menghasilkan sebuah output.
*/

interface PromiseType {
  data: string | null;
  message: string;
}

let gachapon = new Promise<PromiseType>((resolve, reject) => {
  console.log("Proses gacha dimulai");
  console.log("Semoga gacha mu wangyyy");
  let rate = Math.random() * 100;
  setTimeout(() => {
    console.log(rate);
    if (rate > 70) {
      resolve({
        data: "SSR",
        message: "Selamat gachamu wangyyy",
      });
    } else {
      reject({
        data: null,
        message: "Gacha mu ampas mzzzzz",
      });
    }
  }, 3000);
});

function cobaCoba() {
  let outputMsg = "";
  gachapon
    .then((result) => {
      outputMsg = result.message;
    })
    .catch((error) => {
      outputMsg = error.message;
    });
  console.log("HASIL", outputMsg);
}

async function cobaCoba2() {
  let outputMsg = "";
  await gachapon
    .then((result) => {
      outputMsg = result.message;
    })
    .catch((error) => {
      outputMsg = error.message;
    });
  console.log("HASIL", outputMsg);
}

const cobaCoba3 = async () => {
  let outputMsg = "";
  try {
    let result = await gachapon;
    outputMsg = result.message;
  } catch (error: any) {
    outputMsg = error.message;
  }
  console.log(outputMsg);
};

// cobaCoba();
// cobaCoba2();
cobaCoba3();
