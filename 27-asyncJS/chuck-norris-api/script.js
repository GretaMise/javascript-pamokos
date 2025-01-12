const loader = document.getElementById('loader');
const jokeElement = document.getElementById('joke');

function fetchJoke() {
  loader.style.display = 'block';
  jokeElement.textContent = '';

  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.value);
      jokeElement.textContent = data.value;
    })
    .catch((error) => {
      jokeElement.textContent = 'Atsiprasome, pabandykite veliau';

      //   console.log('Error fetching joke', error);
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}
