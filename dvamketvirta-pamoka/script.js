// Ecmascript- standartizuoja JavaScript'a. kalbos standartas, apima JavaScript, HTML5.

// ECMAScript arba ES6 2015

// 1. Atsirado kintamieji const ir let. Jie pakeite senaji var.

if (true) {
  let message = `Sveiki`;
  console.log(message);
}

console.log(mesage); // ReferenceError: message is not defined

// 2. Arrow funkcijos

// Arrow funkcijos yra trumpesnes ir patogesnes, nei senosios funkcijos

console.log(add(2, 3));

const add = (a, b) => a + b;

console.log(add(2, 3));

// 3. Destructing assignments

// Destructing assignments leidzia iskart issitraukti kintamuosius is objekto arba masyvo

const user = {
  name: 'Tomas',
  age: 25,
};

// Senuoju budu

const oldName = user.name;
const oldAge = user.age;

// Naujuoju budu

const { name, age } = user;

console.log(name);
console.log(age);

// 4. Spread operator

//  ... operatorius leidzia iskaidyti masyvo arba objekto turini ir leidzia pripildyti naujomis reiksmemis

const numbers = [1, 2, 3];
const newNumbers = [4, 5];

// Pridedame numbers i newNumbers >>> const newNumbers = [...numbers, 4,5]

// 5. Default parametrai

const greet = (name = 'Vartotojas') => console.log('Sveki!', name);

greet('Greta');
greet();
