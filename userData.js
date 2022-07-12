
window.addEventListener('load', () => {
    let lastName = localStorage.getItem('lastNameValue');
    let numberPeople = localStorage.getItem('numberPeopleValue');
    let time = localStorage.getItem('timeValue');
    let date = localStorage.getItem('dateValue');

    document.getElementById('lastNamePull').textContent = lastName;
    document.getElementById('numberPeoplePull').textContent = numberPeople;
// converting time variable from .5 to :30
    if (time % 1 != 0){
        newTime = Math.trunc(time);
        document.getElementById('timePull').textContent = (`${newTime}:30`);
    }
    // document.getElementById('timePull').textContent = (time);
    document.getElementById('datePull').textContent = date;
});


