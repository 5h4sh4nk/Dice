var random1 = Math.floor(Math.random()*6);
var random2 = Math.floor(Math.random()*6);
var diceImage = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
document.querySelector(".img1").setAttribute("src", diceImage[random1]);
document.querySelector(".img2").setAttribute("src", diceImage[random2]);

if (random1 > random2) {
  document.querySelector("h1").innerHTML = "Player1 wins !!!";
} else if (random1 < random2) {
  document.querySelector("h1").innerHTML = "Player2 wins !!!";
} else {
  document.querySelector("h1").innerHTML = "Drawww !!!";
}
