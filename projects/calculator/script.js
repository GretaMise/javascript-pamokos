let firstNumber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;

let input = document.getElementById('calc-input');
let calculation = document.getElementById('calculation');

function onNumberClick(number) {
  input.value += number;
}

function onActionClick(clickedAction) {
  input.value += ' ' + clickedAction + ' ';
  action = clickedAction;
}

function onEqualClick() {
  // 5 * 2
  let splitted = input.value.split(' ');
  //   ['5', '*', '2']
  //   5
  firstNumber = parseInt(splitted[0]);
  //   *
  action = splitted[1];
  //   2
  secondNumber = parseInt(splitted[2]);
  //   iskvieciame skaiciavimo funkcija
  calculateAnswer();
  input.value = answer;

  calculation.innerHTML = `${firstNumber} ${action} ${secondNumber}`;
}

function calculateAnswer() {
  // action = '+' arba dalybai arba minusui...
  switch (action) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    case '/':
      answer = firstNumber / secondNumber;
      break;
  }
}

function onClearCalculator() {
  let firstNumber = 0;
  let secondNumber = 0;
  let action = '+';
  let answer = 0;
  input.value = ' ';
  calculation.innerHTML = '';
}
