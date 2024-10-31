// teksto sujungimas
console.log('Labas' + ' ' + 'rytas');
// arba
console.log('labas ' + 'rytas');

// atskirti teksta
console.log('-----');
console.log('Labas');
console.log('-----');

// alert
// alert("Labas rytas");

document.getElementById('heading').innerHTML = 'Pakeistas tekstas ' + '<3';
document.getElementById('second-heading').innerHTML = 'Antrasis tekstas';

//  eiluciu tarpas (break)
console.log('pirmas \nantras \ntrecias \nketvirtas');

console.log('Greta 25 \nAntra eilute');

console.log(
  'Kur bėga degtinė, kur spiritas teka \nTen mūsų tėvynė graži Lietuva. \nTen broliai “pijokai” rusiškai šneka \nTen skamba po kaimus \nMinedo daina.'
);

console.table(['***', '* *', '***']);

console.log('*** \n* * \n***');

console.log('*');
console.log('**');
console.log('***');

console.log('* \n** \n***');

// alert('Ivyko klaida');

console.table((1)[('Tomas', 'Jonas', 'Juste')]) &
  console.table((2)[('24', '26', '25')]);

const people = [
  { Vardas: 'Tomas', Amzius: 24 },
  { Vardas: 'Jonas', Amzius: 26 },
  { Vardas: 'Juste', Amzius: 25 },
];

console.table(people);
