
// let table = document.getElementById('userDataTable');
// let row = table.insertRow();
// let cell1 = row.insertCell();
// let cell2 = row.insertCell();
// let cell3 = row.insertCell();
// let cell4 = row.insertCell();

console.log("hello")


window.addEventListener('load', () => {

// let userData = localStorage.getItem(JSON.parse(reservation));
// document.getElementById('userTableDiv').textContent = userData;
// console.log(userData);



let array = JSON.parse(localStorage.getItem('reservations'));
let tableHeader = document.getElementById('userTableDiv');
tableHeader.textContent = "name guests time date";

for (let i = 0; i < array.length; i++){
    console.log(array[i]);
    let userTableDiv = document.getElementById('userTableDiv');
    let table = document.getElementById('userTableDiv');
    let row = document.createElement('row');
    let th = document.createElement('th');
    tbody = document.createElement('tbody');
    td = document.createElement('td')

    lastNamePull = document.getElementById('lastNamePull').textContent = (`${array[i].name}/`);
    numberPeoplePull = document.getElementById('numberPeoplePull').textContent = (`${array[i].number}/`);
    timePull = document.getElementById('timePull').textContent = (`${array[i].time}/`)
    datePull = document.getElementById('datePull').textContent = (`${array[i].date}`)

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


    // th.append("name/");
    // table.append(th);
    // th.append('guests/');
    // table.append(th);
    // th.append("time/");
    // table.append(th)
    // th.append("date/");
    // table.append(th);

    // td.append(lastNamePull);
    // tbody.append(td);
    // table.append(tbody);

    // td.append(numberPeoplePull);
    // tbody.append(td);
    // table.append(tbody);

    // td.append(timePull);
    // tbody.append(td);
    // table.append(tbody);

    // td.append(datePull);
    // tbody.append(td);
    // table.append(tbody);


}


    




    

//     document.getElementById('lastNamePull').textContent = lastName;
//     document.getElementById('numberPeoplePull').textContent = numberPeople;
// // converting time variable from .5 to :30
//     if (time % 1 != 0){
//         newTime = Math.trunc(time);
//         document.getElementById('timePull').textContent = (`${newTime}:30`);
//     }
//     // document.getElementById('timePull').textContent = (time);
//     document.getElementById('datePull').textContent = date;
});



