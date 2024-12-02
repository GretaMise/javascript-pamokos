const bmw = {
  modelis: '530',
  kuroTypas: 'Dyzelinas',
  variklioTuris: 3.0,
  spalva: 'melyna',
  arNaudotas: true,
  pravardes: ['Peleda', 'Ryklys', 'Penktukas'],
  sukurejas: {
    vardas: 'Bambalis',
    pavarde: 'Bambalinis',
  },
  rida: null,
};

const audi = {
  modelis: 'a4',
  kuroTypas: 'Dyzelinas',
  variklioTuris: 1.9,
  spalva: 'geltona',
  arNaudotas: true,
  pravardes: null,
  sukurejas: {
    vardas: 'Audrius',
    pavarde: 'Audinius',
  },
  rida: 150000,
};

const vokiskiAutomobiliai = [bmw, audi];

console.log(vokiskiAutomobiliai);

// uzduoteles

// Sukurkite tris objektus prekiy duomenims saugoti. Kiekviename objekte sudékite sias savybes su reiksmemis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandelyje, siuntimui dezes matmenys (x, y, z asys). Isveskite visy triju prekiy informacija. Isveskite visy prekiy kainas vienoje eiluteje (pirma preke kainuoja - ..., antra preké kainuoja - ..., ir t.t.). Raskite ir isveskite kuri preké yra brangiausia (jos pavadinima ir kaina arba visa rastos prekès informacija). Raskite ir isveskite atskirose eilutese kiekvienos prekes dezes türj. Raskite ir isveskite atskirose eilutése kiekvienos prekès pelninguma (kaina - savikaina) * kiekis sandelyje)

let preke1 = {
  pavadinimas: 'Preke A',
  kaina: 50,
  savikaina: 30,
  kodas: 'A001',
  turimasKiekis: 100,
  siuntimoDydis: {
    x: 10,
    y: 5,
    z: 2,
  },
};

let preke2 = {
  pavadinimas: 'Preke B',
  kaina: 75,
  savikaina: 50,
  kodas: 'B002',
  turimasKiekis: 200,
  siuntimoDydis: {
    x: 15,
    y: 10,
    z: 5,
  },
};

let preke3 = {
  pavadinimas: 'Preke C',
  kaina: 30,
  savikaina: 20,
  kodas: 'C003',
  turimasKiekis: 150,
  siuntimoDydis: {
    x: 8,
    y: 4,
    z: 3,
  },
};

console.log('Prekiu info:');
console.log(preke1);
console.log(preke2);
console.log(preke3);

console.log(
  `Kainos: pirma preke kainuoja - ${preke1.kaina} , antra preke kainuoja - ${preke2.kaina} , trecia preke kainuoja - ${preke3.kaina} .`
);

let brangiausiaPreke = preke1;

if (preke2.kaina > brangiausiaPreke.kaina) {
  brangiausiaPreke = preke2;
}
if (preke3.kaina > brangiausiaPreke.kaina) {
  brangiausiaPreke = preke3;
}

console.log('Brangiausia preke:');
console.log(brangiausiaPreke);

console.log('Dezuciu turiai:');
let deziuTuriai = [
  preke1.siuntimoDydis.x * preke1.siuntimoDydis.y * preke1.siuntimoDydis.z,
  preke2.siuntimoDydis.x * preke2.siuntimoDydis.y * preke2.siuntimoDydis.z,
  preke3.siuntimoDydis.x * preke3.siuntimoDydis.y * preke3.siuntimoDydis.z,
];

console.log(`A dezes turs: ${deziuTuriai[0]} `);
console.log(`B dezes turis: ${deziuTuriai[1]} `);
console.log(`C dezes turis: ${deziuTuriai[2]} `);

console.log('Pelningumas:');
let pelningumas1 = (preke1.kaina - preke1.savikaina) * preke1.turimasKiekis;
let pelningumas2 = (preke2.kaina - preke2.savikaina) * preke2.turimasKiekis;
let pelningumas3 = (preke3.kaina - preke3.savikaina) * preke3.turimasKiekis;

console.log(`A pelningumas: ${pelningumas1} `);
console.log(`B pelningumas: ${pelningumas2} `);
console.log(`C pelningumas: ${pelningumas3} `);

// uzduotele kita

let automobilis = {};

automobilis.marke = 'Toyota';
automobilis.modelis = 'Corolla';
automobilis.rida = 60000;
automobilis.gamybosMetai = 2021;
automobilis.spalva = 'Melyna';
automobilis.darbinisTuris = 1.8;
automobilis.dauzta = false;
automobilis.parduodama = true;

console.log('Automobilio info:');
console.log(automobilis);

let dabartiniaiMetai = new Date().getFullYear();
let automobiliuMetai = dabartiniaiMetai - automobilis.gamybosMetai;
console.log(`Automobiliui yra ${automobiliuMetai} m.`);

let nuvaziavoKilometrai = automobilis.rida;
let vidutiniaiKilometraiPerMetus = nuvaziavoKilometrai / automobiliuMetai;
console.log(
  `Vidutiniskai automobilis nuvaziavo ${vidutiniaiKilometraiPerMetus.toFixed(
    2
  )} km per metus.`
);

// pavyzdukas

const zmogus = {
  asdasdad: 'Vardenis',
  pavarde: 'Pavardenis',
  amzius: 18,
  pazymiai: [5, 6, 8, 9],
};

for (const pazymys of zmogus.pazymiai) {
  console.log(pazymys);
}

// dar vienas pavyzdukas

const zmogus1 = {
  asdasdad: 'Vardenis',
  pavarde: 'Pavardenis',
  amzius: 18,
  pazymiai: [5, 6, 8, 9],
};

let suma = 0;

for (const pazymys of zmogus1.pazymiai) {
  suma += pazymys;
}

console.log(suma);

// uzduotele

const knygynas = {
  pavadinimas: `Pegasas`,
  adresas: `Geliu g. 10`,
  plotas: 100,
  knyguKiekis: 20000,
  darboValandos: `8:00 - 20:00`,
  arAtidarytas: true,
};

for (let raktas in knygynas) {
  console.log(`Visa informacija: ${raktas}: ${knygynas[raktas]}`);
}

for (let raktas in knygynas) {
  if (typeof knygynas[raktas] !== 'string') {
    console.log(`Info ne string tipo: ${raktas}: ${knygynas[raktas]}`);
  }
}
