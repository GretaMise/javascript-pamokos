let skaicius = 1;
while (skaicius <= 20) {
  console.log(skaicius);
  skaicius++;
}

// isvesti nuo 1 iki 50. prie lyginiu - lyginis, prie nelyginiu-  nelyginis.

let number = 1;

while (number <= 50) {
  if (number % 2 === 0) {
    console.log(`${number} lyginis`);
  } else {
    console.log(`${number} nelyginis`);
  }
  number++;
}

// Skaiciai nuo 25 iki 50. Jei dalinasi is 3- isvesti dalinasi.
let numbers = 25;

while (numbers <= 50) {
  if (numbers % 3 === 0) {
    console.log(`Skaicius ${numbers} dalinasi is 3`);
  }
  numbers++;
}

// isvedineti visus skaicius nuo 1 iki kol pasitaikys skaicius, kuris dalinasi is 3 ir 5.

let skaiciukai = 1;

while (true) {
  console.log(skaiciukai);
  if (skaiciukai % 3 === 0 && skaiciukai % 5 === 0) {
    break;
  }
  skaiciukai++;
}

// is skaiciu nuo 1 iki 100 raskite visu lyginiu skaiciu suma

let sum = 0;
let skc = 1;

while (skc <= 100) {
  if (skc % 2 === 0) {
    sum += skc;
  }
  skc++;
}
console.log(`Suma:`, sum);

// pavyzdi pakeisti taip, kad toje pacioje eiluteje isvestu ne tik skaiciu, bet ir jo kvadrata:

let nmb = 1;

while (nmb < 5) {
  console.log(nmb, `jo kvadratas ${nmb ** 2}`);
  nmb++;
}

// Isvesti atsitiktini kieki atsitiktiniu skaiciu:

// Function to generate a random integer between min and max (inclusive)

let kiekis = Math.floor(Math.random() * 10) + 1;
while (kiekis > 0) {
  let skaiciuss = Math.floor(Math.random() * 100);
  console.log(skaiciuss);
  kiekis--;
}

// isvesti atsitiktini kieki atsitiktiniu skaiciu. Rasti siu skaiciu suma:
// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Generate a random quantity of random numbers
let atsitiktinis = getRandomInt(1, 10); // Random quantity between 1 and 10
let suma = 0; // Initialize sum variable
console.log(`Atsitiktinis skaičius: ${atsitiktinis}`);
for (let i = 0; i < atsitiktinis; i++) {
  let randomNumber = getRandomInt(1, 100); // Random number between 1 and 100
  console.log(randomNumber);
  suma += randomNumber; // Add the random number to the sum
}
// Output the total sum
console.log(`Skaidrių suma: ${suma}`);

// MASYVAI

// Masyvus galima įsivaizduoti kaip:
// ○ Masyvas yra specialaus tipo kintamasis, kuris gali saugoti daugiau nei vieną reikšmę.
// ○ Masyvas apjungia kelis skirtingus kintamuosius į vieną vietą.
// ○ Masyvas padeda sugrupuoti susijusius duomenis.

const matematika = 7;
const geografija = 9;
const informatika = 8;

const studentoPazymiai = [matematika, geografija, informatika];

// console.log(studentoPazymiai);
console.log(studentoPazymiai[1]);

let summaa = 0;
let masyvas = [3, 1, 2];

summaa = masyvas[0] + masyvas[1] + masyvas[2];

console.log(summaa);

// pvz

let automobiliai = [`Audi`];

if (automobiliai.length) {
  console.log(`Masyvas netuscias`);
}

if (automobiliai.length === 1) {
  console.log(`Masyve yra vienas elementas`, automobiliai[0]);
}

// tuscio masyvo sukurimas

// push metodas

let pienoProduktai = [`pienas`, `kefyras`, `grietine`];

pienoProduktai.push(`jogurtas`);

console.log(pienoProduktai);
// paskutinis narys su -1 rasosi
console.log(pienoProduktai[pienoProduktai.length - 1]);

// pavyzdukas kitas

let naujasProduktas = 'grybai';
let pienProduktai = ['pienas'];
let kitiProduktai = [];

if (naujasProduktas === 'kefyras') {
  pienProduktai.push(naujasProduktas);
} else {
  kitiProduktai.push(naujasProduktas);
}

console.log(pienProduktai);
console.log(kitiProduktai);

// pavyzdukas dar

let vardai = ['Tomas', 'Agne', 'Greta'];

console.log(vardai);

vardai[0] = 'Greta';
vardai[2] = 'Tomas';

console.log(vardai);

// uzduoteles
// 1. Susikurti norima masyva su duomenimis. Is masyvo isvesti pirma ir paskutini nari, du pasirinktus narius is masyvo vidurio ir kieki kiek siame masyve yra nariu.

let masyvass = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let pirmasis = masyvass[0];
let paskutinysis = masyvass[masyvass.length - 1];

console.log(`Pirmas narys: ${pirmasis}`);
console.log(`Paskutinis narys: ${paskutinysis}`);

let vidurinysis = Math.floor(masyvass.length / 2);

let vidurinysis1 = masyvass[vidurinysis - 1];
let vidurinysis2 = masyvass[vidurinysis];

console.log(
  `Pasirinkti nariai iš masyvo vidurio: ${vidurinysis1}, ${vidurinysis2}`
);

let kiekiss = masyvass.length;
console.log(`Kiekis : ${kiekiss}`);

// 2. susikurti norima masyva su duomenim. Isvesti viso masyvo info. pakeisti triju pasirinktu nariu reiksmes i kitas. isvesti pakiesto masyvo info.

let kazkas = [`plaukai`, `rubai`, `puodelis`];

kazkas.push(`batai`);

kazkas[0] = `šukuosena`;
kazkas[1] = `drabužiai`;
kazkas[2] = `lekste`;
console.log(kazkas);

// 3. susikurti tuscia masyvas. uzpildyti si masyva duomenimis naudojant push komanda. Issivesti uzpildyto masyvo informacija.

let tuscias = [];

tuscias.push('obuolys');
tuscias.push('bananas');
tuscias.push('apelsinas');
tuscias.push('kriause');
tuscias.push('vynuoge');

console.log(' jau uzpildytas:', tuscias);

// 4. susikurti tuscia masyvas. uzpildyti si masyva atsitiktinai sugeneruotais skaiciais. Issivesti uzpildyto masyvo informacija.

let tusciass = [];

for (let i = 0; i < 10; i++) {
  let betKoks = Math.floor(Math.random() * 100) + 1;
  tusciass.push(betKoks);
}

console.log('Random skaiciai: ', tusciass);

// 5. Susikurti du masyvus dvieju studentu pazymiams saugoti. Ivesti po 3-5 pazymius kiekvienam studentui (iskart kuriant masyvus arba per push funkcija). Suskaiciuoti ir isvesti ju vidurkius. issiaiskinti, kurio studento vidurkis didesnis ir isvesti atsakyma.

// // Funkcija, kuri apskaičiuoja vidurkį
// function calculateAverage(grades) {
//   let summm = 0;
//   for (let i = 0; i < grades.length; i++) {
//     summm += grades[i];
//   }
//   return summm / grades.length;
// }

// // Apskaičiuojame vidurkius
// let stud1Average = calculateAverage(stud1);
// let stud2Average = calculateAverage(stud2);

// // Išvedame vidurkius
// console.log(`Pirmo studento vidurkis: ${stud1Average}`);
// console.log(`Antro studento vidurkis: ${stud2Average}`);

// // Nustatome, kurio studento vidurkis didesnis
// if (stud1Average > stud2Average) {
//   console.log('Pirmo studento vidurkis yra didesnis.');
// } else if (stud1Average < stud2Average) {
//   console.log('Antro studento vidurkis yra didesnis.');
// } else {
//   console.log('Abiejų studentų vidurkiai yra vienodi.');
// }

let stud1 = [6, 8, 9, 2, 10];
let stud2 = [7, 8, 3, 7, 9];

let summm1 = stud1[0] + stud1[1] + stud1[2] + stud1[3] + stud1[4];
let vidurkis1 = summm1 / stud1.length;

console.log(vidurkis1);

let summm2 = stud2[0] + stud2[1] + stud2[2] + stud2[3] + stud2[4];
let vidurkis2 = summm2 / stud2.length;

console.log(vidurkis2);

if (vidurkis1 > vidurkis2) {
  console.log(`Pirmojo mokinio vidurkis yra didesnis`);
} else if (vidurkis2 > vidurkis1) {
  console.log(`Antrojo mokinio vidurkis yra didesnis`);
} else {
  console.log(`Abu vidurkiai lygus`);
}
