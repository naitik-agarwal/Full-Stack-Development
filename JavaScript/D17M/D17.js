let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");

div.addEventListener("click",function(){
   console.log("div was clicked");
})

ul.addEventListener("click",function(event){
   event.stopPropagation(); // used to stop event bubbling
   console.log("ul was clicked");
})

for(lis of li){
   lis.addEventListener("click",function(event){
      event.stopPropagation(); // used to prevent event bubbling
      console.log("li was clicked");
   })
}