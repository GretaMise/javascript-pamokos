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
