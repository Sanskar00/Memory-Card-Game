let theParent = document.querySelector(".container");
theParent.addEventListener("click", doSomething, false)
let list = [];
let flipArray = [];
let a, b, c, d, f, g, flip1, flip2, element1, element2;
let count = 0;

let number = ["NarutoAndSasuke.png", "uchiha.png", "uchiha.png", "NarutoAndSasuke.png", "leafVillage.jpg", "leafVillage.jpg", "uzumakiClan.png", "uzumakiClan.png"];

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
shuffle(number);

function addClass() {
    let divs = document.querySelectorAll(".front");
    let images = document.querySelectorAll("img");

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add(number[i]);
        images[i].src = number[i];
        images[i].classList.add(number[i]);

    }

}
addClass();

function doSomething(e) {
    flipArray.push(e.target.parentElement.id);
    flip1 = "#" + flipArray[0];
    flip2 = "#" + flipArray[1];
    element1 = document.querySelector(flip1);
    element2 = document.querySelector(flip2);

    if (e.target.parentElement.className === "card") {
        e.target.parentElement.style.transform = "rotateY(180deg)";


    }

    list.push(e.target.id);
    let string1 = "#" + list[0]
    let string2 = "#" + list[1]
    if (string1 !== "#" && string2 !== "#") {
        a = document.querySelector(string1);
        b = document.querySelector(string2);
        c = a.nextElementSibling;
        f = c.firstElementChild;
        if (list.length == 2) {
            d = b.nextElementSibling;
            g = d.firstElementChild
        }


        if (list[0] == list[1]) {
            alert("You have clicked a same box twice")
            list = [];

        } else {
            if (e.target.id == list[1]) {
                if (a.className == b.className) {
                    list = [];
               if (e.target.id == list[1]) {
                if (a.className == b.className) {
                    list = [];
                    setTimeout(function() {
                        a.remove();
                        b.remove();
                        c.remove();
                        d.remove();
                    }, 800);
                    flipArray = [];
                    count += 1;
                } else {
                    element1.style.transform = "rotateY(0deg)";
                      setTimeout(function() {
                        element2.style.transform = "rotateY(0deg)";
                    }, 800)
                    list = [];
                    flipArray = [];
                    count += 1;

                }
            }
        }

    }
}
