const input = document.getElementById('name-input');

const button = document.getElementById('change-name-btn');

const errorMessage = document.getElementById('error-message');

const greeting = document.getElementById('greeting');

button.addEventListener('click', function () {
  // Gauname ivesta reiksme kaip string
  const inputValue = input.value;

  console.log(inputValue);

  if (inputValue !== '') {
    greeting.textContent = `Sveiki, ${inputValue}!`;
    errorMessage.style.display = 'none';
  } else {
    errorMessage.textContent = `Iveskite savo varda`;
    errorMessage.style.display = 'block';
  }
});
