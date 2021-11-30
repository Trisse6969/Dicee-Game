function dicee() {
    //random number for first dice
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);

    var img1 = document.querySelector(".img1")
    img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

    //random number for second dice
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    var img2 = document.querySelector(".img2")
    img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    //decide winner
    var h1 = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        h1.innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        h1.innerHTML = "Player 2 Wins! 🚩";
    } else {
        h1.innerHTML = "Draw!";
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    dicee();
});