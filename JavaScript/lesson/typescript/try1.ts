interface ObjType {
  name: string;
  age: number;
  job: string;
  is_married: boolean;
  address: {
    city: string;
    country: string;
  };
  hobbies: string[];
  getRandomNumber: () => number;
}

const objVar: ObjType = {
  name: "Thomas Shelby",
  age: 36,
  job: "Businessman",
  is_married: true,
  address: {
    city: "Birmingham",
    country: "United Kingdom",
  },
  hobbies: ["Ride a horse", "Gambling"],
  getRandomNumber: () => {
    const num = Math.random();
    return num;
  },
};

type DataKendaraan = {
  title: string;
  deskripsi: string;
  harga: number;
  lokasi: string;
  sold?: boolean; // ? artinya opsional
};

let jual_kendaraan: DataKendaraan[] = [
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
  {
    title: "Beat emak-emak",
    deskripsi: "Minus gores karena keseringan belok dadakan",
    harga: 50,
    lokasi: "Indonesia",
  },
];

function addNewProperty(array: DataKendaraan[]) {
  array.forEach((element, index) => {
    element.sold = false;
  });
}

addNewProperty(jual_kendaraan);
jual_kendaraan[1].sold = true;
// console.log(jual_kendaraan);

function funcTest(
  score: number,
  name: string,
  class_name?: string, // optional parameter
  waktu: string = "Today" // default parameter
) {
  if (class_name) {
    return `${name} from ${class_name} class got ${score} ${waktu}`;
  } else {
    return `${name} got ${score} ${waktu}`;
  }
}

const funcTest2 = (
  score: number,
  name: string,
  class_name?: string,
  waktu: string = "Today"
) => {
  if (class_name) {
    return `${name} from ${class_name} class got ${score} ${waktu}`;
  } else {
    return `${name} got ${score} ${waktu}`;
  }
};

console.log(funcTest(90, "Dennis", "Astronomy"));
