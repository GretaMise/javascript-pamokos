// // visi heading elementai
// const headingElements = document.querySelectorAll('h1');
// // buttonas nes reikes paspaudus kazka atlikt
// const button = document.getElementById('main-button');

// // padarau kad buttonas klausytu paspaudimo ir paleistu funkcija
// button.addEventListener('click', function () {
//   // Kadangi reikia pereiti per visus headingus, cia tai atlieku
//   headingElements.forEach(function (heading) {
//     // pagal salyga yra pasakyta kad jeigu tekstas yra heading 2 reikia uzdet kitokia klase
//     if (heading.innerText === 'Heading 2') {
//       heading.classList.add('blue-box');
//     } else {
//       heading.classList.add('green-box');
//     }
//   });
// });

const input = document.getElementById('name-input');
const button = document.getElementById('change-name-btn');
const output = document.getElementById('output');

button.addEventListener('click', function () {
  if (!input.value) {
    alert('Iveskite varda!');
    return;
  }

  // Sukuriame h1 tag'a
  const heading = document.createElement('h1');
  // Noriu kad h1 tag'o tekstas butu inputo reiksme
  heading.textContent = input.value;
  // Noriu kad mano div'as turetu viduje sita heading
  output.append(heading);
});
