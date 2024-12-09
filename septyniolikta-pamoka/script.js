// Sukurkite funkcija, kuri isvesty 10 atsitiktiniu skaiciu vienoje eiluteje, skaitius atskiriant tarpu. Sia funkcija iskvieskite 5 kartus.

function randomNumbers() {
  let ranNum = [];
  for (let i = 0; i < 10; i++) {
    const skaiciukas = Math.floor(Math.random() * 100);
    ranNum.push(skaiciukas);
  }

  console.log(ranNum.join(' '));
}

for (let j = 0; j < 5; j++) {
  randomNumbers();
}
//  8. Sukurkite funkcija, kuri isvesty atsitiktini skaidiy. U funkcijos ribu sukurkite cikla, kuri buty vykdomas 10 karty. Iskvieskite sukurta funkcija cikle. Turetumète pamatyti 10 atsitiktiniy skaidiy.

function isvestiAtsitiktiniSkaiciu() {
  const skaicius = Math.floor(Math.random() * 100);
  console.log(skaicius);
}

for (let i = 0; i < 10; i++) {
  isvestiAtsitiktiniSkaiciu();
}

// Sukurkite funkcija pasisveikinimui, siai funkcijai per argumentus perduokite varda, funkcijoje isveskite teksta labas ir gauta varda. Sukurkite kita funkcija, kuri irgi per argumentus gauty varda, taciau pasakytu 'viso gero' ir pati varda. Ne funkcijose susikurkite kintamaji vardui saugoti ir jrasykite varda. Iskvieskite abi funkcijas, perduodant kintamaji joms.

function pasisveikinimui(vardas) {
  console.log('Labas, ' + vardas);
}

function atsisveikinimui(vardas) {
  console.log('Viso gero, ' + vardas);
}

let vardas = 'Greta';

pasisveikinimui(vardas);
atsisveikinimui(vardas);

// 10. Sukurkite funkcija, kuriai perduotuméte du skaicius. Si funkcija turi rasti kuris skaicius yra didesnis ir isvesti gauta atsakyma, o jei skaiciai lygus - tuomet isvesti, kad skaiciai lygus. Iskvieskite sia funkcija keleta karty, duodant skirtingus skaidius.

function palygintiSkaiciukus(skaicius1, skaicius2) {
  if (skaicius1 > skaicius2) {
    console.log(skaicius1 + ' yra daugiau uz ' + skaicius2 + '.');
  } else if (skaicius1 < skaicius2) {
    console.log(skaicius2 + ' yra daugiau uz ' + skaicius1 + '.');
  } else {
    console.log('Sie skaiciai yra lygus: ' + skaicius1 + ' = ' + skaicius2);
  }
}

palygintiSkaiciukus(5, 10);
palygintiSkaiciukus(20, 15);
palygintiSkaiciukus(7, 7);
palygintiSkaiciukus(3, 8);
palygintiSkaiciukus(12, 12);

// tikrina temperatura <--- lektoriaus pavyzdukas

function checkWeather(temperature, isRaining) {
  if (temperature < 0) {
    return `Ispejimas: Lauke minusas, atsargiai vairuokite!`;
  } else if (isRaining) {
    return `Ispejimas: Lauke lyja, slidus kelias!`;
  } else if (temperature > 30) {
    return `Ispejimas: Lauke karsta! Nepalikite augintiniu!`;
  } else {
    return ``;
  }
}

console.log(checkWeather(40, false));

//  Dar vienas pavyzdukas is destytotjo. Su turner operatoriumi
function checkTicketPrice(age) {
  switch (age) {
    case 1:
      return `Kaina: 1 Eur.`;
      break;
    case 2:
      return `Kaina 2 Eur`;
      break;
    default:
      return ` Kaina 10 Eur`;
  }
}

console.log(checkTicketPrice(3));

// FUNKCIJU PAVADINIMAI:
//  a. Kai norime gauti duomenis

function getUserName() {
  return `username123..`;
}

function checkWeath() {
  return `sunny`;
}

function retrieveOrderDetails() {
  return `order details ...`;
}

// b. Kai norime atlikti veiksma pvz. nustatyti duomenis arba juos pakeisti

function setUserName(name) {
  console.log(`setting username to: ` + name);
}

function updateWeather(temperature) {
  console.log(`Updating temperature to ` + temperature);
}

function changePassword(newPassword) {
  console.log(`Changing password to: ` + newPassword);
}

// c. Tikrinimas arba validacija (boolean reiksmes irgi)

function isEmailValid(email) {
  return email.includes(`@`);
}

function hasPermission(role) {
  return role === `admin`;
}

function hasPermiss(role) {
  return role === `admin`;
}
console.log(hasPermiss(`admin`));

// dar vienas pavyzdukas

function hasPermissions(role) {
  return role === 'admin';
}

function deletePost(role, postName) {
  if (hasPermissions(role)) {
    console.log(`Postas su pavadinimu: "${postName}" buvo istrintas.`);
  } else {
    console.log(
      `Klaida. vartotojas su role "${role.toUpperCase()}" neturi teises istrinti irasu.`
    );
  }
}

deletePost('admin', 'Kaip investuoti pinigus?');

// 11. Sukurkite funkcija, kuri per argumentus gauty automobiliy duomenis (marke, modelis, gamybos metai, darbinis turis). Si funkcija turety siuos duomenis isvesti kaip nors graziai formatuotai. lskvieskite sia funkcija du kartus, perduodant skirtingus duomenis jai.

function isvestiAutomobilius(marke, modelis, gamybosMetai, darbinisTuris) {
  console.log('--- Automobilio Duomenys ---');
  console.log('Markė: ' + marke);
  console.log('Modelis: ' + modelis);
  console.log('Gamybos Metai: ' + gamybosMetai);
  console.log('Darbinis Turis: ' + darbinisTuris + ' L');
  console.log('---------------------------\n');
}

isvestiAutomobilius('Toyota', 'Corolla', 2020, 1.8);
isvestiAutomobilius('BMW', 'X5', 2018, 3.0);

// 12. Sukurkite funkcija sumai skaiciuoti, si funkcija per argumentus turetu gauti du skaicius, bei isvesti pati veiksma kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias pacias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar viena, funkcija, kuri sugeneruoty du atsitiktinius skaidius, bei iskviesty kitas 4 funkcijas, perduodant joms sugeneruotus skaitius. Sia bendraja funkcija iskvieskite keleta karty.

function suma(skaicius1, skaicius2) {
  const rezultatas = skaicius1 + skaicius2;
  console.log(skaicius1 + ' + ' + skaicius2 + ' = ' + rezultatas);
}

function skirtumas(skaicius1, skaicius2) {
  const rezultatas = skaicius1 - skaicius2;
  console.log(skaicius1 + ' - ' + skaicius2 + ' = ' + rezultatas);
}

function sandauga(skaicius1, skaicius2) {
  const rezultatas = skaicius1 * skaicius2;
  console.log(skaicius1 + ' * ' + skaicius2 + ' = ' + rezultatas);
}

function dalmuo(skaicius1, skaicius2) {
  if (skaicius2 !== 0) {
    const rezultatas = skaicius1 / skaicius2;
    console.log(skaicius1 + ' / ' + skaicius2 + ' = ' + rezultatas);
  } else {
    console.log('Negalima dalinti is nulio!');
  }
}

function generuotiIrIskvieti() {
  const skaicius1 = Math.floor(Math.random() * 100);
  const skaicius2 = Math.floor(Math.random() * 100);
  console.log('Sugeneruoti skaičiai: ' + skaicius1 + ', ' + skaicius2);

  suma(skaicius1, skaicius2);
  skirtumas(skaicius1, skaicius2);
  sandauga(skaicius1, skaicius2);
  dalmuo(skaicius1, skaicius2);
}

generuotiIrIskvieti();
generuotiIrIskvieti();
generuotiIrIskvieti();

// 13. Susikurkite funkcija, kuri per argumentus priimty Zodziy masyva. Funkcijoje isveskite visus Zodzius is masyvo atskirose eilutèse, nurodant zodio ilgi (simboliy kiek). Uz funkcijos ribu susikurkite Zodziy masyva ir upildykite ji duomenimis. Iskvieskite sukurta funkcija perduodant turima masyva.
function isvestiZodzius(zodziai) {
  for (let i = 0; i < zodziai.length; i++) {
    console.log(zodziai[i] + ' (ilgis: ' + zodziai[i].length + ' simboliai)');
  }
}

const zodziuMasyvas = ['obuolys', 'bananas', 'kriause', 'kivis', 'apelsinas'];

isvestiZodzius(zodziuMasyvas);

// 14. Susikurkite funkcija, kuri per argumentus priimty skaiciy masyva. Funkcija turety atspausdinti visus skaicius, salia jy isvedant to skaiciaus kvadrata ir ji padalinta is dvieju. Ut funkcijos ribu susikurkite du skaiiy masyvus ir upildykite ji duomenimis. Iskvieskite funkcija du kartus, kiekviena karta perduodant skirtinga turima masyva.

function atspausdintiSkaicius(masyvas) {
  for (let i = 0; i < masyvas.length; i++) {
    const skaicius = masyvas[i];
    const kvadratas = skaicius * skaicius;
    const puse = skaicius / 2;

    console.log(
      'Skaicius: ' + skaicius + ', Kvadratas: ' + kvadratas + ', Pusė: ' + puse
    );
  }
}

const masyvas1 = [1, 2, 3, 4, 5];
const masyvas2 = [10, 20, 30, 40, 50];

atspausdintiSkaicius(masyvas1);
console.log('-------------------');
atspausdintiSkaicius(masyvas2);

// Susikurkite funkcija, kuri per argumentus priimty pazymiy masyva, bei studento varda su pavarde. Funkcija turety isvesti studento varda ir pavarde, jo pazymius. Taip pat, suskaiciuoti vidurki, bei jj isvesti. Uz funkcijos ribu susikurkite reikiamus kintamuosius ir masyvus, arba objektus studenty pazymiams saugoti ir upildykite juos duomenimis. Iskvieskite sia funkcija perduodant visus reikalingus duomenis.
function isvestiStudentoDuomenis(vardas, pavarde, pazymiai) {
  console.log('Studento vardas: ' + vardas + ' ' + pavarde);

  console.log('Pazymiai: ' + pazymiai);

  let suma = 0;
  for (let i = 0; i < pazymiai.length; i++) {
    suma += pazymiai[i];
  }
  const vidurkis = suma / pazymiai.length;

  console.log('Vidurkis: ' + vidurkis.toFixed(2));
}

const studentas1 = {
  vardas: 'Jonas',
  pavarde: 'Jonaitis',
  pazymiai: [8, 9, 10, 7, 6],
};

const studentas2 = {
  vardas: 'Ona',
  pavarde: 'Onaite',
  pazymiai: [10, 10, 9, 8, 9],
};

isvestiStudentoDuomenis(
  studentas1.vardas,
  studentas1.pavarde,
  studentas1.pazymiai
);
console.log('-------------------');
isvestiStudentoDuomenis(
  studentas2.vardas,
  studentas2.pavarde,
  studentas2.pazymiai
);
