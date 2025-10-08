// Save Attendance
const form = document.getElementById('attendanceForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('empName').value;
    const status = document.getElementById('status').value;
    const date = new Date().toLocaleDateString();

    const record = { name, status, date };
    let attendance = JSON.parse(localStorage.getItem('attendance')) || [];
    attendance.push(record);
    localStorage.setItem('attendance', JSON.stringify(attendance));

    alert('Attendance marked successfully!');
    form.reset();
  });
}

// Display Attendance
const tableBody = document.querySelector('#attendanceTable tbody');
if (tableBody) {
  const attendance = JSON.parse(localStorage.getItem('attendance')) || [];
  attendance.forEach((record, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${record.name}</td>
      <td>${record.status}</td>
      <td>${record.date}</td>
      <td><button class="delete" data-index="${index}">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });

  // Delete Record
  tableBody.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
      const index = e.target.getAttribute('data-index');
      let attendance = JSON.parse(localStorage.getItem('attendance')) || [];
      attendance.splice(index, 1);
      localStorage.setItem('attendance', JSON.stringify(attendance));
      location.reload();
    }
  });
}
