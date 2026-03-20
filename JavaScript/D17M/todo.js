let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let del=document.querySelectorAll(".delete"); // runs once on load
let span=document.querySelector("#count");

span.innerText=ul.childElementCount;


function add(){
   if(inp.value=="")return; // prevents empty itemps
   let item=document.createElement("li");
   item.innerText=inp.value;
   ul.appendChild(item);
   inp.value="";
   let newbutton=document.createElement("button");
   newbutton.innerText="delete";
   newbutton.classList.add("delete");
   newbutton.addEventListener("click",function(){
      item.remove();
      span.innerText=ul.childElementCount;
   })
   item.appendChild(newbutton);
   span.innerText=ul.childElementCount;
}

btn.addEventListener("click",function(){
   add();
})

inp.addEventListener("keydown",function(event){
   if(event.key=="Enter"){
      add();
   }
})
for(let dele of del){ // there are some elements in the ul initially as well so for making thier delete function work, but its not working why>
   dele.addEventListener("click",function(){
      let bottn=this.parentElement;
      bottn.remove();
      span.innerText=ul.childElementCount;
   })
}