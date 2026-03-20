// Lets study about async functions

async function greet() {
   throw "404 page not found"; // for creating some error
   return "hello";
}
greet()
  .then((result)=>{
    console.log("promise was resolved");
    console.log("result ws : ",result);
  })
  .catch((err)=>{
    console.log("promise was rejected with err : ",err);
  })

function getNum(){
   return new Promise((resolve,reject)=>{ // so this is a asyncronous function which returns a random number in form of a promise
      setTimeout(()=>{
         let num=Math.floor(Math.random()*10)+1;
      console.log(num);
      resolve(num);
      },1000);
   });
}
async function demo(){
   await getNum(); // await function can only be used with async functions
   await getNum();
   getNum();
}








