// uzduotis is praeitos pamokos

// Susikurkite du objektus, dviejy studenty informacijai saugoti. Abiejuose objektuose sudekite sias savybes su reiksmemis: vardas ir pavarde, studiju programos pavadinimas, pazymiai. Raskite abiejy studenty pazymiu vidurkius. Isveskite abiejy studenty informacija, bei pazymiy vidurkius. Raskite ir isveskite, kurio studento pazymiy vidurkis yra didesnis ir isveskite jo varda su pavarde.

let studentas1 = {
  vardas: 'Jonas',
  pavarde: 'Jonaitis',
  studijuPrograma: 'Informatika',
  pazymiai: [8, 9, 7, 10, 6],
};

let studentas2 = {
  vardas: 'Ona',
  pavarde: 'Onaityte',
  studijuPrograma: 'Matematika',
  pazymiai: [9, 10, 8, 9, 10],
};

let suma1 = 0;
for (let pazymys of studentas1.pazymiai) {
  suma1 += pazymys;
}
let vidurkis1 = suma1 / studentas1.pazymiai.length;

let suma2 = 0;
for (let pazymys of studentas2.pazymiai) {
  suma2 += pazymys;
}
let vidurkis2 = suma2 / studentas2.pazymiai.length;

console.log('Stud1 info:');
console.log(`Vardas: ${studentas1.vardas} ${studentas1.pavarde}`);
console.log(`Studijos: ${studentas1.studijuPrograma}`);
console.log(`Vidurkis: ${vidurkis1.toFixed(2)}`);

console.log('Stud2 info:');
console.log(`Vardas: ${studentas2.vardas} ${studentas2.pavarde}`);
console.log(`Studijos: ${studentas2.studijuPrograma}`);
console.log(`Vidurkis: ${vidurkis2.toFixed(2)}`);

if (vidurkis1 > vidurkis2) {
  console.log(`Didesnis vidurkis: ${studentas1.vardas} ${studentas1.pavarde}`);
} else if (vidurkis2 > vidurkis1) {
  console.log(`Didesnis vidurkis: ${studentas2.vardas} ${studentas2.pavarde}`);
} else {
  console.log('Abieju vidurkiai yra vienodi.');
}

// Su funkcijom pavyzdukas

let automobilis = {
  marke: 'Toyota',
  modelis: 'Prius',
  kaina: 20000,
  nuolaidaProcentais: 10,
  automobilioKainaSuNuolaida: function () {
    let galutineKaina = this.kaina * (1 - this.nuolaidaProcentais / 100);

    return galutineKaina;
  },
};

console.log(
  `Automobilis kainuos su ${
    automobilis.nuolaidaProcentais
  }% nuolaida: ${automobilis.automobilioKainaSuNuolaida()}$`
);

// dar pvz

let kelione = {
  vieta: 'Paryzius',
  trukmeDienomis: 5,
  dienosBiudzetas: 100,
  apskaiciuotiVisaKelionesKaina: function () {
    let suma = this.trukmeDienomis * this.dienosBiudzetas;
    return suma;
  },
  parodykInformacija: function () {
    console.log(
      `Kelione i ${this.vieta}, truks ${
        this.trukmeDienomis
      } dienas, kainuos is viso: ${this.apskaiciuotiVisaKelionesKaina()}`
    );
  },
};

kelione.parodykInformacija();

// Funkcijos

// Jos skirtos atlikti veiksmus.

// Si funkcija grazina suma idejus du skaicius.
// Return zodis grazina reiksme

function calculateSum(a, b) {
  return a + b;
}

console.log(calculateSum(5, 5));

// Funkcija pati savavališkai nevykdo jokio kodo, todėl norint, kad ji atliktų kokį nors darbą - reikės ją iškviesti.

// Jeigu funkcijai reikia kokių nors duomenų, jai tai galima perduoti kaip parametrus/argumentus.

function pasisveikinimas(vardas) {
  if (typeof vardas !== 'string') {
    console.log(`Ivestas ne vardas`);
  }
  console.log(`Labas!`, vardas);
}

pasisveikinimas();

// pvz

let laikas = '18:00';

function pasisveikink() {
  console.log('Labas rytas');
}

function atsisveikink() {
  console.log('Viso gero!');
}

if (laikas === '18:00') {
  atsisveikink();
} else {
  pasisveikink();
}

// pvz. Funkcijos mato kintamuosius, kurie yra isoreje

let skaicius = 10;

function isveskPadaugintaSkaiciu() {
  console.log(skaicius * 2);
}

isveskPadaugintaSkaiciu();

// Uzdavinukai

// 1. Sukurkite funkcija, kuri isvesty jüsy varda ir kodel pasirinkote programavima. Iskvieskite sia funkcija tris kartus.

function isvestiInformacija(vardas, priezastis) {
  console.log(`As ${vardas} , pasirinkau programavima, nes ${priezastis}.`);
}
isvestiInformacija('Greta1', 'argumentas1');
isvestiInformacija('Greta2', 'argumentas2');
isvestiInformacija('Greta3', 'argumentas3');
// 2. Sukurkite funkcija, kuri isvesty 5 eiluciy eilerasti. Iskvieskite sia funkcija 5 kartus.

function isvestiEilerasti() {
  console.log('1. Posmelis1');
  console.log('2. Posmelis2');
  console.log('3.  Posmelis3');
  console.log('4. Posmelis4');
  console.log('5. Posmelis5');
}

isvestiEilerasti();
isvestiEilerasti();
isvestiEilerasti();
isvestiEilerasti();
isvestiEilerasti();
// 3. Sukurkite tris funkcijas, kur kiekviena isvesty skirtingus tekstus. Iskvieskite visas tris funkcijas po viena karta.

function pirmasP() {
  console.log('Pirmas tekstas');
}

function antrasP() {
  console.log('Antras tekstas');
}

function treciasP() {
  console.log('Treccias tekstas');
}

pirmasP();
antrasP();
treciasP();
// 4. Sukurkite dvi funkcijas, kur vienoje buty viena teksto eiluté, kitoje - kita. Sukurkite treia funkcija, kuri iskviesty pirmas dvi funkcijas. Iskvieskite sia treciaja funkcija uz visy funkciju ribu.

function isvestiPirma() {
  console.log('Pirma eilute');
}

function isvestiAntra() {
  console.log('Antra eilute');
}

function isvestiEilutes() {
  isvestiPirma();
  isvestiAntra();
}

isvestiEilutes();

// pvzz

function pirmaEilute() {
  return 'Labas';
}

function antraEilute() {
  return 'Vakaras';
}

function sujungtosEilutes() {
  console.log(pirmaEilute() + ' ' + antraEilute());
}

sujungtosEilutes();

// uzdavinukas

function sugeneruokIrIsveskSuma() {
  const skaicius1 = Math.floor(Math.random() * 10) + 1;
  const skaicius2 = Math.floor(Math.random() * 10) + 1;

  let suma = skaicius1 + skaicius2;

  console.log(`${skaicius1} + ${skaicius2} = ${suma}`);
}

sugeneruokIrIsveskSuma();
sugeneruokIrIsveskSuma();
sugeneruokIrIsveskSuma();

// Sukurkite ir iskvieskite funkcija, kurioje kintamuosiuose buty saugoma informacija apie policininka (vardas, pavarde, amzius, alga, etatas, specializacija). Isveskite sia informacija suformatuotai (pavyzdiui iterpkit ¡ sakini, ar isveskite sarasu ar pan.).

function isvestiPolicininkoInformacija() {
  const policininkas = {
    vardas: 'Jonas',
    pavarde: 'Jonauskas',
    amzius: 35,
    alga: 1500,
    etatas: 'Pareigunas',
    specializacija: 'Keliu policija',
  };

  console.log('Policininko informacija:');
  console.log('-------------------------');
  console.log(`Vardas ${policininkas.vardas}`);
  console.log(`Pavarde: ${policininkas.pavarde}`);
  console.log(`Amzius: ${policininkas.amzius} `);
  console.log(`Alga: ${policininkas.alga}`);
  console.log(`Etatas: ${policininkas.etatas}`);
  console.log(`Specializacija: ${policininkas.specializacija}`);
}

isvestiPolicininkoInformacija();
