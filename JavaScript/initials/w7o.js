// This keyword

// this referes to the object that is currently executing the code.
// Outside any function, this refers to the global object
// like 
console.log(this);

// Inside a regular function
// this refers to the object that called the function
const person = {
   name: "Alice",
   greet: function(){
      console.log("Hi, I am "+ this.name);
   }
};
person.greet();

const student = {
   name: "Naitik",
   age : 19,
   eng: 95,
   math: 93,
   phy: 69,
   getAvg: function(){
      console.log(this); // would print the current object in which this is
      let avg=(this.eng+this.math+this.phy)/3;
      console.log(avg);
   }
};

// try and catch
try{
   console.log(a);  // would only execute if there is no error in its execution
} catch{
   console.log("Variable a doesn't exist"); // else this would be executed
}

// Arrow Function - nameless functions:
// const func = (arg1, arg2,....) => {function definition}
const sum = (a,b) => {
   console.log(a+b);
}
sum(4,5);

// timeout function
console.log("Hi there");

setTimeout(()=>{
   console.log("Apna College"); // so ye function 4 second baad execute hoga,
},4000);

console.log("Welcome to");
// therefore it would be like this: Hi there Welcome to Apna college (because before 4 second code below set timeout would execute as usual)

// set interval
id=setInterval(()=>{ // would execute every 2second
   console.log("this is set interval function in working!");
},2000);

// to stop a set interval kind of function: 
clearInterval(id); // but use it console only as if used like this it would directly get executed and that id func wont be executed even once


// This with Arrow function:
const stud = {
   name : "Naitik",
   marks : 95,
   prop : this, // global scope
   getName : function(){
      console.log(this);
      return this.name;
   },
} 

console.log(stud.getName);
const a=5; // global scope