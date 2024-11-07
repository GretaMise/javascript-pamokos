// Susikurti tris kintamuosius skaiciams saugoti. Pritaikyti salygas:
let a = 5;
let b = 10;
let c = 15;
// 1. Ar pirmas ir antras skaiciai yra lygus?
console.log(a === b);
// 2. Ar antras ir trecias skaiciai yra lygus?
console.log(b === c);
// 3. Ar pirmas skaicius yra didesnis uz antraji?
console.log(a > b);
// 4. Ar antras skaicius yra didesnis uz dviguba treciojo skaiciaus reiksme (trecias skaicius padaugintas is 2)?
console.log(b > c * 2);
// 5. Ar pirmas skaicius yra lyginis (dalinais is 2)?
let lyginis = 2;
if (a % lyginis === 0) {
  console.log(a + ' dalinasi is ' + lyginis);
} else {
  console.log(a + ' nesidalina is ' + lyginis);
}
// 6. Ar antras skaicius yra nelyginis (ar nesidalina is 2)?
let nelyginis = 2;
if (b % nelyginis !== 0) {
  console.log(true);
} else {
  console.log(false);
}
// 7. Ar trecias skaicius yra teigiamas (didesnis uz 0)?
console.log(c > 0);
// 8. Ar pirmas skaicius yra neigiamas (mazesnis uz 0)?
console.log(a < 0);
// 9. Ar antras skaicius dalinasi is 4?
let dalinasi = 4;
if (b % dalinasi === 0) {
  console.log(true + ' dalinasi');
} else {
  console.log(false + ' nesidalina');
}
// 10. Ar trecias skaicius dalinasi is 8?
let tdalinasi = 8;
if (c % tdalinasi === 0) {
  console.log(true + ' dalinasi');
} else {
  console.log(false + ' nesidalina');
}

// 11. Kintamasis vartotojo amziui saugoti. Patikrinti, ar amzius yra didesnis ar lygus 18. Jei taip- 'jus gaite balsuoti'

let age = 18;
let legalStatus = age >= 18 ? 'Jus galite balsuoti' : 'negalite balsuoti';

console.log(legalStatus);

// 12. Keli kintamieji saugoti pazymiams. Rasti siu pazymiu vidurki. Patikrinti, ar vidurkis teigiamas (daugiau arba lygu 5), jei teigiamas- 'vidurkis teigiamas'.
let paz1 = 7;
let paz2 = 9;
let paz3 = 3;
let paz4 = 5;

let vidurkis =
  (paz1 + paz2 + paz3 + paz4) / 4 >= 5
    ? 'Vidurkis teigiamas'
    : 'Vidurkis neigiamas';

console.log(vidurkis);

// 13. Susikurti skaiciaus kintamaji. Atlikti siuos veiksmus:
let kintamasis = 9;
// Jei dalinasi is 5 - isvesti sio skaiciaus daugybos lentele nuo 1 iki 5.
// Jei skaicius lyginis, tuomet isvesti si skaiciu, jo kvadrata ir ji padalinta is 2.
// Jei skaicius nesidalina is 7, tai sukurti antraji kintamaji, isvesti siu dvieju skaiciu suma, skirtuma, sandauga, dalmeni.
let penki = 5;

if (kintamasis % penki === 0) {
  console.log('1x9=5, 2x9=18, 3x9=27, 4x9=36, 5x9=45');
} else {
  console.log('Skaicius (9) nesidalina is 5');
}

if (penki % 2 === 0) {
  console.log(penki + ' lyginis, zr. toliau');
} else {
  console.log(penki + ' yra nelyginis ');
}

if (penki % 7 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

// suma, skirtuma, sandauga, dalmeni.
let antrasKint = 2;
// Suma
console.log(penki + antrasKint);
// Skirtumas
console.log(penki - antrasKint);
// Sandauga
console.log(penki * antrasKint);
// Dalmuo
let dalmuo = penki / antrasKint;

console.log(dalmuo);

// 14. trys skaiciu kintamieji. Patikrinti salygas, naudojant else if
let x = 4;
let y = 6;
let z = 8;
// 14.1 Ar pirmas > antra?
if (x > y) {
  console.log('Pirmasis skaicius didesnis uz antraji');
} else if (x < y) {
  console.log('Pirmasis skaicius nera didesnis uz antraji');
}
// 14.2 Ar antras > trecia?
if (y > z) {
  console.log('Antrasis skaicius didesnis uz treciaji');
} else if (y < z) {
  console.log('Antrasis skaicius nera didesnis uz treciaji');
}
// 14.3 Ar trecias > pirma?
if (z > x) {
  console.log('Treciasis skaicius didesnis uz pirmaji');
} else if (z < x) {
  console.log('Treciasis skaicius nera didesnis uz pirmaji');
}
// 14.4 Ar pirmi du yra lygus?
if (x === y) {
  console.log('Pirmi du skaiciai lygus');
} else if (x !== y) {
  console.log('Pirmi du skaiciai nera lygus');
}
// 14.5 Ar paskutiniai du yra lygus?
if (y === z) {
  console.log('Pirmi du skaiciai lygus');
} else if (y !== z) {
  console.log('Pirmi du skaiciai nera lygus');
}
// 14.6 Ar pirmas = 0?
if (x === 0) {
  console.log('Pirmas skaicius lygus 0');
} else if (x !== 0) {
  console.log('Pirmas skaicius nera lygus 0');
}
// 14.7 Ar antras skaicius neigiamas?
if (y < 0) {
  console.log('ANtrasis skaicius yra neigiamas');
} else if (y > 0) {
  console.log('ANtrasis skaicius nera neigiamas');
}
// 14.8 Ar trecias skaicius teigiamas?
if (z > 0) {
  console.log('Treciasis skaicius yra teigiamas');
} else if (z < 0) {
  console.log('Treciasis skaicius nera teigiamas');
}

// 15. Susikurti kintamaji egzamino pazymiui saugoti (0-10). Naudojant else if dalis patikrinti sias salygas ir isvesti atitinkama teksta:
// jei 10 - isvesti 'puiku'
//jei = ar didesnis nei 9 - isvesti 'labai gerai'
//jei = ar didesnis nei  7 - isvesti 'gerai'
//jei = ar didesnis nei 5 - isvesti 'patenkinamai'
//jei < 5 - isvesti 'egzaminas neislaikytas'

// const p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let p = 3;

if (p === 10) {
  console.log('Puiku');
} else if (p >= 9) {
  console.log('Labai gerai');
} else if (p >= 7) {
  console.log('Gerai');
} else if (p >= 5) {
  console.log('Patenkinamai');
} else if (p < 5) {
  console.log('Egzaminas neislaikytas');
}

//16. Sukurti skaiciui saugoti skirta kintamaji, Tikrinti naudojant visas if salygos dalis:
//1. Ar skaicius lyginis?
//2. Ar skaicius dalinasi is 5?
//3. Ar skaicius lygus 3?
//4. Jei nieko nepavyko rasti, isvesti klados pranersima.
let sixteenth = 17;

if (sixteenth % 2 === 0) {
  console.log('Lyginis');
} else if (sixteenth % 5 === 0) {
  console.log('Dalinasi is 5');
} else if (sixteenth === 3) {
  console.log('Skaicius lygus 3');
} else {
  console.log('KLAIDA. Nieko nepavyko rasti');
}

//17. Sukurti tris skaicius. Tikrinti naudojant visas if salygos dalis
//1. Ar pirmi du skaiciai lygus?
//2. Ar primas is trecias skaiciai lygus?
//3. Ar trecias skaicius idedsnis uz pirma?
//4. Ar antras skaicius lygus dvigubai trecio skaiciaus reikmei?
//5. Ar pirmas skaicius dalinasi is 3?
//6. Jei nieko nepavyko rasti, isvesti klaidos pranesima.

let q = 256;
let w = 152;
let e = 122;

if (q === w) {
  console.log('Pirmi du skaiciai lygus');
} else if (q === e) {
  console.log('Pirmas ir trecias skaiciai lygus');
} else if (e > q) {
  console.log('Trecias skaicius didesnis uz pirma');
} else if (w === e * 2) {
  console.log('Antras skaicius lygus dvigubai trecio skaiciaus reiksmei');
} else if (q % 3 === 0) {
  console.log('Pirmas skaicius dalinasi is 3');
} else {
  console.log('KLAIDA. Nieko nepavyko rasti');
}
