// Author: Salome Schmied

document.addEventListener('DOMContentLoaded', () => {
    const tripList = document.getElementById('tripsList');
    const loadTripsButton = document.getElementById('loadTrips');

    loadTripsButton.addEventListener('click', () => {
        axios.get('/api/trip')
            .then(response => {
                const trips = response.data;
                tripList.innerHTML = '';

                if (trips.length === 0) {
                    tripList.innerHTML = '<p>No trips.</p>';
                    return;
                }

                trips.forEach(trip => {
                    const tripElement = document.createElement('div');
                    tripElement.innerHTML = `
                        <p>Trip to ${trip.country}</p>
                        <p>Start Date: ${trip.startDate}</p>
                        <p>End Date: ${trip.endDate}</p>
                    `;
                    tripList.appendChild(tripElement);
                });
            })
            .catch(error => {
                console.error('Error:', error);
                tripList.innerHTML = '<p>Failed to load trips.</p>';
            });
    });
});
