// Array methods
// for each
let arr = [1, 2, 3, 4, 5];

let print = function (el) {
  console.log(el);
};
arr.forEach(print);
let arr2 = [
  {
    name: "Naitik",
    marks: 69,
  },
  {
    name: "Agarwal",
    marks: 70,
  },
  {
    name: "NA",
    marks: 71,
  },
]; // arr of objects

arr2.forEach(function(el){
   console.log(el.marks);
});


// Map function
let num=[1,2,3,4,5];
let double=num.map(function(el){ // would return the values and store it into a new array
   return 2*el;
});
console.log(double);

// another example
let gpa=arr2.map((el)=>{
   return el.marks/10;
})
console.log(gpa);

// Filter
let even=num.filter((nums)=>(nums%2==0));
console.log(even);
 

// Every method :
// returns true if every element of array gives true for some function, else returns false

let arrnum=[1,2,3,4,5,6];
console.log(arrnum.every((num)=>(num>2)));

// Reduce method
// reduce the array to a single value
// syntax
/*array.reduce((accumulator,currentvalue)=>{
     return // (something)
   }) */
const total=arrnum.reduce((acc,curr)=>{ // curr starts as the first element of the array
   return acc+curr; // acc starts as the initial value -> 0 
},0);
console.log(total);

const maxArrayNum=arrnum.reduce((acc,curr)=>{
   return Math.max(acc,curr);
})
console.log(maxArrayNum);

// Practice Question 1:
arrQues=[1,2,3,4,5,10,20,30];
console.log(arrQues.every((num)=>num%10===0));

// Practice Question 2:
const minElement=arrQues.reduce((acc,curr)=>{
   return Math.min(acc,curr);
})
console.log(minElement);

// Spread -> Expand an iterable into multiple values
/* function func(...arr){ we use 3 dots
   // do something 
} */
examplearr=[1,2,3,4,5,6,6,7,25432,25,69,72,5];
console.log(Math.min(...examplearr));
console.log("Apnacollege");
console.log(..."ApnaCollege");