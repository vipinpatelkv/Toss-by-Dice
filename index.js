var randomNumber1 = Math.ceil(Math.random()*6);
var randomDiceImage1 = "dice"+ randomNumber1+".png";
var randomImageSource1 = "images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var randomNumber2 = Math.ceil(Math.random()*6);
var randomDiceImage2 = "dice"+ randomNumber2+".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);
var player1 = prompt("Enter the name of player1");
 var player2 = prompt("Enter the name of player2");

if(randomNumber1>randomNumber2)
{
  document.querySelectorAll('h1')[0].style.fontSize="70px";
  document.querySelectorAll("h1")[0].innerHTML= player1 + " wins";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelectorAll('h1')[0].style.fontSize="70px";
  document.querySelectorAll("h1")[0].innerHTML=player2 + " wins";
}
else
{
  document.querySelectorAll('h1')[0].style.fontSize="70px";
  document.querySelectorAll("h1")[0].innerHTML="Oh!! it's draw";
}
