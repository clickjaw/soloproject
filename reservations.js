
// getting the form from the html 
let reservationForm = document.getElementById('reservation-form');

function reservationData(e){

    e.preventDefault();

    // grabbing the data from the html
    let lastName = document.getElementById('last-name').value;
    let numberPeople = document.getElementById('number-people').value;
    let time = document.getElementById('time').value;
    let date = document.getElementById('date').value;

    // setting all the data to local storage
    localStorage.setItem('lastNameValue',lastName);
    localStorage.setItem('numberPeopleValue', numberPeople);
    localStorage.setItem('timeValue', time);
    localStorage.setItem('dateValue', date);

    reservationForm.reset();
    return;
}

reservationForm.addEventListener('submit', reservationData);