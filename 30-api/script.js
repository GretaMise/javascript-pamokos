// REST API - dazniausiai naudosim
const searchInput = document.getElementById('searchInput');
const productsContainer = document.getElementById('productsContainer');
let debounceTimer;

const fetchProducts = async (query = '') => {
  const api = 'https://fakestoreapi.com/products';
  // const searchApi = `https://fakestoreapi.com/search/?q=${query}`;
  const url = query ? searchApi : api;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayProducts(query ? data : data.map((product) => ({ product })));
  } catch (error) {
    console.error(error);
  }
};

const displayProducts = (products) => {
  productsContainer.innerHTML = '';
  if (!products.length) {
    productsContainer.innerHTML = '<p>Produktu nerasta</p>';
    return;
  }

  products.forEach((item) => {
    const product = item.product;
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="produkto nuotrauka">
      <h3>${product.title}</h3>
      <p>Price: ${product.price}</p>
    `;

    productsContainer.appendChild(productCard);
  });
};

searchInput.addEventListener('input', (event) => {
  const inputValue = event.target.value;

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    fetchProducts(inputValue);
  }, 500);
});

fetchProducts();
