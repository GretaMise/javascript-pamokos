// let nuolaida = 0;
// const arVipNarys = true;

// if (arVipNarys) {
//   nuolaida = 50;
// } else {
//   nuolaida = 0;
// }

// console.log(`Zmogus gauna ${nuolaida}% nuolaida`);

// 6 uzduotis, JS classroom.

const wHours = 8;

let quantHour = 10;
let employees = 6;
let bCost = 1.6;
let sCost = 5.5;
let orders = 46;
// `kiek kepykla per viena darbo diena gali iskepti
let galiIskepti = wHours * quantHour;
console.log(`Kepykla gali iskepti: ` + galiIskepti);

// visu kepalu savikaina
let savikainaVisu = bCost * galiIskepti;
console.log(`Visu kepalu savikaina: ` + savikainaVisu);

let pelnas = orders * sCost;

console.log(`Pelnas is pardavimu: ` + pelnas);
// ar spes iskepti visa tos dienos uzsakyma. Jei ne, kiek kepalu nespes?

if (galiIskepti >= orders) {
  console.log('Kepykla spes iskepti visa tos dienos uzsakyma');
} else {
  console.log('Kepykla nespes iskepti uzsakymu');
}

// kadangi uzsakymas pilnai ivykdytas, tai nera ko skaiciuoti.

// kiek galejo uzsidirbti + skirtumas

let kiekGalejo = galiIskepti * sCost;

console.log(
  `Kiek galejo uzsidirbti, jei butu pardave visus kepinius: ` + kiekGalejo
);

let skirtumasSoldAndBaked = kiekGalejo - pelnas;

console.log(
  `jei butu pardave visus kepalus, papildomai butu uzsidirbe: ` +
    skirtumasSoldAndBaked
);

// Uzduotys is classroom (PAPILDOMOS)

// 1. Kurjerio pristatymo patikrinimas

// 2. Amziaus kategorijos nustatymas:
// Pagal amziu nustato kategorija: vaikas, paauglys, suauges, senjoras.
// Taisykles:
// Jei jaunesnis, nei 13 - vaikas;
// Jei tarp 13 ir 17m (imtinai) - paauglys;
// Jei tarp 18 ir 64 (imtinai) - suauges;
// Jei 65 ir daugiau - senjoras.

const metai = 40;

// let category;

if (metai < 13) {
  console.log('Vaikas');
} else if (metai >= 13 && metai <= 17) {
  console.log('Paauglys');
} else if (metai >= 18 && metai <= 64) {
  console.log('Suauges');
} else if (metai > 65) {
  console.log('Senjoras');
}

// 3. Kavines nuolaidu sistema
//Taisykles:
// Jei klientas lojalumo narys ir pirkinio suma yra daugiau, nei 20 eur, jis gaunas 20% nuolaida.
// Jei klientas nera lojalumo narys, bet pirkinio suma virsija 50 euru, jis gaun1 10%.
// Jei nei viena is salygu netenkinama, nuolaida nepritaikoma.

const arVipNarys = true;
let pirkiniuSuma = 63;
let nuolaida = 0;

if (arVipNarys && pirkiniuSuma > 20) {
  nuolaida = 20;
} else if (!arVipNarys || pirkiniuSuma > 50) {
  nuolaida = 10;
} else {
  nuolaida = `nepritaikoma`;
}

console.log(`Jusu nuolaida yra ${nuolaida}%`);

// 4. Sporto klubo abonemento kaina
// Taisykles:
// Jei lankytojas jaunesni nei 18 arba studentas, jis gauna 15% nuolaida.
// jei lankytojas vyresnis nei 60 metu, jam taip pat taikoma 15% nuolaida.
// Kitais atvejais nuolaida netaikoma.

const studentas = true;
let amzius = 19;
let gaunaNuolaida = 0;

if (amzius < 18 || studentas || amzius > 60) {
  nuolaida = 15;
} else {
  nuolaida = 'Nuolaida netaikoma';
}

// 5. Egzamino ivertinimas pagal bala

let egzaminas = 75;

if (egzaminas >= 90 && 100) {
  console.log('Puikiai');
} else if (egzaminas >= 75 && egzaminas <= 89) {
  console.log('Gerai');
} else if (egzaminas >= 50 && egzaminas <= 74) {
  console.log('Patenkinamai');
} else if (egzaminas < 50) {
  console.log('Nepatenkinamai');
}
