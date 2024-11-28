document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    // Get the values from the form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const acceptTerms = document.getElementById('acceptTerms').checked;

    // Get selected hobbies
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(hobby => hobby.value);

    // Validation logic
    if (!name || !email || !password || !dob || !gender || !acceptTerms) {
        alert('Please fill in all fields, select a gender, and accept the terms and conditions.');
        return;
    }

    // Create a new row for the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${gender.value}</td>
        <td>${dob}</td>
        <td>${hobbies.join(', ') || 'None'}</td>
    `;
    
    // Append the new row to the table body
    document.getElementById('dataOutput').appendChild(newRow);
    document.getElementById('registrationData').style.display = 'block';

    // Clear the form fields after submission
    document.getElementById('registrationForm').reset();
});
