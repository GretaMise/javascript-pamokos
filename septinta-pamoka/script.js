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
// Sukurti sistema, kuri patikrins ar uzsakymas bus pristatytas ta pacia diena.
// Pristatymas ta pacia diena galimas, jei uzsakymas buvo pateiktas iki tam tikros valandos (pvz. 15val -IMTINAI (cia nuo saves pridejau)) ir jei preke yra sandelyje.

let uzsakymasPateiktas = 14;
let yraSandelyje = false;

if (uzsakymasPateiktas <= 15 && yraSandelyje) {
  console.log(`Jusu uzsakymas bus pristatytias siandien`);
} else {
  console.log(`Jusu uzsakymas bus pristatytas rytoj.`);
}

// 2. Amziaus kategorijos nustatymas:
// Pagal amziu nustato kategorija: vaikas, paauglys, suauges, senjoras.
// Taisykles:
// Jei jaunesnis, nei 13 - vaikas;
// Jei tarp 13 ir 17m (imtinai) - paauglys;
// Jei tarp 18 ir 64 (imtinai) - suauges;
// Jei 65 ir daugiau - senjoras.

const metai = 40;

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

let studentas = false;
let amzius = 17;
let gaunaNuolaida = 0;

if (amzius < 18 || studentas || amzius > 60) {
  gaunaNuolaida = 15;
} else {
  gaunaNuolaida = 'Nuolaida netaikoma';
}

console.log(`Ar jusu uzsakymui priskirta nuolaida %: ${gaunaNuolaida}`);

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

// 6. Kino bilietu kainos nustatymas
// Jei lankytojas yra vaikas (maziau nei 12 metu), bilieto kaina yra 5 eurai.
// Jei lankytojas yra suauges ir eina i dienos seansa (iki 17val), bilieto kaina yra 7 eur.
// Jei lankytojas yra suauges ir eina i vakarini seansa (nuo 17 val), bilieto kaina yra 10.
// Jei lankytojas yra senjoras (daugiau nei 65m), bilieto kaina yra 6eur.

let age = 66;
let showTime = 19;

if (age < 12) {
  console.log(`The ticket cost you 5 eur.`);
} else if (age >= 12 && age <= 65 && showTime < 17) {
  console.log(`The tickes cost you 7 eur.`);
} else if (age >= 12 && age <= 65 && showTime >= 17) {
  console.log(`The ticket cost you 10 eur`);
} else if (age > 65) {
  console.log(`The ticket cost you 6 eur`);
}

// 7. Atsiskaitymo su nuolaida sistema
// jei pirkimo suma virsija 100 eur ir siandien yra treciadienis, taikoma 15% nuolaida.
// Jei pirkimo suma virsija 50 eur ir siandien yra penktadienis, taikoma 10% nuolaida.
// Kitais atvejais nuolaida netaikoma.

let purchase = 61;
const wednesday = false;
const friday = true;

let discount = 0;

if (purchase > 100 && wednesday) {
  discount = 15;
} else if (purchase > 50 && friday) {
  discount = 10;
}

if (discount > 0) {
  console.log(
    `Congrats! The ${discount}% discount has been applied to your purchase!`
  );
} else {
  console.log(`No discount applied.. Better luck next time!`);
}

// 8. Laikmatis darbo laiko patirkinimui
// Darbo laikas: nuo 9:00 iki 17:00.
// Jei laikas patenka i darbo laika, programa turi grazinti pranesima 'Dabar darbo laikas'
// Jei laikas nepatenka i darbo laika, programa turi grazinti pranesima 'Dabar ne darbo laikas'.

let time = 12;

if (time >= 9.0 && time <= 17.0) {
  console.log('Dabar darbo laikas');
} else {
  console.log('Dabar ne darbo laikas');
}

// PASIKLAUSTI: kodel su || apima viska, del to 8.10 YRA  darbo laikas, o su && jau atitinka salyga. Su && paimamas nurodytas intervalas? Bet vistiek 8 turetu atitikti <= 17...?

// 9. Mokesciu apskaiciavimas pagal pajamas
// Jei pajamos mazesnes nei 10k eur per metus, mokestis yra 5%.
// Jei pajamos yra tarp 10k ir 30k eur per metus, mokestis yra 10%.
// Jei pajamos yra tarp 30k ir 60k eur per metus, mokestis yra 15%.
// Jei pajamos yra daugiau nei 60k eur per metus, mokestis yra 20%.

let annualIncome = 730000;
let taxes = 0;

if (annualIncome < 10000) {
  taxes = 5;
} else if (annualIncome >= 10000 && annualIncome < 30000) {
  taxes = 10;
} else if (annualIncome >= 30000 && annualIncome < 60000) {
  taxes = 15;
} else if (annualIncome >= 60000) {
  taxes = 20;
}

console.log(
  `You've been taxed ${taxes}% as your annual income is ${annualIncome}. `
);

// 10. Bibliotekos knygu skolinimo trukmes patikrinimas.
// Jei skaitytojas yra studentas, jis gali skolintis knyga 30 d.
// Jei skaitytojas yra mokytojas, jis gali skolintis knyga 60 d.
// Jei skaitytojas yra bibliotekos narys, bet nei studentas, nei mokytojas, jis gali skolintis knyga 14d.
// Jei skaitytojas nera bibliotekos narys, jis negali skolintis knygos.

let student = false;
let teachingStaff = false;
let member = true;

if (student) {
  console.log(`Your borrowing duration is 30d`);
} else if (teachingStaff) {
  console.log(`Your borrowing duration is 60d`);
} else if (member) {
  console.log(`Your borrowing duration is 14d`);
} else {
  console.log(
    `You can't borrow books because you are neither a member, a staff member, nor a student.`
  );
}
