/*
Callback -> sebuah function yang dipanggil "setelah" melakukan sebuah proses, dalam kata lain dipanggil setelah sebuah proses tersebut telah dijalankan.
*/

const buyer = (message: string, harga: number) => {
  console.log("Pesan martabak dong? " + message + ": " + harga);
};

const buyer2 = (message: string, harga: number) => {
  console.log("Pesan martabak dong!!!! " + message + ": " + harga);
};

const seller = (callback: (message: string, harga: number) => void) => {
  console.log("Pesan martabak dong? ... (wait sedang di masak)");
  setTimeout(() => {
    callback("Ok, martabak sudah selesai kakak", 10000); // hanya memanggil callback yang ditulis sebagai parameter
  }, 5000);
};

seller(buyer);
seller(buyer2);
