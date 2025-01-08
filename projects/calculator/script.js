let firstNumber = 0;
let action = '+';
let answer = 0;

let input = document.getElementById('calc-input');
let calculation = document.getElementById('calculation');

let history = [];

function onNumberClick(number) {
  input.value += number;
}

function onActionClick(clickedAction) {
  input.value += ' ' + clickedAction + ' ';
  action = clickedAction;
}

function onEqualClick() {
  let splitted = input.value.split(' ').map((part) => part.trim());

  if (splitted[0] === '' || splitted[0] === '0') {
    alert('The first number cannot be zero.');
    return;
  }

  let numbers = splitted.map((num) => parseFloat(num.replace(',', '.')));

  calculateAnswer(numbers);

  input.value = answer.toFixed(2).replace('.', ',');
  calculation.innerHTML = `${numbers.join(` ${action} `)} = ${answer
    .toFixed(2)
    .replace('.', ',')}`;
}

function calculateAnswer(numbers) {
  answer = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    switch (action) {
      case '+':
        answer += numbers[i];
        break;
      case '-':
        answer -= numbers[i];
        break;
      case '*':
        answer *= numbers[i];
        break;
      case '/':
        answer /= numbers[i];
        break;
    }
  }
}

function onClearCalculator() {
  firstNumber = 0;
  action = '+';
  answer = 0;
  input.value = '';
  calculation.innerHTML = '';
}
