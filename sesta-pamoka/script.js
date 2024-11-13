// Loginiai operatoriai &&, ||, !

// && - ir
// false && false = false
// false && true = false
// true && false = false
//  true && true = true
//  turi atitikti abi salygas, kad butu true

const a = 0;
const b = 6;

if (a > 0 && b > 0) {
  console.log('a ir b yra teigiami skaiciai');
} else {
  console.log('a arba b nera teigiamas skaicius');
}

// || - arba
// false || false = false
// false || true = true
// true || false = false
// true || true = true
// turi atitikti bent viena salyga

const c = 1;
const d = false;

if (c >= 1 || d === true) {
  console.log('salyga yra teisinga');
} else {
  console.log('Salyga yra neteisinga');
}

//  ! - ne
// !true = false;
// !false = true;

const isLoggedIn = false;

if (!isLoggedIn) {
  console.log('Tu esi neprisijunges');
} else {
  console.log('Tu esi prisijunges');
}

//  Pavyzdukas su viskuo!!!!!

const arTuriBilieta = false;
const yraVipNarys = true;

if (arTuriBilieta) {
  console.log('Uzeikite i koncerta!');
} else if (!arTuriBilieta && yraVipNarys) {
  console.log('Tu neturi bilieto, bet esi VIP narys tai uzeik i koncerta!');
} else if (!arTuriBilieta && !yraVipNarys) {
  console.log('Tu neturi nei bilieto nei esi vip narys.');
}

// Uzduoteles

// 12. Susikurti 3 skaicius. Surasti, kuris is siu skaiciu yra didziausias.

// Declare three variables
let q = 15;
let w = 25;
let e = 10;

let largest;

if (q > w && q > e) {
  largest = q;
} else if (w > q && w > e) {
  largest = w;
} else {
  largest = e;
}
console.log('The largest number is:', largest);

// 13. Susikurti 3 skaicius. Surasti, kuris is siu skaiciu yra maziausias.

let t = 15;
let y = 5;
let u = 10;

let lowest;

if (t < y && t < u) {
  lowest = t;
} else if (y < t && y < u) {
  lowest = y;
} else {
  lowest = u;
}

console.log('The lowest number is:', lowest);

// 14. Susikurti triju egzaminu rezultatu kintamuosius. Surasti pazymiu vidurki. Atlikti siuos patikrinimus:
// 14.1 ar gautas vidurkis yra [8-10];
// 14.2 Ar gautas vidurkis [5-8];
// 14.3 Ar gautas vidurkis yra <5.

let f = 6;
let g = 4;
let h = 8;

let average = (f + g + h) / 3;

console.log('Vidurkis yra:', average);

if (average >= 8 && average <= 10) {
  console.log('Vidurkis tarp [8-10].');
} else if (average >= 5 && average < 8) {
  console.log('Vidurkis tarp [5-8].');
} else if (average < 5) {
  console.log('Vidurkis mazesnis uz 5.');
} else {
  console.log('N/A.');
}

// 15. Susikurti du skaicius. Patikrinti ( naudojant 4 atskirus if'us):

let v = 6;
let n = 9;

// 15.1 ar pirmas skaicius yra didesnis uz antraji arba yra lygus 0.
// 15.2 ar antras skaicius yra didesnis uz pirmaji arba lygus 5;
// 15.3 ar pirmas skaicius yra didesnis uz antraji ir yra lygus 20;
// 15.4 ar antras skaicius yra didesnis uz pirmaji ir yra mazesnis uz 100.
