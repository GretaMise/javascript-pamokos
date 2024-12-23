const colors = [`red`, `blue`, `green`, `yellow`, `pink`];

const palette = document.getElementById('palette');
const addColorBtn = document.getElementById('add-color-btn');

// Sukuriu funkcija, kuri sukurs spalvos dezute
function createColorBox(color) {
  const box = document.createElement('div');
  box.classList.add('color-box');

  box.style.backgroundColor = color;

  box.addEventListener('click', function () {
    alert(color);
  });

  palette.append(box);
}

// Iskviecia is karto, kadangi nesu nurodziusi sitos logikos atskiroje funkcijoje
colors.forEach((color) => {
  createColorBox(color);
});

// Funkcija, kuri sugeneruos random spalva
function genereateRandomColor() {
  // tik is situ raidziu ir skaiciu sugeneruok man random spalva
  const letters = `0123456789ABSDEF`;
  let color = `#`;
  for (let i = 0; i < 6; i++) {
    color += letters(Math.floor(Math.random() * 16));
  }
  return color;
}

// Paleidziamas tik tada, kai paspaudziamas mygtukas
addColorBtn.addEventListener('click', function () {
  const randomColor = genereateRandomColor();
  createColorBox(randomColor);
});
