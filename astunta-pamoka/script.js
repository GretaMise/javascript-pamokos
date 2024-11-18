//  Switch statements - palyginimo operatorius
// Leidzia palyginti kintamaji su daugybe skirtingu reiksmiu

const day = 6;

switch (day) {
  case 1:
    console.log('Pirmadienis');
    break;
  case 2:
    console.log('Antradienis');
    break;
  case 3:
    console.log('Treciadienis');
    break;
  case 4:
    console.log('Ketvirtadienis');
    break;
  case 5:
    console.log('Penktadienis');
    break;
  case 6:
    console.log('Sestadienis');
    break;
  default:
    console.log('Tokios dienos nera');
}

let skaicius1 = 5;
let skaicius2 = 10;
let veiksmas = '*';

switch (veiksmas) {
  case '+':
    console.log(skaicius1 + skaicius2);
    break;
  case '-':
    console.log(skaicius1 - skaicius2);
    break;
  case '*':
    console.log(skaicius1 * skaicius2);
    break;
  default:
    console.log('Nezinomas veiksmas');
}

// Uzduotys

// 1. Susikurti kintamaji pasirinkimui saugoti, i ji irasyti norima reiksme.
// Ar pasirinkimas lygus 1? Jei taip, isvesti , kad vartotojas laimejo vandens.
// Ar pasirinkimas lygus 2? Jei taip, isvesti , kad vartotojas laimejo limonada.
// Ar pasirinkimas lygus 3? Jei taip, isvesti , kad vartotojas laimejo arbata.
// Ar pasirinkimas lygus 4? Jei taip, isvesti , kad vartotojas laimejo kava.
// Jei neegzistuoja, isvesti klaidos pranesima
const pasirinkimas = 3;

switch (pasirinkimas) {
  case 1:
    console.log('Laimejote vandens');
    break;
  case 2:
    console.log('Laimejote limonada');
    break;
  case 3:
    console.log('Laimejote arbata');
    break;
  case 4:
    console.log('Laimejote kava');
    break;
  default:
    console.log('Nieko nelaimejote :(');
}

// 2. Susikurti kintamuosius trims skaiciams saugoti ir priskirti jiems reiksmes. Tikrinti pirma skaiciu:
// 2.1 Ar pirmas skaicius lygus 1? Jei taip, isvesti visu triju skaiciu suma.
// 2.2 Ar pirmas skaicius lygus 2? Jei taip, isvesti antro ir trecio skaiciu sandauga.
// 2.3 Ar pirmas skaicius lygus 3? Jei taip, isvesti pirmo skaiciaus kvadrata.
// 2.4 Jei nei vienas variantas netinka, isvesti klaidos pranesima.

let reiksme1 = 1;
let reiksme2 = 2;
let reiksme3 = 3;

let reiksmeO = 3;
// let veiksmas = '*';

switch (reiksmeO) {
  case 1:
    console.log(reiksme1 + reiksme2 + reiksme3);
    break;
  case 2:
    console.log(reiksme2 * reiksme3);
    break;
  case 3:
    console.log(reiksme1 ** 2);
    break;
  default:
    console.log('Nezinomas veiksmas');
}

// 3. Susikurti kintamaji klaidos kodui saugoti ir priskirti koki nors klaidos koda. Tikrinti koks tai kodas (bent 3 skirtingus variantus), ties kiekvienu is jus isvesti skirtinga teksta, nurodanti, kad bus atliekami skirtingi veiksmai.

let errorCode = 222;

switch (errorCode) {
  case 123:
    console.log('Error 123: Not Found. Please check the URL and try again.');
    break;
  case 222:
    console.log('Error 222: Internal Server Error. Please try again later.');
    break;
  case 564:
    console.log(
      'Error 564: Forbidden. You do not have permission to access this resource.'
    );
    break;
  default:
    console.log('Unknown error code. Please contact support.');
    break;
}

// Loops  - ciklai

//  For - sis ciklas naudojamas, kai yra zinoma kiek kartu jis yra bus naudojamas
//  for (kintamasis; salyga; operacija) {kodas}

// ● kintamasis - ciklo darbui reikalingas kintamasis,
// kuris bus sunaikintas ciklui baigus darbą,
// dažniausiai naudojamas norint suvaldyti kiek
// kartų ciklas turi būti vykdomas.

// ● sąlyga - ciklas bus vykdomas kol sąlyga bus
// teisinga (grąžins true), sąlyga apsirašo tokiu
// pačiu principu kaip apsirašydavo patikrinimo
// sąlygoje if.

// ● operacija - kas bus daroma kiekvienos ciklo iteracijos metu, dažniausiai - didinamas kintamasis.

// ● kodas - kodas, kuris bus vykdomas jei sąlyga teisinga.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 1; i <= 5; i += 2) {
  console.log('Skaicius: ' + i);
}

// nelyginiai skaiciai

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log('Nelyginis skaicius: ' + i);
  } else {
    console.log('Lyginis skaicius: ' + i);
  }
}

// Switch

for (let i = 1; i <= 5; i++) {
  switch (i) {
    case 1:
      console.log('Vienas');
      break;
    case 2:
      console.log('Du');
      break;
    case 3:
      console.log('Trys');
      break;
    case 4:
      console.log('Keturi');
      break;
    case 5:
      console.log('Penki');
      break;
  }
}

// Uzduoteles for.

// 1. parasyti for, kuris isvestu kiekviena skaiciu pradedant nuo 0 ir baigiant 10.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// 2. parasyti for, kuris isvestu kas antra skaiciu pradedant nuo 0 ir baigiant 15.
for (let i = 0; i <= 15; i += 2) {
  console.log(i);
}
// 3. parasyti for, kuris isvestu kas trecia skaiciu pradedant nuo 1 ir baigiant 20. Kiekviena skaiciu apskliausti lauztiniais skliaustais pvz. [1][4][7]..
for (let i = 1; i <= 20; i += 3) {
  console.log([i]);
}
// arba
for (let i = 1; i <= 20; i += 3) {
  console.log(`[${i}]`);
}

// 4. parasyti for, kuris eitu pro kiekviena skaiciu pradedant nuo 1 ir baigiant 20. Jame aprasyti if salyga, kuri patikrintu ar dabartinis skaicius dalinasi is 4, jei taip, tai si skaiciu isvesti.
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}

// 5. Susikurti kintamuosius reziu pradziai ir pabaigai nusakyti. Patikrinti, kad tai butu validu (pradzia turi buti ne mazesne nei pabaiga). Jei reziai tinkami, tuomet vykdyti for, kuris atskirose eilutese isvestu kiekviena skaiciu is tu reziu, bei atskiriant tarpu - tu skaiciu kvadratus.
let start = 3;
let end = 8;

if (start < end) {
  for (let i = start; i <= end; i++) {
    console.log(`${i} ${i ** 2}`);
  }
} else {
  console.log(`kodas nevykdomas, patikrinti kintamuosius`);
}

// 6. Susikurti kintamuosius reziu pradziai ir pabaigai nusakyti. Patikrinti, kad tai butu validu (pradzia turi buti mazesne nei pabaiga). Jei reziai tinkami, tuomet vykdyti for, kuris is duotu skaiciu isvestu visus nelyginius skaicius arba tuos, kurie dalinasi is 8.

let pradzia = 3;
let pabaiga = 8;

if (start < end) {
  for (let i = pradzia; i <= pabaiga; i++) {
    if (i % 2 === 1 || i % 8 === 0) {
      console.log(i);
    }
  }
} else {
  console.log(`kodas nevykdomas, patikrinti kintamuosius`);
}
// 7. Be daugybos veiksmo programoje, sudauginti du skaicius

let num1 = 5;
let num2 = 3;
let result = 0;

for (let i = 0; i < Math.abs(num2); i++) {
  result += num1;
}

console.log(result);
