console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

console.log(3);

// Asinchroninis JS leid=ia nestabdyti veiksmo. Tam veiksmui, kuris nera ivykdytas, pridedamas callback parametras. Callback funkcija vykdo procesus po to, kai duomenys pabaigs krautis.
// Asinchrininis kodas - nevykdomas pagal eile, o pagal ivykius, kuriuos mes nustatome.

//  1. Veiksmas
console.log(`Grizau namo`);
//  2. Veiksmas
console.log(`Uzsisakiau pica`);
//  3. Veiksmas (callback)
// setTimweout funkcija - funkcija, kuri paleidzia nurodyta koda po nurodyto laiko.
// Netinka naudoti, kai nezinome, kada kodas turetu buti paleistas.
setTimeout(() => {
  console.log(`Pica atvyko`);
  console.log(`Pradejau valgyti pica`);
}, 10000);
// uzdejom 10 000ms(10 sekundziu) virsuje.
//  4. Veiksmas
console.log(`Nusimoviau batus`);
console.log(`Nusimaudziau`);

// API - application programming interface (programuotojo rysys)
// API - programavimo sasaja, kuri leidzia mums naudotis kitu programu funkcijomis arba duomenimis.
// PVZ.: https://jsonplaceholder.typicode.com/todos/1

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

//   PROMISES
// Promises- tai objektas, kuris leidzia tvarkyti asinchroninius veiksmus. Jis veikia pagal principa:
// Laukia kol veiksmas bus uzbaigtas ir tada grazina rezultata arba klaida.
// Promises buna trys busenos:
// 1. Pending - laukia, kol veiksmas bus uzbaigtas.
// 2. Fullfilled - veiksmas buvo uzbaigtas sekmingai.
// 3. Rejected - veiksmas baigtas su klaida.

// pati fetch funkcija yra pazadas (promise),kad padarys, kad atnes duomenis.

// Jei API neegzistuoja- nieko neatnesa, tuscia buna.
// Bet tokiais atvejais galima apsirasyti catch- pagauna error ir ji atvaizduoja tuomet.

fetch('https://jsonplaceholder.typicode.c')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

//   PAVYZDUKAS

// Funkcija, kuri imituos kavos uzsakyma.

const orderCoffee = (coffeeType) => {
  return new Promise((resolve, reject) => {
    console.log('Uzsakymas yra priimtas...');

    setTimeout(() => {
      if (coffeeType === 'latte') {
        // resolve - funkcija, kuri grazina sekminga rezultata.
        resolve(`Latte yra paruosta`);
      } else {
        // reject - funkcija, kuri grazina klaida.
        reject(`Atsiprasome, bet siuo metu sios kavos neturime`);
      }
    }, 5000);
  });
};

// Galime naudoti .then ir .catch metodus, nes orderCoffee funkcija grazina Promise objekta.
orderCoffee('latte')
  .then((message) => {
    // message - tai yra resolve funkcijos grazinamas rezultatas.
    console.log('Barista sako:', message);
  })
  .catch((error) => {
    // error - tai yra reject funkcijos grazinama klaida.
    console.log('Barista sako:', error);
  });
