// Norime padaryti h1 centruota per viduri puslapio

// 1. susiarndame h1 elementa
const heading = document.querySelector('h1');

// 2. pakeiciame jo stiliu, kad jis butu centruotas

heading.style.textAlign = 'center';

// 3. Susirandame mygtukus ir dezute kuriai keisime spalva

const colorBox = document.getElementById('color-box');

const redButton = document.getElementById('btn-red');
const greenButton = document.getElementById('btn-green');
const resetButton = document.getElementById('btn-reset');

// redButton.addEventListener('click', function () {
//   alert('raudona');
// });
// greenButton.addEventListener('click', function () {
//   alert('zalia');
// });
// resetButton.addEventListener('click', function () {
//   alert('reset');
// });

redButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'red';
  colorBox.style.border = '3px solid violet';
});

greenButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'green';
  colorBox.style.border = '20px dotted red';
});

resetButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'blue';
  colorBox.style.borderRadius = '50%';
  colorBox.style.width = '300px';
});

// FYI: paspaudus "zalia" mygtuka po "reset", plotis ir radius isliks, nes kituose paspaudimuose nesam apsirase 'width' ir 'radius'. Tokiu paciu principu veikia ir jei po "zalio" mygtuko paspaustume "reset"- dotted border lieka, kadangi jo "reset" mygtuke nesame apsirase.
