// 16. Susikurkite funkcija, kuri per argumentus priimty skaiciy masyva. Funkcija turéty rasti didziausia skaiciy is masyvo bei isvesti gauta atsakymus. Taip pat, susikurkite funkcija, kuri per argumentus priimty masyva ir i ji sugeneruotu pasirinkta kiekj atsitiktiniy skaidiu. Susikurkite tris tuscius masyvus. Iskvieskite atsitiktiniu skaiciu generavimo funkcija tris kartus, kiekviena karta perduodant funkcijai vis kita masyva. Kai duomenys bus uzpildyti, masyvuose esancia informacija issiveskite norimu budu (per console.log arba per dar atskira funkcija). Tuomet kvieskite didiausio skaiciaus paieskos funkcija tris kartus, kiekviena karta perduodant skirtinga masyva i ja.

function findBiggestNumber(numbers) {
  let biggestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggestNumber) {
      biggestNumber = numbers[i];
    }
  }
  console.log(`Didziausias skaicius masyve yra: `, biggestNumber);
}

findBiggestNumber([5, 3, 9]);

function generateRandomNumber(numbers, amount) {
  for (let i = 0; i < amount; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
  }
}

let masyvas = [];

generateRandomNumber(masyvas, 10);

console.log(masyvas);
