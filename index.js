var x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
    var element = document.getElementById("nav");
    element.classList.toggle("open");

    x.classList.toggle("change");
}

function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function dropd() {
    document.getElementById("down").classList.toggle("show");
}

function drop_mob() {
    document.getElementById("myDr").classList.toggle("show");
}

function dropd_mob() {
    document.getElementById("downn").classList.toggle("show");
}



// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function dropd() {
    document.getElementById("down").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content_mob");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}




//модальное окно
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/*
var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".box-btn");
var close = document.querySelector(".close");

btn.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("hidden");
});

popup.addEventListener("click", function(event) {
    e = event || window.event
    if (e.target == this) {
        popup.classList.add("hidden");
    }
});

close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("hidden");
});
*/
