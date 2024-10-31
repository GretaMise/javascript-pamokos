// Kintamuju reiksmiu priskyrimas

const vardas = 'Jonas';
const pavarde = 'Jonaitis';
const gimimoMetai = 1999;
const miestas = 'Vilnius';
const megstamiausiaSpalva = 'Melyna';

const dabartiniaiMetai = 2024;
const amzius = dabartiniaiMetai - gimimoMetai;

// const sakinys = 'Labas, mano vardas ' + vardas + '.';
// console.log(sakinys);

// arba
const sakinys = `Labas, mano vardas ${vardas}. Mano pavarde ${pavarde}. As gimiau ${gimimoMetai} metais, man yra: ${
  2024 - gimimoMetai
}`;

const sakinukas = `Labas, mano vardas ${vardas}. Mano pavarde ${pavarde}. As gimiau ${gimimoMetai} metais, man yra: ${amzius}`;

console.log(sakinys);
