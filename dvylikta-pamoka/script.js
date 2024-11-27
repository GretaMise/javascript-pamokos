// Loops (Ciklas) fo....of
// Grazina reiksmes is masyvo, o ne indeksus [0,1,2...]
// Sukurtas veikti su masyvais, objektais ir stringais.

// pvz1
const masyvas = ['a', 'b', 'c'];

for (let reiksme of masyvas) {
  console.log(reiksme.length);
}

// pvz2
let string = 'string';

for (let raide of string) {
  console.log(raide);
}

// pvz3

const array = [1, 2, 3, 4, 5];

for (let number of array) {
  console.log(number);
}

// for...in loops
// grazina indeksus is masyvo, o ne reiksmes (atvirksciai, nei pries tai buves)

const masyv = ['a', 'b', 'c'];

for (let dalyvis in masyv) {
  console.log(dalyvis);
}

const arr = [1, 2];

console.log(masyvas[0]);

// pvz11

const pazymiai = [10, 2, 8, 6, 4];

for (let pazymys of pazymiai) {
  if (pazymys > 5) {
    console.log('Pazymys yra teigiamas', pazymys);
  } else {
    console.log('Pazymys yra neigiamas', pazymys);
  }
}

// pvz22

let komanda = [
  'programuotojas',
  'dizaineris',
  'senjoras',
  'jauniklis',
  'vidutinis',
];

// grazina reiksme - of

for (const narys of komanda) {
  console.log(narys);
}

// grazina indeksa - in

for (const narys in komanda) {
  console.log(narys);
}

// pvz33

let pirmas_studentas = [7, 5, 6, 8];
let antras_studentas = [8, 9, 10, 7];

for (const pazymys of pirmas_studentas) {
  console.log('Pirmo studento', pazymys);
}

for (const pazymys of antras_studentas) {
  console.log('Antro studento', pazymys);
}

// Indeksai grazinami kaip string values.

let skaiciai = [1, 2, 3, 4, 5];
let suma = 0;

for (let skaicius in skaiciai) {
  suma += skaicius;
}

console.log(suma);

let skaiciiai = [-1, -2, -3, 1, 2, 3];

let teigiami_skaiciiai = [];
let neigiami_skaiciiai = [];

for (const skaicius of skaiciiai) {
  if (skaicius > 0) {
    teigiami_skaiciiai.push(skaicius);
  } else {
    neigiami_skaiciiai.push(skaicius);
  }
}

console.log('Teigiamas skaicius', teigiami_skaiciiai);
console.log('Neigiami skaiciai', neigiami_skaiciiai);

// uzduotytes

// 17. Susikurti bet kokiu zodziu masyva ir uzpildyti ji duomenimis. Isvesti visus zodzius su indeksais i atskiras eilutes. pvz. 0-medis, 1-tvora...

let words = ['medis', 'tvora', 'namas', 'automobilis', 'knyga'];

let index = 0;

for (const word of words) {
  console.log(index + '-' + word);
  index++;
}

// Susikurkite masyva pirkiniy sarasui saugoti ir uzpildykite ji duomenimis. Isveskite kiek pirkiniu yra siame sarase. Taip pat, isveskite kiekviena jrasa atskiroje eiluteje, pries kiekviena parasant bruksniuka ar koki kita.

let list = ['obuoliai', 'bananai', 'pienas', 'duona', 'kava'];

console.log('Pirkinių skaicius: ' + list.length);

for (const item of list) {
  console.log('- ' + item);
}

// Susikurkite masyva studento pazymiams saugoti. Upildykite sj masyva. duomenimis. Raskite pazymiu vidurki. Isveskite visus siuos paymius ir gauta vidurki.

let grades = [8, 9, 7, 6, 8, 9, 10, 8, 7, 9];

let sum = 0;
for (const grade of grades) {
  sum += grade;
}
let average = sum / grades.length;

console.log('Studento pazymiai:');
for (const grade of grades) {
  console.log('- ' + grade);
}
console.log('Vidurkis: ' + average);

// Susikurkite masyva keliones nuovaziuotiems kilometrams saugoti ir upildykite ji duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaicius reiskia kiek km kuria diena buvo nuvaziuota). Isveskite visus nuvaziuotus per diena kilometrus, kurie yra didesni nei 150.

let kilometers = [120, 145, 90, 160, 200, 150, 180, 130, 170];

console.log('kilometrai, didesni nei 150:');
for (const km of kilometers) {
  if (km > 150) {
    console.log('- ' + km);
  }
}

// Susikurkite masyva faily pavadinimams saugoti, upildykite ji duomenimis. Jums reikes nuskaityti siuos failus, todel pirma noresite patikrinti su kuriais galite dirbti. Isveskite j ekrana tik tuos failus, kuriy galune yra .txt arba json tipo.

let failuPav = [
  'dok.txt',
  'img.png',
  'data.json',
  'notes.docx',
  'jads.pdf',
  'acml.json',
  'summary.txt',
  'asxkm.pptx',
];

console.log('Failai, su kuriais galima dirbti:');
for (const file of failuPav) {
  if (file.endsWith('.txt') || file.endsWith('.json')) {
    console.log('- ' + file);
  }
}

// Susikurti masyva automobiliu markems saugoti ir uzpildyti ji duomenimis. Isvesti kiekviena automobili atskiroje eiluteje, nurodant kiek raidziu sudaro jo pavadinima.
let markes = ['Audi', 'BMW', 'Toyota', 'Honda'];

for (let pav of markes) {
  console.log(pav, pav.length);
}
// Susikurkite masyva ivykusiu klaidy kodams saugoti ir upildykite si masyva duomenimis. Tuomet isveskite visas sukauptas klaidas administratoriui, taip, kad jis suprasty kas per klaidos jvyko. Pavyzdziui, jeigu yra kodas "ui87", tai kad isvesty "Grafines sasajos klaida navigacijoje", arba jeigu kodas "sys12", tuomet "Truksta operatyviosios atminties sistemoje" ir pan.

let errorCodes = ['ui87', 'sys12', 'net03', 'auth99'];

let error = {
  ui87: 'Grafines sasajos klaida navigacijoje',
  sys12: 'Truksta operatyviosios atminties sistemoje',
  net03: 'Tinklo klaida',
};

console.log('Klaidos administratoriui:');
for (const code of errorCodes) {
  if (error[code]) {
    console.log(error[code]);
  } else {
    console.log('Nezinoma klaida: ' + code);
  }
}

// Susikurkite masyva sandelio likuciams saugoti (kiekvienas atskiras narys masyve yra atskiros prekés likutis). Su kiekvienu likuciu paskaiciuokite per kiek dieny bus ispirktas, jei per diena vidutiniskai yra nuperkami 5 vnt. Isveskite atsakymus atskirose eilutese, nurodant kiek yra dabar ir kiek dieny uzteks jo. Pavyzdziui, jeigu yra likuciai 74, 54 ir 32, tai 74 vnt. prekes uzteks mazdaug 15 dieny, 54 vnt. prekés uzteks mazdaug 11 dieny ir t.t.

let likutis = [74, 54, 32, 100, 45];
const pardavimaiPerDiena = 5;

for (const kiekis of likutis) {
  let dienos = Math.floor(kiekis / pardavimaiPerDiena);
  console.log(kiekis + ' vienetu uzteks ' + dienos + ' dienu/dienoms.');
}

// Susikurkite masyva studento pazymiams saugoti. Upildykite si masyva atsitiktinai sugeneruotais pazymiais. Raskite vidurkj. Raskite kiek neigiamy pazymiy studentas gavo (mazesniu nei 5). Isveskite visus teigiamus pazymius, gauta vidurkj ir neigiamu рабутіц kiekj.

let gradess = [];

for (let i = 0; i < 10; i++) {
  gradess.push(Math.floor(Math.random() * 10) + 1);
}
console.log(gradess);
let total = 0;
let neigiami = 0;
let teigiami = [];

for (const grade of gradess) {
  total += grade;
  if (grade < 5) {
    neigiami++;
  } else {
    teigiami.push(grade);
  }
}

let averagee = total / gradess.length;

console.log('Teigiami pažymiai: ' + teigiami);
console.log('Gautas vidurkis: ' + averagee.toFixed(2));
console.log('Neigiamų pažymių kiekis: ' + neigiami);

// Susikurkite du pazymiu masyvus, kur vienas masyvas reiks vieno studento pazymius, kitas masyvas kito studento pazymius. Raskite kiekvieno studento pazymiu vidurki. Isveskite abieju studentu pazymius, vidurkius ir nurodykite, kuris studentas turi didesni vidurki.
let stud1 = [8, 7, 9, 6, 10];
let stud2 = [5, 6, 7, 8, 9];

let total1 = 0;
for (const grade of stud1) {
  total1 += grade;
}
let average1 = total1 / stud1.length;

let total2 = 0;
for (const grade of stud2) {
  total2 += grade;
}
let average2 = total2 / stud2.length;

console.log('Stud1 pazymiai:');
for (let i = 0; i < stud1.length; i++) {
  console.log(stud1[i]);
}
console.log('Stud1 vidurkis: ' + average1.toFixed(2));

console.log('Stud2 pazymiai:');
for (let i = 0; i < stud2.length; i++) {
  console.log(stud2[i]);
}
console.log('Stud2 vidurkis: ' + average2.toFixed(2));

if (average1 > average2) {
  console.log('Stud1 didesnis vidurkis.');
} else if (average1 < average2) {
  console.log('Stud2 didesnis vidurkis.');
} else {
  console.log('Abieju vidurkis vienodas.');
}

// Susikurkite masyva norimiems zodziams saugoti. Uzpildykite si masyva duomenimis. I kita masyva atrinkite tuos zodzius, kurie yra trumpi (sudaro maziau nei 5 raides). Isveskite pradinius duomenis ir atrinktus.

let zodziai = ['obuolys', 'kate', 'suo', 'vanduo'];

let trumpiZodziai = [];

for (let i = 0; i < zodziai.length; i++) {
  if (zodziai[i].length < 5) {
    trumpiZodziai.push(zodziai[i]);
  }
}

console.log('Visi:');
for (let i = 0; i < zodziai.length; i++) {
  console.log(zodziai[i]);
}

console.log('Tik trumpi:');
for (let i = 0; i < trumpiZodziai.length; i++) {
  console.log(trumpiZodziai[i]);
}
