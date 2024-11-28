// Author: Salome Schmied

document.getElementById('form').addEventListener('click', () => {
    const country = document.getElementById('country').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (!country || !startDate || !endDate) {
        document.getElementById('response-message').innerText = 'All fields are required.';
        return;
    }

    axios.post('/api/trip', { country, startDate, endDate })
        .then(response => {
            document.getElementById('response-message').innerText = 'Trip added successfully.';
            document.getElementById('form').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('response-message').innerText = 'Failed to add trip.';
        });
});
