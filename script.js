const form = document.getElementById('myForm');
const table = document.getElementById('myTable');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const rowData = [];
    for (const [key, value] of formData) {
        rowData.push(value);
    }
    const row = table.insertRow();
    rowData.forEach((cellData) => {
        const cell = row.insertCell();
        cell.textContent = cellData;
    });
    form.reset();
});