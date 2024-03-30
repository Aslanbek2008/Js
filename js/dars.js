// var bu js kalit so'zi
// var bu = "buga"

// =====================================
// Naming Conventions

// camelCase
// var userName = "lorem";

// snake_case
// var user_name = "Lorem"

// PaskalCase
// var UserName = "Lorem"

// kebab-cas

// var kebab-cas = "Not Allowed in JS"

// ====================================
// DataTypes

// String
// var text = "dskjnvlsjkvbsdvbkbavfjkbfjkvdbvkvbvdbfbfdb";

// console.log(typeof text);

// Numbers

// var number = 3525232423242423

// console.log(number);

// Object

// var Objec = {
//   id:0,
//   age:22,
//   Name: "Buronbek",
//   User: "Bo'riyev"
// }

// console.log(Objec.Name);

// Null 

// var list = null

// console.log(list);

// Undefined

// console.log(list);

// var list = "list"

// Boolean

// var list = true;
// var list = false;

// console.log(typeof list);

// Symbol
// var list  = Symbol("lorem");

// console.log(list);

// var item = BigInt(437685345635348553453687567345674)

// console.log(item);





// ==============================================÷


// var UserName = prompt("ismiz yozing...");
// var UserFamilya = prompt("Familyaiz yozing...");
// var UserAge = prompt("Yoshiz yozing...");
// var UserCar = prompt("Qanaqa moshinga qiziqasiz...");
// var UserHome = prompt("Qanaqa uyga qiziqasiz...");

// var javob = [
//   "ismiz:"+ " " + UserName + "\n" +
//   "Familyaiz:"+ " " + UserFamilya + "\n" +
//   "Yoshiz:"+ " " + UserAge + "\n" +
//   "moshin:"+ " " + UserCar + "\n" +
//   "Uy:"+ " " + UserHome + "\n" 
// ]


// alert(javob)


// =================================================

// 3-dars 

// var UserName = prompt("Ism yozing...");
// Template literal.
// var javob = `Assalomu alaykum ${UserName} yaxshimsiz`;
// var javob = "Assalomu alaykum ${UserName} yaxshimsiz"

// console.log(javob);

// var a = 12
// var b = 13

// console.log(a + b);

// var a = "12"
// var b = 11

// console.log(a - b);

// var a = 12
// var b = 11

// console.log(a * b);

// var a = 12
// var b = 2

// console.log(a / b);

// var a = 2
// var b = 2

// console.log(a ** b);

// var a = 10
// var b = 3

// console.log(a % b);

// var a = 1

// console.log(a++);
// console.log(a);

// console.log(a--);
// console.log(a);

// var List = document.querySelector(".item");
// var a = Number(prompt("son yozing..."));
// var b = Number(prompt("son yozing..."));
// var javob = a + b;
// List.textContent = javob;

// ======================================


// var Numbers = 12.9

// console.log(Math.floor(Numbers));

// var Numbers = 12.1

// console.log(Math.ceil(Numbers));

// var Numbers = 12.4

// console.log(Math.round(Numbers));

// console.log(Math.round(Math.random() * 100067854));

// var Numbers = 12;
// Numbers = 24;
// Numbers = 63 + 3

// console.log(Numbers);

// var Numbers = 213456.325567
// console.log(Numbers.toFixed(1));

// var Ozodbek = 14;
// var Mahmudjon = 14;

// if(Ozodbek = Mahmudjon){
//   console.log("Ha");
// }else {
//   console.log("Yo'q");
// }

// =================================

// Ozozdbek
// var IELTSO = 5.5;
// var MATHO = 67;
// var Tanks = false;

// // Unverstitng kirish ball
// var IELTSU = 5.5;
// var MATHU = 68;
// var Unverst = true

// if (IELTSO >= IELTSU && MATHO >= MATHU) {
//   console.log("Tabriklaymiz Ozodbek ");
// } else if (IELTSO >= IELTSU && Tanks == true) {
//   console.log("Ozodbekning tanishi bor mazza");
// } else if (Unverst == true) {
//   console.log("Pul bor joyda bilim kerak emas");
// } else {
//   console.log("Super Muborak bo'lsin");
// }


// ================================================

// var.1
// var UserNumbers = 12;
// var UserAge = 13;

// if(UserNumbers >= UserAge){
//   console.log("Ha katta");
// }else {
//   console.log("Yo'q kichkina");
// }

// // var.1.1
// var UserNumbers = 12;
// var UserAge = 13;
// var UserTrue = 12;

// if(UserNumbers > UserAge && UserNumbers > UserTrue) {
//   console.log("Ha Katta");
// }else {
//   console.log("Yo'q kichkina");
// }

// // var.1.2
// var UserNumbers = 12;
// var UserAge = 30;
// var UserTrue = 12;

// if(UserNumbers > UserAge || UserNumbers >= UserTrue) {
//   console.log("Ha Katta");
// }else {
//   console.log("Yo'q kichkina");
// }

// // var.1.3
// var UserNumbers = "12";
// var UserAge = 30;
// var UserTrue = "12";

// if(UserNumbers === UserTrue) {
//   console.log("ha");
// }else {
//   console.log("yo'q");
// }

// // var.1.4
// var UserNumbers = 12;
// var UserAge = 30;
// var UserTrue = 13;

// if(UserNumbers !== UserTrue && true == true) {
//   console.log("ha");
// }else {
//   console.log("yo'q");
// }

// =====================================================
// Uchqunbek to'ylar muborak bo'lsin
// var text = document.querySelector('.item')

// var sevgi = false;
// var uydagilar_rozimi = true;
// var kuyov_age = 21;
// var kelin_age = 20;
// var kelinning_xolasi = true;
// var kuyovning__xolasi = false;
// var ammmalar = true


// if (kuyov_age >= kelin_age && sevgi === uydagilar_rozimi) {
//     text.textContent = "To'ylar muborak";
// } else if (uydagilar_rozimi === kelinning_xolasi && kelinning_xolasi === kuyovning__xolasi) {
//   text.textContent = "Yana to'ylar muborak";
// } else if (uydagilar_rozimi !== ammmalar && kelinning_xolasi == ammmalar) {
//   text.textContent = "Ammalar biladida";
// }else {
//   text.textContent = "Uchqunbek Rassiyaga kettadi";
// }


// 6-dars uy ishi bajarildi. 

// var elHeading = document.querySelector('.item')
// var dollor = Number(30);
// var yevro = Number(30);
// var Pullar = dollor + yevro;

// console.log(Pullar);

// var chekqogoz = Number(prompt("Pulingizni xisoblang"));

// if(chekqogoz > Pullar) {
//   elHeading.textContent = "Alisherjon Mazza qil puling vip ekan"
// }else if (chekqogoz >= Pullar) {
//   elHeading.textContent = "Alisher pul kam hamma narsa olaman deb janjal qilma"
// }else {
//   elHeading.textContent = "Alisherjon jon Alisher oziroq ishla"
// }

