// Duomenu tipai

// Number
// Reprezentuoja sveikuosius ir slankiuosius skaicius
let x = 42;
let y = 3.14;

// String
// Naudojamas tekstui reprezentuoti. Apibreziamas naudojant viengubas arba dvigubas kabutes arba backticks ` ` .
let vardas = 'Jonas';
let pavarde = 'Jonaitis';
let vardasPavarde = '${vardas} ${pavarde}';

// Boolean
// Loginis duomenu tipas, kuris gali buti tik true arba false.

let isPasswordValid = true;
let isEmailVaid = false;

// Undefined
// Kintamasis, kuriam nebuvo priskirta jokia reiksme

let akiuSpalva;

// Null
// Reiksme, kuri reiskia, kad kintamasis yra tuscias (dar nezinoma reiksme)
let automobilioMarke = null;

// Object
// Objektas,kuris gali saugoti daug informacijos.

const zmogus = {
  vardas: '',
  pavarde: '',
  amzius: '',
};

// Array (masyvas)
// Masyvas, kuris saugo daug informacijos.

const masyvas = [vardas, pavarde, akiuSpalva];

// PAtikrina duomenu tipa
console.log(typeof vardas);
