// let btn=document.querySelector("button");
// btn.addEventListener("click",function(event){ // event is the default argument
//    console.log(event); // this event is a pointer event (see in console)
//    console.log("button click");
// });

// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//    console.log("code = ",event.code);
//    if(event.code=="ArrowUp"){
//       console.log("character mover up");
//    }
//    else if(event.code=="ArrowDown"){
//       console.log("character moves down");
//    }
//    else if(event.code=="ArrowLeft"){
//       console.log("character moves left");
//    }
//    else if(event.code=="ArrowRight"){
//       console.log("character moves right");
//    }
// });
// let form=document.querySelector("form"); 
// form.addEventListener("submit",function(){ // this is one of the event for form element
//    event.preventDefault();
//    console.log("form submitted");
// });
// form.addEventListener("submit",function(){
//    event.preventDefault();
//    let inp=document.querySelector("#user");
//    let pass=this.elements[1]; // another way to do that -> very important
//    console.log(inp.value); // this stores the value which we put in the form placeholder (input)
//    console.log(pass.value);
// })

// Ok lets learn something new now
let form=document.querySelector("form");
form.addEventListener("submit",function(){
   event.preventDefault();
})
user.addEventListener("change",function(event){
   event.preventDefault();
   console.log("input changed");
   console.log(user.value);
});