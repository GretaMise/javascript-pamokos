// Uzduoteles, kurias gavo per interviu

// 8. Rasti visu  skaiciu nuo 1 iki 100 suma.

let start = 1;
let end = 100;

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(`The sum is: ${sum}`);

// 9. Rasti visu lyginiu skaiciu nuo 20 iki 50 suma.

let suma = 0;

for (let i = 20; i <= 50; i++) {
  if (i % 2 === 0) {
    suma += i;
  }
}

console.log(`The sum of all even numbers between 20 and 50 is: ${suma}`);

// 10. Rasti visu nelyginiu skaiciu nuo 30 iki 60 suma.

let suma1 = 0;

for (let i = 30; i <= 60; i++) {
  if (i % 2 !== 0) {
    suma1 += i;
  }
}

console.log(`The sum of all odd numbers between 30 and 60 is: ${suma1}`);

// 11. Rasti visu skaiciu, zemesniu uz 1000 ir kurie dalinasi is 3 arba 5, suma. Atsakymas turi buti 233168.
let suma2 = 0;

for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    suma2 += i;
  }
}

console.log(`The sum of all numbers is: ${suma2}`);

// 12. write a program that prints the numbers from 1 to 100. But for multiples of three print 'Fizz' instead of the number and for the multiples of five print 'Buzz'. For numbers which are multiples of both three and five print 'FizzBuzz'.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// 13.(sunkesne) Parasyti for cikla, kuris isvesty norima kiekj fibonaciaus skaiciu i ekrana. Fibonaciaus sekoje kiekvienas skaidius yra lygus pries ji ejusiu dvieju skaidiu sumai: 1, 1, 2, 3, 5, 8, 13, 21...
// 1. Susikurkite tris sveikuju skaiiy kintamuosius, kurie jums padés tai pasiekti.
// 1. Pirmi du kintamieji saugos paskutinius du skaitius.
// 2. Treciasis bus siu pirmy dvieju skaiciu suma.
// 2. Pirmus du skaidius isveskite ne cikle, o pries jj ir cikla pradékite vykdyti nuo 2, o ne nuo 0.
// 3. Kiekvieno ciklo metu turite perskaiciuot treciaji skaiciu (pirmy dvieju skaiciy sudétis), tuomet pirmasis skaidius yra lygus antram, o antrasis lygus treiam, isvesti j ekrana trecia skaiiy.

// Number of Fibonacci numbers to output
const count = 10; // Change this value to output more or fewer Fibonacci numbers

// Step 1: Initialize the first two Fibonacci numbers
let first = 4;
let second = 9;
let sum4;

// Output the first two numbers
console.log(first);
console.log(second);

// Step 2: Start the loop from 2 to count the desired amount of Fibonacci numbers
for (let i = 2; i < count; i++) {
  // Step 3: Calculate the third number (the sum of the first two numbers)
  sum4 = first + second;

  // Output the third number
  console.log(sum4);

  // Update the first and second numbers for the next iteration
  first = second;
  second = sum4;
}
