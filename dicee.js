// determine players' numbers
var player1Result = Math.floor(Math.random()*6 + 1);
var player2Result = Math.floor(Math.random()*6 + 1);

//find heading and dicee images
var heading = document.querySelector("h1");
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

//set dicee images according to players' results
dice1.setAttribute("src", "./images/" + player1Result + ".png");  
dice2.setAttribute("src", "./images/" + player2Result + ".png");  

//determine the winner (set heading)
if (player1Result > player2Result) {
    heading.textContent = "Player 1 wins!";
} else if (player2Result > player1Result) {
    heading.textContent = "Player 2 wins!";
} else {
    heading.textContent = "It's a draw!";
}

//check if the person is visiting the page for the first time and set heading text and dicee images to default
function checkFirstVisit() {
    if(document.cookie.indexOf('mycookie')==-1) {
      // cookie doesn't exist, create it now
      document.cookie = 'mycookie=1';
      heading.textContent = "Refresh me!"
      dice1.setAttribute("src", "./images/6.png");  
      dice2.setAttribute("src", "./images/6.png");
    }
}



