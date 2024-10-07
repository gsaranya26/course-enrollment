let reservations = [];


function addReservation(name, numberOfGuests, reservationTime) {
    const reservation = {
        name: name,
        numberOfGuests: numberOfGuests,
        reservationTime: new Date(reservationTime)
    };
    reservations.push(reservation);
    updateReservationList();
}

function updateReservationList() {
    const reservationList = document.getElementById("reservationList");
    reservationList.innerHTML = ''; 
    reservations.forEach((reservation, index) => {
        const li = document.createElement("li");
        li.textContent = `${reservation.name} - Guests: ${reservation.numberOfGuests} - Time: ${reservation.reservationTime.toLocaleString()}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteReservation(index);
        li.appendChild(deleteButton);
        reservationList.appendChild(li);
    });
}


function deleteReservation(index) {
    reservations.splice(index, 1);
    updateReservationList();
}


document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const numberOfGuests = document.getElementById("numberOfGuests").value;
    const reservationTime = document.getElementById("reservationTime").value;

    addReservation(name, numberOfGuests, reservationTime);
  
    document.getElementById("reservationForm").reset();
});
