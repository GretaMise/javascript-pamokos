/* INSTRUKCIJOS:
Papildykite projektą:
    - Apskaičiuokite kiek kepalų duonos gali pagaminti kepykla per diena.
    - Atvaizduokite kiek kepalų duonos reikia iškepti.
    - Nurodykite "Taip" arba "Ne" ar kepykla spės iškepti visą reikiamą duonos kiekį.
    - Viskas turi būti atvaizduota HTML dokumente.
*/

// Bendra funkcija
function calculateBreadProduction() {
  // Susikurti ir apsirasyti kintamuosius
  const employeeCount = parseInt(
    document.getElementById('employee-count').value
  );
  const loavesPerEmployee = parseInt(
    document.getElementById('loaves-per-employee').value
  );
  const orderCount = parseInt(document.getElementById('order-count').value);

  // validumas
  if (isNaN(employeeCount) || isNaN(loavesPerEmployee) || isNaN(orderCount)) {
    alert('Prasome ivesti teisingus skaicius/kieki.');
    // padarom return, kad toliau kodo nebeskaitytu, iseitu is funkcijos
    return;
  }

  if (employeeCount < 0 || loavesPerEmployee < 0 || orderCount < 0) {
    alert('Kiekis negali buti neigiamas.');
    return;
  }

  // Suma, kiek bulku gali pagaminti duoti darbuotojai
  const totalLoavesProduced = employeeCount * loavesPerEmployee;

  // Ar uzsakymas bus ivykdytas?
  const canMeetOrder = totalLoavesProduced >= orderCount;

  // Ka rodys
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
        <p>Kiek kepalu kepykla gali pagaminti per diena: <strong>${totalLoavesProduced}</strong></p>
        <p>Kiek reikia paruosti uzsakymui: <strong>${orderCount}</strong></p>
        <p>Ar uzsakymas bus ivykdytas: <strong>${
          canMeetOrder ? 'Taip' : 'Ne'
        }</strong></p>
    `;
}

// Anuliuoti visus duomenis formoje
function resetForm() {
  document.getElementById('employee-count').value = 0;
  document.getElementById('loaves-per-employee').value = 0;
  document.getElementById('order-count').value = 0;
  document.getElementById('results').innerHTML = '<p>Kol kas nieko nera.</p>';
}

// Prisideti eventlisteneriu mygtukai.
document
  .getElementById('calculate')
  .addEventListener('click', calculateBreadProduction);
document.getElementById('reset').addEventListener('click', resetForm);
