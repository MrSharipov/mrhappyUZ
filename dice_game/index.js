
// FIRST IMAGE

var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomImage = "dice" + randomNumber1 + ".png";
var randomImagePosition = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagePosition);

// SECOND IMAGE

var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImagePosition2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagePosition2);

//WHO WON?

if(randomNumber1 > randomNumber2){

document.querySelector("h1").innerHTML = "⛳️ Player 1 Wins!";

}else if(randomNumber1 < randomNumber2){

document.querySelector("h1").innerHTML = "Player 2 Wins! ⛳️";

} else{
document.querySelector("h1").innerHTML = "⛳️ Draw! ⛳️";
}
