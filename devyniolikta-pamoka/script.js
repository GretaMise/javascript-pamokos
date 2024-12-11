// 23. uzd

// Funkcija kuri suskaiciuos
function sumaMasyve(skaiciai) {
  // suma kuri taps kitu skaiciumi kai baigs skaiciuoti
  let suma = 0;
  // Skaiciuoju suma tiek kartu kiek yra masyve nariu
  for (let i = 0; i < skaiciai.length; i++) {
    suma += skaiciai[i];
  }

  // Kai viska apskaiciuoja ir turi rezultata grazina galutini skaiciu
  return suma;
}

const masyvas = [10, 30, 50, 70];
const masyvas2 = [45, 13, 512, 12];

const suma = sumaMasyve(masyvas);
const suma2 = sumaMasyve(masyvas2);

console.log('Suma pirmame masyve:', suma);
console.log('Suma antrame masyve:', suma2);

if (suma > suma2) {
  console.log('Pirmo masyvo suma yra didesne');
} else if (suma2 > suma) {
  console.log('Antro masyvo suma yra didesne');
} else {
  console.log('Suma yra lygi');
}

// 24.

// Funkcija kuri priims zodziu masyva pvz ['obuolys', 'kriause', 'bananas'];
function findLongestWord(zodziai) {
  // Man reikia kazkokio pirminio zodzio kuris egzistuoja masyve, ir as galesiu ji prilyginti kitiems zodziams;
  let longestWord = zodziai[0];

  // Suksiu cikla tol kol patenkins mano if salyga
  for (let i = 1; i < zodziai.length; i++) {
    if (zodziai[i].length > longestWord.length) {
      longestWord = zodziai[i];
    }
  }

  // Grazins zodi;
  return longestWord;
}

const zodziuMasyvas = [
  'obuolys',
  'kriausebananananas',
  'bananas',
  'bananananas',
];
const ilgiausiasZodis = findLongestWord(zodziuMasyvas);

console.log(ilgiausiasZodis);

// 25. Susikurkite funkcija kuri per argumentus priimty patymiy masyva. Ji turetu patikrinti ar visi pazymiai teigiami: jei visi teigiami turety grazinty true kaip atsakyma, o jei yra bent vienas neigiamas - false. Susikurkite du pazymiu masyvus. Iskvieskite sia funkcija du kartus, abu kartus perduodant skirtingus masyvus. Gautus atsakymus paverskite i teksta (jeigu gavote true - isveskite teksta 'visi studento paymiai teigiami', jei false - 'studentas turi bent viena neigiama pazymi'). Siam iskonvertavimui is true/false i teksta galite paméginti pasikurti atskira funkcija, jai perduoti kitos.

function arVisiPazymiaiTeigiami(pazymiai) {
  for (let i = 0; i < pazymiai.length; i++) {
    if (pazymiai[i] < 5) {
      //issikelt 5
      return false;
    }
  }
  return true;
}

function konvertuotiIteksta(result) {
  return result
    ? 'Visi studento pazymiai teigiami'
    : 'Studentas turi bent viena neigiama pazymi';
  //   if (result) {
  //     return `Visi studento pazymiai teigiami`;
  //   } else {
  //     return `Studentas turi bent viena neigiama pazymi`;
  //   }
}

const pazymiai1 = [6, 7, 8, 9, 10];
const pazymiai2 = [10, 4, 9, 8, 7];

const rezultatas1 = arVisiPazymiaiTeigiami(pazymiai1);
console.log(konvertuotiIteksta(rezultatas1));
const rezultatas2 = arVisiPazymiaiTeigiami(pazymiai2);
console.log(konvertuotiIteksta(rezultatas2));
