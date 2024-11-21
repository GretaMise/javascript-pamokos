// Masyvai

// pvz

const masyvas = [90, 30, 20];

for (let i = 0; i < masyvas.length; i++) {
  console.log(masyvas[i]);
}

// pvz 2

let automobiliai = [`BMW`, `AUDI`, `OPEL`];

for (let i = 0; i < automobiliai.length; i++) {
  console.log(automobiliai[i]);
}

// pvz 3

let skaiciai = [9, 8, 6, 3, 5, 2];

let lyginiaiSkaiciai = 0;
let nelygniaiSkaiciai = 0;

for (let i = 0; i < skaiciai.length; i++) {
  if (skaiciai[i] % 2 === 0) {
    lyginiaiSkaiciai += skaiciai[i];
  } else {
    nelygniaiSkaiciai += skaiciai[i];
  }
}

console.log(`Visi skaiciai`, skaiciai);
console.log(`Lyginiai skaiciai`, lyginiaiSkaiciai);
console.log(`Nelyginiai skaiciai`, nelygniaiSkaiciai);

// Uzduoteles.

// 6. Susikurti masyva studiju programu pavadinimams saugoti. Uzpildyti si masyva duomenimis. Isvesti kiekviena studiju programa atskiroje eiluteje.

let studijos = [`Psichologija`, `Architektura`, `Zurnalistika`];

console.log(studijos[0]);
console.log(studijos[1]);
console.log(studijos[2]);

// bet geriau butu si funkcija>>>>>

const studijuProgramos = ['IT', 'Verslas', 'Teisė'];

for (let i = 0; i < studijuProgramos.length; i++) {
  console.log(studijuProgramos[i]);
}
// 7. Susikurti masyva saliu pavadinimams saugoti ir ji uzpildyti duomenimis. Isvesti saliu pavadinimus atskirose eilutese, su prierasu 'salis' ir tada nurodyti sali is masyvo.

let salys = [`Lietuva`, `Latvija`, `Estija`];

console.log(`Salis ` + salys[0]);
console.log(`Salis ` + salys[1]);
console.log(`Salis ` + salys[2]);

for (let i = 0; i < salys; i++) {
  console.log(`Salis: ` + salys[i]);
}

// 8. susikurti masyva igyvendintu projektu pavadinimams saugoti. uzpildyti si masyva duomenimis. isvesti kiekviena projekta atskirose eilutese, pries kiekviena projekta parasant kelintas tai projektas yra (pradedant 1-uoju).

let projektai = [`pirmas`, `antras`, `trecias`];

// console.log(projektai[0] + count);
// console.log(projektai[1] + count);
// console.log(projektai[2] + count);

for (let i = 0; i < projektai.length; i++) {
  console.log(`${i + 1}. ${projektai[i]}`);
}

// 9. Susikurti skaiciu masyva ir uzpildyti duomenimis. Is masyvo isvesti tik tuos skaicius, kurie yra didesni nei 5.

let numbers = [3, 7, 2, 8, 5, 10, 4, 6, 1, 9];

console.log('Skaiciai didesni nei 5:');
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    console.log(numbers[i]);
  }
}

// 10. Susikurti skaiciu masyva ir uzpildyti ji atsitiktiniais skaiciais. Rasti visu skaiciu, kurie dalinasi is 4 suma.

let tusciass = [];

for (let i = 0; i < 10; i++) {
  let betKoks = Math.floor(Math.random() * 100) + 1;
  tusciass.push(betKoks);
}

console.log('Random skaiciai: ', tusciass);

let dalinasiIs4 = tusciass.filter((num) => num % 4 === 0);

console.log('Dalinasi is 4:  ', dalinasiIs4);

// 11. susikurti pazymiu masyva ir uzpildyti atsitiktiniais pazymiais. Rasti siu pazymiu vidurki. Isversti sugeneruotus duomenis ir gauta vidurki.

let pazymiai = [];
let kiekis = 3;
for (let i = 0; i < kiekis; i++) {
  let pazymys = Math.floor(Math.random() * 10) + 1;
  pazymiai.push(pazymys);
}

console.log('Pazymiai:', pazymiai);

let suma = 0;
for (let i = 0; i < pazymiai.length; i++) {
  suma += pazymiai[i];
}
let vidurkis = suma / pazymiai.length;

console.log('Vidurkis: ', vidurkis.toFixed(0));

// 12. susikurti pazymiu masyva ir uzpildyti atsitiktiniais pazymiais. Rasti siu pazymiu vidurki. Isversti visus skaicius, kurie yra didesni, nei vidurkis.

let didesniNeiVidurkis = pazymiai.filter((pazymys) => pazymys > vidurkis);

console.log('Pazymiai, didesni uz vidurki: ', didesniNeiVidurkis);

// 13. Susikurti skaiciu masyva ir uzpildyti ji duomenimis. Isvesti visus skaicius atskirose eilutese. Prie kiekvieno lyginio skaiciaus dar isvedant jo kvadrata.

let duom = [3, 6, 8, 1, 3];

for (let i = 0; i < duom.length; i++) {
  let skaicius = duom[i];
  let output = skaicius.toString();

  if (skaicius % 2 === 0) {
    output += ` (kvadratas: ${skaicius ** 2})`;
  }

  console.log(output);
}
// 14. Susikurkite studento pazymiu masyva ir uzpildyti ji duomenimis (atsitiktiniais arba kokius irasysiu). Isvesti kiekviena pazymi atskiroje eiluteje. Prie kiekvieno pazymio nurodyti ar tai teigiamas, ar neigiamas pazymys. Taip pat, jeigu jeigu neigiamas pazymys, tuomet dar nurodyti kiek balu truko iki teigiamo pazymio. Teigiamas pazymys yra 5 balai.

// 15. Susikurti zodziu masyva ir uzpildyti duomenimis. Isvesti visus zodziu ekrane, nurodant is kiek raidziu kiekvienas zodis yra sudarytas. Papildyti skripta taip, kad rasciau visu raidziu kieki.

// 16. Susikurti skaiciu masyva ir uzpildyti duomenimis. Rasti visu skaiciu, kurie dalinasi is 3 suma ir vidurki.
