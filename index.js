var randomNumber1 =Math.random()  * 6;
randomNumber1=Math.floor(randomNumber1 + 1);//genartes random values from1-6
var randomdice1="images/dice"+ randomNumber1 +".png";//randomdice img1-6
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdice1);

var randomNumber2 =Math.random()  * 6;
randomNumber2=Math.floor(randomNumber2 + 1);
var randomdice2="images/dice"+ randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomdice2);


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML ="Player 1 Wins";
}

else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML ="Draw";

}
else
{
  document.querySelector("h1").innerHTML ="Player 2 Wins";
}
