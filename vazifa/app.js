// 1 Tub sonlarni ajratish

// numbers arrayidan faqat tub sonlarni ajratib olib, ularni yangi array ko‘rinishida qaytaradigan function yozing

// const numbers = [12, 7, 23, 4, 11, 18, 5, 29, 10, 3, 16];

// function TubniTop(numbers) {
//   const new_numbers = [];
//   for (const i of numbers) {
//     if (i <= 1) continue;
//     let tubmi = true;
//     for (let k = 2; k * k <= i; k++) {
//       if (i % k === 0) {
//         tubmi = false;
//         break;
//       }
//     }
//     if (tubmi) {
//       new_numbers.push(i);
//     }
//   }
//   return new_numbers;
// }

// console.log(TubniTop(numbers));

//===================================================================

// 2 Imtihondan o‘tgan talabalar
// students arrayidan bali 60 yoki undan yuqori bo‘lgan talabalarni ajratib, yangi array qaytaradigan function yozing

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

// function studentFilter(students) {
//   return students.filter((student) => student.score >= 60);
// }

// console.log(studentFilter(students));

//===================================================================

// 3
// Sonlar ko‘paytmasi
// REDUCE / LOOP
// numbers arrayidagi barcha sonlarni bir-biriga ko‘paytirib, yakuniy natijani qaytaradigan function yozing.

// const numbers = [12, 7, 23, 4, 11, 18, 5, 29, 10, 3, 16];
// function NumKup_Hisobla(numbers) {
//   return numbers.reduce((kup, i) => kup * i, 1);
// }

// console.log(NumKup_Hisobla(numbers));

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

// const kamStockTop = (products) => {
//   return products.filter((dona) => dona.stock < 10);
// };

// console.log(kamStockTop(products));

//5
// ID orqali mahsulotni topish
// FIND
// Function bitta id qabul qilsin. U products arrayidan shu ID ga mos mahsulotni topib qaytarsin.

// 💡 Misol: 3 yuborilsa, Keyboard mahsuloti qaytadi. ID topilmasa, undefined qaytishi mumkin.

// const products = [
//   { id: 1, name: "Laptop", price: 8500000, stock: 12 },
//   { id: 2, name: "Mouse", price: 150000, stock: 5 },
//   { id: 3, name: "Keyboard", price: 350000, stock: 8 },
//   { id: 4, name: "Monitor", price: 2200000, stock: 15 },
//   { id: 5, name: "Headphones", price: 450000, stock: 3 },
// ];

// function searchProduct(products, id) {
//   return products.find((product_id) => product_id.id === id);
// }
// let id = 4;

// console.log(searchProduct(products, id));

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

const students = [
  { id: 1, name: "Ali", score: 75 },
  { id: 2, name: "Vali", score: 45 },
  { id: 3, name: "Sardor", score: 92 },
  { id: 4, name: "Madina", score: 60 },
  { id: 5, name: "Malika", score: 88 },
  { id: 6, name: "Aziz", score: 52 },
  { id: 7, name: "Zarina", score: 97 },
  { id: 8, name: "Jasur", score: 34 },
];

const yangi_talaba = { id: 9, name: "Kamola", score: 81 };

function talabaQosh(students, yangi_talaba) {
  let mavjudTalaba = students.find((student) => student.id == yangi_talaba.id);

  if (mavjudTalaba === undefined) {
    if (
      yangi_talaba.name &&
      yangi_talaba.id &&
      yangi_talaba.score !== undefined &&
      yangi_talaba.id !== 0
    ) {
      students.push(yangi_talaba);
      return students;
    } else if (yangi_talaba.id === 0) {
      return "id 0 bo'lmasligi kerak";
    } else {
      return "Yangi o'quvchi ma'lumotlari yetarli emas";
    }
  } else {
    return "Bunday IDga ega o'quvchi mavjud";
  }
}

console.log(talabaQosh(students, yangi_talaba));

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

// function qimmatniAjrat(products) {
//   return products.filter((products) => products.price > 500000);
// }

// console.log(qimmatniAjrat(products));

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
// Har bir mahsulot uchun narxini ombordagi soniga ko‘paytiring. Keyin barcha mahsulotlar qiymatini qo‘shib, umumiy kupaytmamani qaytaradigan function yozing.

// 💡 har bir mahsulot uchun price * stock, so‘ng barcha natijalarni jamlang.

// const products = [
//   { id: 1, name: "Laptop", price: 8500000, stock: 12 },
//   { id: 2, name: "Mouse", price: 150000, stock: 5 },
//   { id: 3, name: "Keyboard", price: 350000, stock: 8 },
//   { id: 4, name: "Monitor", price: 2200000, stock: 15 },
//   { id: 5, name: "Headphones", price: 450000, stock: 3 },
// ];

// function Hisobla(products) {
//   let hisobla = products.reduce((sum, i) => sum + i.stock * i.price, 0);
//   return hisobla;
// }

// console.log(Hisobla(products));
