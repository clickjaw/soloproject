
// getting the form from the html 
let reservationForm = document.getElementById('reservation-form');

let reservationArray = [];

function reservationObject (reservationName, reservationNumber, reservationTime, reservationDate){
    this.name = reservationName;
    this.number = reservationNumber;
    this.time = reservationTime;
    this.date= reservationDate;

    console.log(this);
    reservationArray.push(this);
}

// grabbing the data from the html
    let lastName = document.getElementById('last-name');
    let numberPeople = document.getElementById('number-people');
    let time = document.getElementById('time');
    let date = document.getElementById('date');

function reservationData(e){

    e.preventDefault();

    new reservationObject(lastName.value, numberPeople.value, time.value, date.value)
    
    localStorage.setItem('reservations', JSON.stringify(reservationArray));
    


    reservationForm.reset();
    return;
}

reservationForm.addEventListener('submit', reservationData);
lastName.addEventListener('change', function(e){
    lastName.value = e.target.value;
    console.log(e.target.value);
});
numberPeople.addEventListener('change', function(e){
    numberPeople.value = e.target.value;
    console.log(e.target.value);
});
time.addEventListener('change', function(e){
    time.value = e.target.value;
    console.log(e.target.value);
});
date.addEventListener('change', function(e){
    date.value = e.target.value;
    console.log(e.target.value);
});

// console.log(localStorage.getItem(JSON.parse(reservationObject).lastName));