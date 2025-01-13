//async await
// tai yra sintakses cukrus, kuris leidzia rasyti asinchronini koda, taciau ji kontroliuoti kaip sinchronini

// PVZ:
//Async zodis pavercia funkcija i promise

// async function getTodos() {
//   // noriu, kad mano konstanta butu lygi fetch funkcijai, kuri grazina duomenis is API.
//   // await naudojama tik su async funkcija, nes laukiame, kol promise (fetch) grazins duomenis
//   const response = await fetch('./api/todo.json');

//   if (response.status !== 200) {
//     throw new Error('Error fetching data');
//   } else {
//     return await response.json();
//   }
// }

//   console.log(response);
//   throw new Error('Failed to fetch data');

// getTodos()
//   .then((duomenys) => {
//     console.log(duomenys);
//   })
//   .catch((error) => {
//     console.log('Klaida:', error);
//   });

//  Pratimai:

// 11. Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija turėtų vykdyti callback funkciją po 2s.

//sukuriam funkcija, kuri priima callback funkcija kaip parametra
function delayedHello(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

// sukuriam callback funkcija
function sayHello() {
  console.log('Hello!');
}

//iskvieciame delayedHello funkcija ir perduodam sayHello funkcija kaip parametra
delayedHello(sayHello);

// 2. Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su duomenimis.
// async function fetchData(todoUrl) {
//   try {
//     const response = await fetch(todoUrl);
//     if (!response.ok) {
//       throw new Error(`error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('error fetching data:', error);
//     throw error;
//   }
// }

// const todoUrl = './api/todo.json';

// fetchData(todoUrl)
//   .then((data) => {
//     console.log('Fetched data:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// //    antras budas, kuri rode destytojas

// const fetchIngredients = async () => {
//   const response = await fetch('sukurtiFetchIngredientsJsonFaila');

//   if (!response.ok) {
//     throw new Error(`error! no data received`);
//   } else {
//     //grazina duomenis
//     return await response.json();
//   }
// };

// fetchIngredients()
//   .then((duomenys) => {
//     console.log(duomenys);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// 3. Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę. Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie): pirmojiFunkcija(masyvas, callbackFunkcija)

function arLyginiaiSkaiciai(masyvas, callback) {
  for (const item of masyvas) {
    callback(item);
  }
}

function callback(num) {
  const isEven = num % 2 === 0;

  console.log(`${num} yra ${isEven ? 'lyginis' : 'nelyginis'}`);
}

const skaiciuMasyvas = [1, 2, 3, 4, 5, 6, 7, 8];

arLyginiaiSkaiciai(skaiciuMasyvas, callback);

// 4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi grąžinti atsiųsto "string" ilgį. - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija) - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo nariui iškviest funkciją koksIlgis(string)

function patikrinkZodzioIlgi(masyvas, callbackFunkcija) {
  masyvas.forEach((zodis) => {
    const ilgis = callbackFunkcija(zodis);
    console.log(`Zodis "${zodis}" turi ${ilgis} raidziu.`);
  });
}

function koksIlgis(string) {
  return string.length;
}

const zodziuMasyvas = ['Vienas', 'Du', 'Trys', 'Keturi', 'Penki'];
patikrinkZodzioIlgi(zodziuMasyvas, koksIlgis);

// 5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir callback funkciją.
//Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten esantį objektą (tarkim tai automobilis,
//turintis šias properties: rida, markė, modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra))
//callback funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik atrinktos
//objekto properties, tarkim tik markė ir modelis)

function patikrinkAutomobilius(automobiliuMasyvas, callbackAutomobiliai) {
  const patikrinkAutomobilius = automobiliuMasyvas.map((automobilis) => {
    return callbackAutomobiliai(automobilis);
  });
}

function atrinkMasinas(automobilis) {
  return {
    marke: automobilis.marke,
    modelis: automobilis.modelis,
  };
}

const automobiliuMasyvas = [
  {
    rida: 10000,
    marke: 'Toyota',
    modelis: 'Corolla',
    gamybosMetai: 2015,
    kaina: 5000,
  },
  {
    rida: 20000,
    marke: 'Honda',
    modelis: 'Civic',
    gamybosMetai: 2018,
    kaina: 7000,
  },
  {
    rida: 30000,
    marke: 'Ford',
    modelis: 'Focus',
    gamybosMetai: 2020,
    kaina: 9000,
  },
];

const patikrinkAutomobilius = patikrinkAutomobilius(
  automobiliuMasyvas,
  atrinkMasinas
);
console.log(patikrinkAutomobilius);

// 6. Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą, kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą. Iškvieskite tą funkciją naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje.

// 7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18, jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau nei 18". Iškvieskite šią funkciją naudojantis then ir catch.
