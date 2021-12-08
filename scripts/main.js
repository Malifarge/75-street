// menu burger

function showResponsiveMenu() {
    var menu = document.getElementById("navburger");
    var icon = document.getElementById("burger");
    var root = document.getElementById("root");
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}

// carousel

const items = document.querySelectorAll('.slider img')
const nbSlide = items.length;
const suivant = document.querySelector('.right')
const precedent = document.querySelector('.left')
let count = 1

function slideSuivante(){
   
    items[count].classList.remove('active')    

    if(count > 0){
        count--
    }else {
        count = nbSlide - 1
    }
    items[count].classList.add('active')
    console.log(count);

    setTimeout ("slideSuivante()", 4000)
}

window.onload = slideSuivante