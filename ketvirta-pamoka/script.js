const a = 1;
const b = 2;

if (a === b) {
  console.log('a yra lygus b');
} else {
  console.log('a nera lygus b');
}

// Palyginimo operatoriai (comparison operators)

//  lygu, == palyginimas su konvertavimu (konvertuoja tipus, o ne reiksmes)

console.log(2 == 2); // true

console.log('2' == 2); // true

console.log(2 == 1); // false

console.log(-3 == false); // false

// === Palyginimas be convertavimo (strict comparison)

// turime lyginti ne tik reiksmes, bet ir ju tipus

console.log(2 === 2); // true

console.log(2 === 1); // false

console.log(2 === '2'); // false

console.log('Greta' === 'greta'); // false

// != nera lygu
// Su vienu = konvertuoja tipus

console.log(2 != 2); //false

console.log(2 != 4); //true

console.log(2 != '2'); //false

// !== nera lygu be konvertavimo

console.log(2 !== 2); //false

console.log(2 !== '2'); //true

// > daugiau

console.log(2 > 1); // true

console.log(2 > 3); // false

// >= daugiau arba lygu

console.log(2 >= 2); //true

console.log(4 >= 6); // false

//  < maziau

console.log(2 < 3); // true

console.log(2 < 2); // false

// <= maziau arba lygu

console.log(2 <= 2); // true

console.log(2 <= 1); // false

//  pavyzdukas

const metai = 40;

let category;

if (metai < 4) {
  console.log('kudikis');
} else if (metai >= 4 && metai <= 6) {
  console.log('vakas');
} else if (metai >= 40) {
  console.log('suauges');
}
