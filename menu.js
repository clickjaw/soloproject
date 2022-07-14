
// let span = document.getElementsByClassName("close");

// //cocktail button
// let cocktail = document.getElementById("cocktail");
// let cocktailButton = document.getElementById("cocktailMenu");
// cocktailButton.onclick = function(){
//     cocktail.style.display = "block";
// }
// span.onclick = function(){
//     cocktail.style.display = "none";
// }
// //appetizer button
// let appetizer = document.getElementById("appetizer");
// let appButton = document.getElementById('appMenu');
// appButton.onclick = function(){
//     appetizer.style.display = "block";
// }
// span.onclick = function(){
//     appetizer.style.display = "none";
// }

// //entree button
// let entree = document.getElementById("entree");
// let entreeButton = document.getElementById('entreeMenu');
// entreeButton.onclick = function(){
//     entree.style.display = "block";
// }
// span.onclick = function(){
//     entree.style.display = "none";
// }
// //dessert button
// let dessert = document.getElementById("dessert");
// let dessertButton = document.getElementById('dessertMenu');
// dessert.onclick = function(){
//     dessert.style.display = "block";
// }
// span.onclick = function(){
//     dessert.style.display = "none";
// }

// window.onclick = function(e){
//     if (e.target== cocktail){
//         cocktail.style.display = "none";
//     } else if (e.target == appetizer){
//         appetizer.style.display = "none";
//     }else if (e.target == entree){
//         entree.style.display = "none"; 
//     }

// }
// //I started to put every menu item in a function and then print it using DOM
// //but soon realized that it would take more time than entering everything one by on in the HTML
// // let drinkList = ["Bee's Knees", "French 75", "Aviation", "Manhattan"]

// // function cocktailList(drinkName, price, ingredient){
// //     this.drinkName = drinkName;
// //     this.price = price;
// //     this.ingredient = [];
// //     this.appendLi()= {
// //         li = document.createElement('li');

// //     }

// // }

// // let aviation = new cocktailList('Aviation', 12, ["gin", "lemon juice", "bitters"]);
// // console.log(aviation)
let 
function cocktailFunction() {
    var x = document.getElementById("cocktailDiv");
    if (x.style.display !== "none") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
function entreeFunction(){
    var x = document.getElementById("entreeDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function appFunction(){
    var x = document.getElementById("appDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function dessertFunction(){
    var x = document.getElementById("dessertDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}