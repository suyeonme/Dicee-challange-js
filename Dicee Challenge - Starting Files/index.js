//player 1
var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomSource1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSource1);


//player 2
var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomSource2);


//if player 1
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Win!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Win!";
}
else {
  document.querySelector("h1").innerHTML = "Draws!";
}
