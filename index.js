var randomNumber1=(Math.random()*6)+1;
randomNumber1=Math.floor(randomNumber1);

var newImg1="dice"+ randomNumber1 +".png";
var newImgSource1="images/"+ newImg1 ;
document.querySelector(".img1").setAttribute("src",newImgSource1);

var randomNumber2=(Math.random()*6)+1;
randomNumber2=Math.floor(randomNumber2);

var newImg2="dice"+ randomNumber2 +".png";
var newImgSource2="images/"+ newImg2 ;
document.querySelector(".img2").setAttribute("src",newImgSource2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="1ST Player Wins";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="2nd Player Wins";
}
else
{
  document.querySelector("h1").innerHTML="Draw";
}
