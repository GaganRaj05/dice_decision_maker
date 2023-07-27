var num=Math.floor(Math.random()*6)+1;
var randonImage="/dice"+num+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randonImage);

var num1=Math.floor(Math.random()*6)+1;
var randonImage1="/dice"+num1+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randonImage1);

if(num>num1){
    document.querySelector("#jjk").innerHTML="Player 1 Wins!";
    document.querySelector("#jjk").style.fontSize="3rem";
    document.querySelector("#jjk").style.color=" #4ECCA3";
    document.querySelector("#jjk").style.fontFamily="sans-serif" ; 
}else if(num==num1){
    document.querySelector("#jjk").innerHTML="Draw!";
    document.querySelector("#jjk").style.fontSize="3rem";
    document.querySelector("#jjk").style.color=" #4ECCA3";
    document.querySelector("#jjk").style.fontFamily="sans-serif" ;
}
else{
    document.querySelector("#jjk").innerHTML="Player 2 Wins!";
    document.querySelector("#jjk").style.fontSize="3rem";
    document.querySelector("#jjk").style.color=" #4ECCA3"; 
    document.querySelector("#jjk").style.fontFamily="sans-serif" ;
}