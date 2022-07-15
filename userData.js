
// let table = document.getElementById('userDataTable');
// let row = table.insertRow();
// let cell1 = row.insertCell();
// let cell2 = row.insertCell();
// let cell3 = row.insertCell();
// let cell4 = row.insertCell();



window.addEventListener('load', () => {

// let userData = localStorage.getItem(JSON.parse(reservation));
// document.getElementById('userTableDiv').textContent = userData;
// console.log(userData);


//putting the value of JSON object in an array
let array = JSON.parse(localStorage.getItem('reservations'));
let tableHeader = document.getElementById('userTableDiv');
tableHeader.textContent = "name guests time date";

//create a loop that builds the table with the elements from the form
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
    let userTableDiv = document.getElementById('userTableDiv');
    let table = document.getElementById('userTableDiv');
    let row = document.createElement('row');
    let th = document.createElement('th');
    tbody = document.createElement('tbody');
    td = document.createElement('td')
//putting the elements of the form into the table div

    // lastNamePull = document.getElementById('lastNamePull').textContent = (`${array[i].name}/`);
    // numberPeoplePull = document.getElementById('numberPeoplePull').textContent = (`${array[i].number}/`);
    // timePull = document.getElementById('timePull').textContent = (`${array[i].time}/`)
    // datePull = document.getElementById('datePull').textContent = (`${array[i].date}`)

   let userName = document.createElement('td');
   userName.textContent = (`${array[i].name}`);
   tbody.append(userName);
   table.append(tbody);

   let userNumber = document.createElement('td');
   userNumber.textContent = (`${array[i].number}`);
   tbody.append(userNumber);
   table.append(tbody);

   let userTime = document.createElement('td');
   userTime.textContent = (`${array[i].time}`);
   tbody.append(userTime);
   table.append(tbody);

   let userDate = document.createElement('td');
   userDate.textContent = (`${array[i].date}`);
   tbody.append(userDate);
   table.append(tbody);



}

});



