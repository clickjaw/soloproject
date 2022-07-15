
let 
function cocktailFunction() {
    let x = document.getElementById("cocktailDiv");
    if (x.style.display !== "none") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
function entreeFunction(){
    let x = document.getElementById("entreeDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function appFunction(){
    let x = document.getElementById("appDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function dessertFunction(){
    let x = document.getElementById("dessertDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}