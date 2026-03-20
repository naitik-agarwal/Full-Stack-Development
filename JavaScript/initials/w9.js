let btns=document.querySelectorAll("button");
clicked=function(){
   console.log("button was clicked");
}
sucked=function(){
   console.log("button was sucked");
}
// for(let i=0;i<btns.length;i++){
//    btns[i].onclick=clicked;
//    btns[i].onmouseenter=function(){
//       console.log("you entered a button");
//    }
// }
// Another method of doing these or even better things: 
// Event Listeners
for(let i=0;i<btns.length;i++){
   btns[i].addEventListener("click",clicked);
   btns[i].addEventListener("dblclick",sucked); // an advantage of using eventListeners is that we can put multiple events to a single element
}