// Object literasls

let student = {
  name: "Naitik",
  age: 19,
  marks: 99,
};
// or 
const stud={ // now we cant change the address but can do change the values of keys inside this
   name:"Navya",
   age:19,
   marks:69
}; 

const post={
   username:"a.naitik",
   content:"This is my #first post",
   likes: 69,
   repost: 4,
   tags: ["apnacollege","google"],
   6:"hello"
};

// object of objects
const classInfo={
   aman:{
      grade:"A+",
      city:"Delhi"
   },
   Shraddha:{
      grade:"B+",
      city:"Mumbai"
   },
   Navya:{
      grade:"A++",
      city:"Haldwani"
   },
};

// Function
function addone(x){
   x+=1;
   return x;
}
console.log(addone(2));



function RollaDice(){
   let x=Math.floor(Math.random()*6)+1;
   return x;
}
console.log(RollaDice());



function PrintMultiplicationTable(x){
   for(let i=1;i<=10;i++){
      console.log(x,'*',i,"=",x*i);
   }
}
PrintMultiplicationTable(5);

function fn(x,y,z,t,p){
   return x+y+z+t+p;
}
console.log(fn("N","a","i","t","k"));























































