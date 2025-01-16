// postman.com galima testuoti API. JSONPlaceholder pasitikrinti, ka galima irasyti tame API Postman, kad gautume info.

const searchInput = document.getElementById('searchInput');
const moviesContainer = document.getElementById('moviesContainer');
let debounceTimer;

const fetchMovies = async (query = '') => {
  const api = 'https://api.tvmaze.com/shows';
  const searchApi = `https://api.tvmaze.com/search/shows?q=${query}`;
  const url = query ? searchApi : api;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMovies(query ? data : data.map((show) => ({ show })));
  } catch (error) {
    console.error(error);
  }
};

const displayMovies = (movies) => {
  moviesContainer.innerHTML = '';
  // Jei nera fimu - isvedame pranesima
  if (!movies.length) {
    moviesContainer.innerHTML = '<p>Filmu nerasta</p>';
    return;
  }

  // console.log(movies);
  movies.forEach((item) => {
    const movie = item.show;
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
    <img src="${movie.image ? movie.image.medium : ''}" alt="filmo nuotrauka">
    <h3>${movie.name}</h3>
    <p>Rating: ${movie.rating.average}</p>
    <p>${movie.genres.join(', ')}</p>

    `;
    moviesContainer.appendChild(movieCard);
  });
};

searchInput.addEventListener('input', (event) => {
  const inputValue = event.target.value;

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    fetchMovies(inputValue);
  }, 500);
});

fetchMovies();

//     <p>${movie.summary}</p>
