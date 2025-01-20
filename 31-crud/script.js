// json-server yra skirta sukurti netikra API serverio prieiga.
// Galesim pasiekti su GET, POST, PUT, PATCH, DELETE.
// json-server --version <<< pasitikrinu ar yra instaliuotas json-server ir ar grazina versija
// json-server --watch path_iki_failo.json << paleidzia serveri ir nustato kelia iki failo, kuris taps duomenu baze

const apiUrl = 'http://localhost:3000/students';
// GET - grazina duomenis is API

async function getStudents() {
  try {
    // laukti kol fetch paims duomenis is url
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Nepavyko gauti studentu saraso!');
    }
    const students = await response.json();
    const studentList = document.getElementById('student-list');
    students.forEach((student) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.id}</td>
         <td>${student.name}</td>
         <td>${student.surname}</td>
          <td>${student.age}</td>
          <td>
          <button onclick="editStudent('${student.id}', '${student.name}', '${student.surname}', '${student.age}')">Redaguoti</button>
             <button onclick="deleteStudent('${student.id}')" >Istrinti</button>

          </td>
    `;
      studentList.appendChild(row);
    });
  } catch (error) {
    console.error(error);
    alert('Klaida gaunant studentu sarasa');
  }
}

// POST - sukurti nauja irasa

document
  .getElementById('add-student-form')
  .addEventListener('submit', async (event) => {
    // preventDefault - neleidzia puslapiui persikrauti
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    //Patikriname, ar isveda duomenis
    // console.log(name, age);

    try {
      const response = await fetch(apiUrl, {
        // nurodau, kad siunciu POST request, kuris sukuria nauja irasa
        method: 'POST',
        // nurodau, kad siunciu duomenis json formatu i serveri
        headers: {
          'Content-Type': 'application/json',
        },
        // nurodau kokius duomenis siunciu i serveri. Siuo atveju - name ir age objekta
        body: JSON.stringify({
          name,
          surname,
          age,
        }),
      });

      if (!response.ok) {
        throw new Error('Nepavyko sukurti naujo studento!');
      }
    } catch (error) {
      console.error('Klaida kuriant nauja studenta!');
      alert('Klaida kuriant nauja studenta!!');
    }
  });

// PATCH - atnaujinti irasa

async function editStudent(id, name, surname, age) {
  const newName = prompt('Naujas vardas:', name);
  const newSurname = prompt('Nauja pavarde:', surname);
  const newAge = prompt('Naujas amzius:', age);

  if (newName && newAge) {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newName,
          surname: newSurname,
          age: Number(newAge),
        }),
      });

      if (!response.ok) {
        throw new Error('Nepavyko redaguoti studento!');
      }
    } catch (error) {
      console.error('Klaida');
      alert('Klaida!!!');
    }
  }
}

// DELETE -istrinti irasa

async function deleteStudent(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Nepavyko istrinti studento!');
    }
  } catch (error) {
    console.error('Klaida');
    alert('Klaida trinant studenta');
  }
}

getStudents();
