// 1 Tub sonlarni ajratish

// numbers arrayidan faqat tub sonlarni ajratib olib, ularni yangi array ko‘rinishida qaytaradigan function yozing

const numbers = [12, 7, 23, 4, 11, 18, 5, 29, 10, 3, 16];

const new_numbers = [];

function TubniTop(numbers, new_numbers) {
  for (let i of numbers) {
    if (i <= 1) continue;
    let tubmi = false;
    for (let k = 2; k * k < i; k++) {
      if (i % k === 0) {
        tubmi = false;
      } else {
        tubmi = true;
      }
    }
    if (tubmi) {
      new_numbers.push(i);
    }
  }
  return new_numbers;
}

console.log(TubniTop(numbers, new_numbers));

//===================================================================

// 2 Imtihondan o‘tgan talabalar
// students arrayidan bali 60 yoki undan yuqori bo‘lgan talabalarni ajratib, yangi array qaytaradigan function yozing

// const students = [
//   { id: 1, name: "Ali", score: 75 },
//   { id: 2, name: "Vali", score: 45 },
//   { id: 3, name: "Sardor", score: 92 },
//   { id: 4, name: "Madina", score: 60.6 },
//   { id: 5, name: "Malika", score: 88 },
//   { id: 6, name: "Aziz", score: 52 },
//   { id: 7, name: "Zarina", score: 97 },
//   { id: 8, name: "Jasur", score: 34 },
// ];

// let students_2 = [];

// function StudentFilter(students, students_2) {
//   for (let i of students) {
//     i.score >= 60.0
//       ? students_2.push(i)
//       : "60 balldan yuqori ball olgan o'quchi yo'q";
//   }
//   return students_2;
// }

// console.log(StudentFilter(students, students_2));

//===================================================================

// 3
// Sonlar ko‘paytmasi
// REDUCE / LOOP
// numbers arrayidagi barcha sonlarni bir-biriga ko‘paytirib, yakuniy natijani qaytaradigan function yozing.

// const numbers = [12, 7, 23, 4, 11, 18, 5, 29, 10, 3, 16];
// let sum = 1;
// function NumKup_Hisobla(numbers, sum) {
//   for (let i of numbers) {
//     sum *= i;
//   }
//   return sum;
// }

// console.log(NumKup_Hisobla(numbers, sum));

//======================================================================

// 4
// Omborda kam qolgan mahsulotlar
// FILTER
// products arrayidan ombordagi soni 10 tadan kam bo‘lgan mahsulotlarni tanlab, yangi array qaytaradigan function yozing.

// 💡 Shart: stock < 10. Aynan 10 ta mahsulot qolgan bo‘lsa, uni qo‘shmang.

// const products = [
//   { id: 1, name: "Laptop", price: 8500000, stock: 12 },
//   { id: 2, name: "Mouse", price: 150000, stock: 5 },
//   { id: 3, name: "Keyboard", price: 350000, stock: 8 },
//   { id: 4, name: "Monitor", price: 2200000, stock: 15 },
//   { id: 5, name: "Headphones", price: 450000, stock: 3 },
// ];

// const products_2 = [];

// const KamStockTop = (products, products_2) => {
//   for (let i of products) {
//     if (i.stock < 10) {
//       products_2.push(i);
//     }
//   }
//   return products_2;
// };

// console.log(KamStockTop(products, products_2));

//5
// ID orqali mahsulotni topish
// FIND
// Function bitta id qabul qilsin. U products arrayidan shu ID ga mos mahsulotni topib qaytarsin.

// 💡 Misol: 3 yuborilsa, Keyboard mahsuloti qaytadi. ID topilmasa, undefined qaytishi mumkin.

//const products = [
//   { id: 1, name: "Laptop", price: 8500000, stock: 12 },
//   { id: 2, name: "Mouse", price: 150000, stock: 5 },
//   { id: 3, name: "Keyboard", price: 350000, stock: 8 },
//   { id: 4, name: "Monitor", price: 2200000, stock: 15 },
//   { id: 5, name: "Headphones", price: 450000, stock: 3 },
// ];

// function searchProduct(products, product_id) {
//   let id_top = products.find((id) => id.id == product_id);
//   return id_top.name;
// }

// let product_id = 3;

// console.log(searchProduct(products, product_id));

//=======================================================================

// 6
// Eng yuqori ball olgan talaba
// FIND max_score
// students arrayidan eng katta score qiymatiga ega talabani topib, uning objectini qaytaradigan function yozing.

// 💡 Kutilgan natija: Zarina, chunki uning bali 97 — arraydagi eng yuqori ball.

// const students = [
//   { id: 1, name: "Ali", score: 75 },
//   { id: 2, name: "Vali", score: 45 },
//   { id: 3, name: "Sardor", score: 92 },
//   { id: 4, name: "Madina", score: 60 },
//   { id: 5, name: "Malika", score: 88 },
//   { id: 6, name: "Aziz", score: 52 },
//   { id: 7, name: "Zarina", score: 97 },
//   { id: 8, name: "Jasur", score: 34 },
// ];

// const EngYuqori_ball = function (students) {
//   let max_score = students[0];
//   for (let i of students) {
//     if (i.score > max_score.score) {
//       max_score = i;
//     }
//   }
//   return max_score;
// };
// console.log(EngYuqori_ball(students));

//======================================================================

// 7
// Yangi talaba qo‘shish
// PUSH
// Yangi talaba objectini qabul qilib, uni students arrayiga qo‘shadigan function yozing. Qo‘shilgandan keyin yangilangan arrayni qaytaring.

// 💡 Yangi talaba: { id: 9, name: "Kamola", score: 81 }. Objectda id, name va score bo‘lishi kerak.

// const students = [
//   { id: 1, name: "Ali", score: 75 },
//   { id: 2, name: "Vali", score: 45 },
//   { id: 3, name: "Sardor", score: 92 },
//   { id: 4, name: "Madina", score: 60 },
//   { id: 5, name: "Malika", score: 88 },
//   { id: 6, name: "Aziz", score: 52 },
//   { id: 7, name: "Zarina", score: 97 },
//   { id: 8, name: "Jasur", score: 34 },
// ];

// const students_2 = [{ id: 9, name: "Eshmat", score: 75 }];

// function YangiTalabaQosh(students, students_2) {
//   for (let i of students_2) {
//     if (i.name && i.id && i.score !== undefined) {
//       students.push(students_2);
//     } else if (i.name || i.id || i.score === undefined) {
//       return "Yangi o'quvchi ma'lumotlari yetarli emas";
//     }
//     return students;
//   }
// }

// console.log(YangiTalabaQosh(students, students_2));

//Oxiriga yetmagan tuzatish kerak

//=======================================================================

// 8
// Qimmat mahsulotlarni ajratish
// FILTER
// products arrayidan narxi 500 000 so‘mdan yuqori bo‘lgan mahsulotlarni tanlab, yangi array qaytaradigan function yozing.

// 💡 Shart: price > 500000. Narxi aynan 500 000 so‘m bo‘lgan mahsulot kiritilmaydi.

// const products = [
//   { id: 1, name: "Laptop", price: 8500000, stock: 12 },
//   { id: 2, name: "Mouse", price: 150000, stock: 5 },
//   { id: 3, name: "Keyboard", price: 350000, stock: 8 },
//   { id: 4, name: "Monitor", price: 2200000, stock: 15 },
//   { id: 5, name: "Headphones", price: 450000, stock: 3 },
// ];

// let new_produts = [];

// function QimmatniAjrat(products, new_products) {
//   for (let i of products) {
//     if (i.price > 500000) {
//       new_products.push(i);
//     }
//   }
//   if (new_products.length === 0) {
//     return "500 ming so'mdan yuqori mahsulot mavjud emas";
//   } else {
//     return new_products;
//   }
// }

// console.log(QimmatniAjrat(products, new_produts));

//=======================================================================

// 9
// Har bir talabaning balini oshirish
// MAP
// Har bir talabaning score qiymatiga 10 ball qo‘shib, yangi array qaytaradigan function yozing. Asl students arrayi o‘zgarmasligi kerak.

// 💡 Misol: 75 ball 85 ga, 45 ball esa 55 ga aylanadi. Yangi arraydagi har bir talaba objectini alohida yarating.

// const students = [
//   { id: 1, name: "Ali", score: 75 },
//   { id: 2, name: "Vali", score: 45 },
//   { id: 3, name: "Sardor", score: 92 },
//   { id: 4, name: "Madina", score: 60 },
//   { id: 5, name: "Malika", score: 88 },
//   { id: 6, name: "Aziz", score: 52 },
//   { id: 7, name: "Zarina", score: 97 },
//   { id: 8, name: "Jasur", score: 34 },
// ];

// const BallQosh = (students) => {
//   return students.map((new_students) => ({
//     ...new_students,
//     score: new_students.score + 10,
//   }));
// };

// console.log(BallQosh(students));

//=======================================================================

// 10
// Barcha mahsulotlarning umumiy qiymati
// REDUCE
// Har bir mahsulot uchun narxini ombordagi soniga ko‘paytiring. Keyin barcha mahsulotlar qiymatini qo‘shib, umumiy summani qaytaradigan function yozing.

// 💡 har bir mahsulot uchun price * stock, so‘ng barcha natijalarni jamlang.

// const products = [
//   { id: 1, name: "Laptop", price: 8500000, stock: 12 },
//   { id: 2, name: "Mouse", price: 150000, stock: 5 },
//   { id: 3, name: "Keyboard", price: 350000, stock: 8 },
//   { id: 4, name: "Monitor", price: 2200000, stock: 15 },
//   { id: 5, name: "Headphones", price: 450000, stock: 3 },
// ];

// function Hisobla(products) {
//   let sum = 0;
//   for (let i of products) {
//     sum += i.price * i.stock;
//   }
//   return sum;
// }

// console.log(Hisobla(products));
