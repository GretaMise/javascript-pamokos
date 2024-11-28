// Objects
// Objects (Objektai)
// Objektas paprastai naudojamas kai norime sugrupuoti duomenis apie
// vieną esybę, pavyzdžiui, vieno studento duomenys, vienos knygos
// duomenys ir pan.

const automobilis = {
  marke: 'BMW',
  pagaminimo_metai: 2020,
  kuroTipas: 'Benzinas',
  variklioTuris: 3.0,
};

console.log(automobilis);

const objektas = {
  key: 'value',
  raktas: 'reiksme', // <-- paaiskinimas pries tai buvusios eilutes angliskai
};
console.log(objektas);

const knyga = {
  pavadinimas: 'Nuotykiai',
  autorius: 'Jonas Jonaitis',
  kodas: 'ISBN-93843-012',
  puslapiu_skaicius: 250,
  temos: ['nuotykiai', 'fantastika'],
  leidimas: {
    metai: 2022,
    leidykla: 'Baltos lankos',
    vertejas: 'Petras Petraitis',
    adresas: 'Vilnius, Vilniaus g. ',
  },
  kaina: 19.99,
  valiuta: 'EUR',
  arTurime: true,
  arNudota: false,
};
// visi duomenys
console.log(knyga);
// Nuotykiai
console.log(knyga.pavadinimas);
// 2022
console.log(knyga.leidimas.metai);
// fantastika
console.log(knyga.temos[1]);

// pakeisti objekto savybes

let darbuotojas = {
  pareigos: 'programuotojas',
  lygis: 'jaunesnysis',
  atlyginimas: 1000,
  isidarbino: 2020,
};

let dabartiniaiMetai = 2024;
let jauDirba = dabartiniaiMetai - darbuotojas.isidarbino;
console.log(darbuotojas);

console.log(jauDirba);

if (jauDirba > 3) {
  darbuotojas.atlyginimas += 200;
}
console.log(darbuotojas.atlyginimas);

switch (jauDirba) {
  case 1:
    darbuotojas.atlyginimas += 100;
    break;
  case 2:
    darbuotojas.atlyginimas += 200;
    break;
  case 3:
    darbuotojas.atlyginimas += 300;
    break;
  case 4:
    darbuotojas.atlyginimas += 400;
    break;
}

// Ikelti duomenis
let darbuotoja = {};

darbuotoja.pareigos = 'programuotojas';

console.log(darbuotoja);

// Sukurkite objekta studento duomenims saugoti. I si objekta sudékite tokias savybes su reiksmémis: vardas, pavarde, amzius, studiju programa, atsiskaityty kredity skaidius, pazymiai, amzius, ugis, kelintame kurse mokosi, kurioje mokykloje mokosi. Siuos duomenis galite grupuoti i vidinius objektus arba visus israsyti atskirai. Isveskite sia informacija per viena console.10g (). Taip pat, paméginkite isvesti atskirose eilutése tris skirtingas pasirinktas savybes.

let studen = {
  vardas: 'Jane',
  pavarde: 'Doe',
  amzius: '25',
  studiju_programa: {
    pavadin: 'Architecture',
    noCredis: 240,
    pazymiai: [7, 9, 8, 6, 10, 10],
    kursas: 3,
  },
};

console.log(studen);

console.log(studen.studiju_programa.pavadin);
console.log(studen.pavarde);
console.log(studen.studiju_programa.pazymiai);

// pvz pries uzduoti.

const dabMetai = new Date(Date.now()).getFullYear();

console.log(dabMetai);

// Sukurkite objekta informacijai apie filma saugoti. I si objekta sudekite tokias savybes su reiksmemis: pavadinimas, rezisierius, biudzetas, kiek uzdirbo pinigy po isleidimo, zanras, trukme, isleidimo metai, aktoriu sarasas (masyvas su ju vardais ir pavardemis). Isveskite sio objekto informacija. Paskaiciuokite ir isveskite sio filmo pelna (uzdarbis - biudzetas). Isveskite kiek filme dalyvavo aktoriu (j4 kiekis). Paskaiciuokite kiek filmui yra metu (dabartinius metus tiesiog galite jrasyti rankomis arba panaudoti new Date (Date.now ()) .getFullYear () funkcija).

let filmas = {
  pavadinimas: 'Nuotykiai',
  rezisierius: 'Petras Petrauksas',
  biudzetas: 160000000,
  uzdarbis: 836800000,
  zanras: 'Moksline fantastika',
  trukme: 148,
  isleidimoMetai: 2010,
  aktoriuSarasas: [
    { vardas: 'Greta', pavarde: 'Gretaite' },
    { vardas: 'Laura', pavarde: 'Lauraite' },
    { vardas: 'Gerda', pavarde: 'Gerdaite' },
    { vardas: 'Ona', pavarde: 'Onaite' },
  ],
};

console.log('Bendra informacija:');
console.log(filmas);

let pelnas = filmas.uzdarbis - filmas.biudzetas;
console.log('Filmo pelnas:', pelnas);

let aktoriuKiekis = filmas.aktoriuSarasas.length;
console.log('Aktoriu kiekis', aktoriuKiekis);

let musuMetai = new Date().getFullYear();
let filmoAmzius = musuMetai - filmas.isleidimoMetai;
console.log('Filmo amzius:', filmoAmzius, 'metai');

// Sukurkite du objektus dvieju knygu informacijai saugoti. Kiekviename objekte nurodykite tokias savybes su reiksmemis: pavadinimas, autorius, Zanras, kaina, puslapiy kiekis, skyriy sarasas (masyvas su pavadinimais), isleidimo metai, ar knyga galima rasti knygynuose. Isveskite siy knygu informacija. Isveskite kuri knyga plonesne (turi maziau puslapiy), bei kurioje knygoje yra daugiau skyriu. Paskaiciuokite, jeigu pigesnes knygos kaina padvigintumete, ar ji jau büty brangesne uz kita knyga?

let knyga1 = {
  pavadinimas: 'Knyga A',
  autorius: 'Autorius A',
  zanras: 'biografija',
  puslapiuKiekis: 200,
  kaina: 20,
  skyriuSarasas: ['Skyrius 1', 'Skyrius 2', 'Skyrius 3'],
  isleidimoMetai: 2020,
  arKnygaYraKnygynuose: true,
};

let knyga2 = {
  pavadinimas: 'Knyga B',
  autorius: 'Autorius B',
  zanras: 'fantastika',
  puslapiuKiekis: 150,
  kaina: 50,
  skyriuSarasas: ['Skyrius 1', 'Skyrius 2'],
  isleidimoMetai: 2021,
  arKnygaYraKnygynuose: true,
};

console.log('Pirmoji knyga:', knyga1);
console.log('Antroji knyga:', knyga2);

let plonesneKnyga;
for (let knyga of [knyga1, knyga2]) {
  if (!plonesneKnyga || knyga.puslapiuKiekis < plonesneKnyga.puslapiuKiekis) {
    plonesneKnyga = knyga;
  }
}
console.log('Plonesnew:', plonesneKnyga.pavadinimas);

let daugiauSkyriuKnyga;
for (let knyga of [knyga1, knyga2]) {
  if (
    !daugiauSkyriuKnyga ||
    knyga.skyriuSarasas.length > daugiauSkyriuKnyga.skyriuSarasas.length
  ) {
    daugiauSkyriuKnyga = knyga;
  }
}
console.log('Daufiau skyriu:', daugiauSkyriuKnyga.pavadinimas);

let pigesneKnyga;
if (knyga1.kaina < knyga2.kaina) {
  pigesneKnyga = knyga1;
} else {
  pigesneKnyga = knyga2;
}

let padvigubintaKaina = pigesneKnyga.kaina * 2;

let kitaKnygaKaina;
if (pigesneKnyga === knyga1) {
  kitaKnygaKaina = knyga2.kaina;
} else {
  kitaKnygaKaina = knyga1.kaina;
}

if (padvigubintaKaina > kitaKnygaKaina) {
  console.log('Pigesne knyga jau brangesne.');
} else {
  console.log('Pigesne knyga vis dar pigesne, nors kaina padvigubejo.');
}
