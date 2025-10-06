// Save Student
const form = document.getElementById('studentForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const studentClass = document.getElementById('class').value;

    const student = { name, roll, class: studentClass };

    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    alert('Student added successfully!');
    form.reset();
  });
}

// Display Students
const tableBody = document.querySelector('#studentsTable tbody');
if (tableBody) {
  const students = JSON.parse(localStorage.getItem('students')) || [];
  students.forEach((s, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${s.name}</td>
      <td>${s.roll}</td>
      <td>${s.class}</td>
      <td><button class="delete" data-index="${index}">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });

  // Delete student
  tableBody.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
      const index = e.target.getAttribute('data-index');
      let students = JSON.parse(localStorage.getItem('students')) || [];
      students.splice(index, 1);
      localStorage.setItem('students', JSON.stringify(students));
      location.reload();
    }
  });
}
