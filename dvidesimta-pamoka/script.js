// DOM - reprezentuoja HTML dokumentu kaip objektu medi.

// HTML selektoriai

// 1. Pagal elemento ID

const element = document.getElementById('unikalusId');

// 2. Pagal elemento klase

const elementByClassName = document.getElementsByClassName('klasesPavadinimas');

// 3. Pagal visus tam tikro tipo elementus
// pvz. p, span, h1, div, a, section, etc..
const elementsByTagName = document.getElementsByTagName('p');

// 4. Pirmo elemento pasirinkimas

const firstElement = document.querySelector('.klasesPavadinimas');

// 5. Visu elementu pasirinkimas pagal selektoriu

const allElements = document.querySelectorAll('.klasesPavadinimas');

// pvz:
// Vieno elemento radimas kito elemento viduje

const container = document.querySelector('.klasesPavadinimas');
container.querySelector('span');

// Modifikavimas

// 1. Elemento HTML turinio keitimas

element.innerHTML = '<p>Sveiki</p>';

// 2. Elemento teksto keitimas

element.textContent = 'Sveiki<3';

// 3. Elemento klases pridejimas

element.classList.add('naujaKlase');

// pakeisti stiliu

element.style.color = 'red';
element.style.padding = '100px';
element.style.margin = '50px';
