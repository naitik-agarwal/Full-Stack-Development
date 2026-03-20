let btn=document.querySelector("button");


function getRandomColor(){
   let red=Math.floor(Math.random()*255);
   let blue=Math.floor(Math.random()*255);
   let green=Math.floor(Math.random()*255);

   let color=`rgb(${red},${green},${blue})`;
   return color;
} 

btn.addEventListener("click",function(){
   let h3=document.querySelector("h3");
   let div=document.querySelector("div");
   let randcolor=getRandomColor();
   h3.innerText=randcolor;
   div.style.backgroundColor=randcolor;

   console.log("color updated");
});

