// 1. Uždavinys: Skaičių suma
// Sukurk tris kintamuosius su skaičiaus tipo reikšmėmis. Apskaičiuok jų sumą ir priskirk ją naujam kintamajam. Atspausdink rezultatą.

let a = 5;
let b = 10;
let c = 15;

a = 1;
b = 2;
c = 3;

let suma = a + b + c;

console.log(suma);

// 2. Uždavinys: Stačiakampio plotas
// Sukurk du kintamuosius - ilgis ir plotis, priskirk jiems bet kokias reikšmes ir apskaičiuok stačiakampio plotą.

let i = 12;
let p = 2;

console.log('Plotas ' + i * p + 'cm');

// 3. Uždavinys: Kvadrato plotas
// Sukurk kintamąjį ir priskirk jam bet kokį skaičių. Apskaičiuok kvadrato plotą ir jį atspausdink.

let k = 4;
console.log('Kvadrato plotas ' + k * k);

// 4. Uždavinys: Vardo pasisveikinimas
// Sukurk kintamąjį vardas ir priskirk jam kokį nors vardą. Programa turi pasisveikinti su tuo vardu. Pvz.: “Labas, Vardeni”.

const vardas = 'Greta';
const sakinys = `Labas, mano vardas ${vardas}.`;

console.log(sakinys);

// 5. Uždavinys: Dvigubas skaičius
// Sukurk kintamąjį skaicius, jam priskirk bet kokią skaitinę reikšmę. Programa turi atspausdinti dvigubą šio skaičiaus reikšmę.

let d = 7;

console.log('Dvigubas skaicius ' + d * 2);

// 6. Uždavinys: Kūno masės indeksas
// Sukurk kintamuosius ūgis ir svoris. Parašyk programą, kuri apskaičiuoja kūno masės indeksą.

let ugis = 1.8;
let svoris = 60;

console.log('KMI ' + svoris / (ugis * ugis));

// 7. Uždavinys: Draugų skaičius
// Sukurk kintamąjį drauguSkaicius, kuriame bus saugomas tavo draugų skaičius. Parašyk programą, kuri prideda 5 naujus draugus ir atspausdina bendrą draugų skaičių.

const drauguSkaicius = [
  { Vardas: 'Tomas' },
  { Vardas: 'Jonas' },
  { Vardas: 'Juste' },
  { Vardas: 'Greta' },
  { Vardas: 'Greta du' },
];

console.table(drauguSkaicius);

// 8. Uždavinys: Kavos užsakymas
// Sukurk kintamuosius kavosKiekis ir kavosKaina. Parašyk programą, kuri suskaičiuoja kavos užsakymo sumą ir ją atspausdina.

const kavosKiekis = 'x';
const kavosKaina = 'z';

const uzsakymas = ` ${kavosKiekis} * ${kavosKaina} `;

console.log('Kavos uzsakymo kaina: ' + uzsakymas);

// 9. Uždavinys: PVM skaičiavimas
// Sukurk kintamuosius kainaBePVM ir pvm, kurie išsaugos prekės kainą ir PVM procentą (pvz., 21). Programa turi apskaičiuoti kainą su PVM.

const kainaBePVM = null;
const PVM = 21;

const sumaPVM = ` ${kainaBePVM} * ${PVM}`;

// console.log('PVM sumos skaiciuokle: ' + (sumaPVM + kainaBePVM));

console.log('PVM sumos skaiciuokle: ' + sumaPVM / 100);

// 10. Uždavinys: Automobilio kuro sąnaudos
// Sukurk kintamuosius nuvaziuotiKm, kuroSanaudos ir kuroKaina. Parašyk programą, kuri apskaičiuoja kiek kainuos nukeliauti nuvaziuotiKm su šiuo automobiliu.

// 11. Uždavinys: Metų skaičius mėnesiais.
// Sukurk kintamąjį metai, kuriame būtų saugomas skaičius, kiek metų. Programa turi apskaičiuoti, kiek tai sudaro mėnesių.

// 12. Uždavinys: Temperatūros perskaičiavimas
// Parašyk programą, kuri konvertuoja temperatūrą iš Celsijaus į Farenheito skalę. Sukurk kintamąjį temperaturaC ir priskirk jam bet kokią reikšmę,
// o tada apskaičiuok temperatūrą Farenheito skalėje. Formulė: F = C * 9/5 + 32
