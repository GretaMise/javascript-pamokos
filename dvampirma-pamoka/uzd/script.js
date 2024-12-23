// funkcija, kuri parodys surinkta informacija formoje, nes button palikome "nuoroda", kad onclick rodytu info- showInfo

function showInfo() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const color = document.getElementById('color').value;

  const output = `Vardas: ${name}<br>Amzius: ${age}<br>Megstama spalva: ${color}`;

  // mygtukas neveikia ;///
  //   document.getElementById('button').addEventListener('click', showInfo);

  //   sitas surenka naujai ivesta info
  document.getElementById('output').innerHTML = output;

  //   sitas atvaizduoja naujai ivesta info svetaineje
  document.getElementById('result').style.display = 'block';

  // cia delete mygtukas
  //   ISKELTAS UZ F-JOS NEVEIKS, TURI BUTI JOS VIDUJE
  const resetButton = document.getElementById('reset');

  resetButton.addEventListener('click', function () {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('color').value = '';

    document.getElementById('output').innerHTML = '';

    document.getElementById('result').style.display = 'none';
  });
}

function deleteEntry() {
  // istrina ta info?
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('color').value = '';

  // istrina ta info, kuri buvo surinkta
  document.getElementById('output').innerHTML = '';
  // istrina/paslepia surinkta info is rodymo t.y. output
  document.getElementById('result').style.display = 'none';
}
