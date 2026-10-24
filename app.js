// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let juftlar = [];
// let toqlar = [];

// for (let i of nums) {
//   if (i % 2 == 0) {
//     juftlar.push(i);
//   } else {
//     toqlar.push(i);
//   }
// }

// console.log(`Juftlar: ${juftlar}`);
// console.log(`Toqlar: ${toqlar}`);

//1-daraja: Massiv indekslari, .length va asosiy metodlar (push, pop, includes, indexOf)

// let birinchiVaOxirgi = [10, 20, 30, 40];

// console.log(
//   `Birinchi raqam = ${birinchiVaOxirgi[0]},oxirgi raqam = ${birinchiVaOxirgi[birinchiVaOxirgi.length - 1]}`,
// );

//Elementni qidirish va qo‘shish (includes va push)

// let royxatniYangila = ["olma", "anor", "uzum"];

// const updater = function (mevalar, yangiMeva) {
//   if (!mevalar.includes(yangiMeva)) {
//     mevalar.push(yangiMeva);
//     return mevalar;
//   } else {
//     return "Bu meva mavjud";
//   }
// };

// console.log(updater(royxatniYangila, "banan"));

// 4. Massivlarni birlashtirish va kesish (concat va slice)

// let arr1 = [1, 2];
// let arr2 = [3, 4, 5, 6];

// let arr3 = arr1.concat(arr2);
// console.log(arr3.slice(1, 4));

// 5 Eng katta va eng kichik element farqi (Math.max siz)

// let nums = [12, 1, 25, 37, 19];
// let max = nums[0];
// let min = nums[1];

// for (let i of nums) {
//   if (i > max) {
//     max = i;
//   } else if (i < min) {
//     min = i;
//   }
// }
// console.log(max - min);

// Massivni teskarisiga o‘girish (.reverse() metodisiz)

// let list = ["a", "b", "c", "d"];

// for (let i = list.length; i >= 0; i--) {
//   list.push(list[i]);
// }
// console.log(list);

// let strings = ["olma", "banan", "uzudedm", "anor"];

// const engUzunString = function (strings, max_string) {
//   let max_string = strings[0];
//   for (let i of strings) {
//     if (i.length > max_string.length) {
//       max_string = i;
//     }
//   }
//   return max_string;
// };

// console.log(engUzunString(max_string));

// let nums = [34, 34, 3, 55, 233, 2];

// let max = nums[0];
// let min = nums[1];

// for (let i of nums) {
//   if (i > max) {
//     max = i;
//   } else if (i < min) {
//     min = i;
//   }
// }
// console.log(max, min);

// darsdagi topshiriq 2
// let numbers = ["olma", 34, "banan", 43, "uzudedm", 2, "anor"];
// let sum = 0;
// function NumCal(numbers, sum) {
//   for (let i of numbers) {
//     if (typeof i !== "string") {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(NumCal(numbers, sum));

// darsdagi topshiriq 3

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 8500000,
    stock: 12,
  },
  {
    id: 2,
    name: "Mouse",
    price: 150000,
    stock: 25,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 350000,
    stock: 8,
  },
  {
    id: 4,
    name: "Monitor",
    price: 2200000,
    stock: 0,
  },
  {
    id: 5,
    name: "Headphones",
    price: 450000,
    stock: 17,
  },
];

function priceCall(products) {
  let max = products[0].price;

  for (let i of products) {
    if (i.price > max) {
      max = i.price;
    }
  }
  console.log(max);
}
priceCall(products);
