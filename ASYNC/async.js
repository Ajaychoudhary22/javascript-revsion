// //async js ka concept h callback functon ja ise kaam krta h yee joo codse haiisme hamen ek function ko dusre function k complete hone k bad call krna hota h
// //mnalijiye hamen database se koi details fetch krni h to hame pehle database se details fetch krni hogi uske bad hi hame us details ko use krna hoga to iske liye hum callback function ka use krte h



// function getDettails(userName, cb){
//     setTimeout(() => {
//         console.log("fetching details from database")
//     }, 3000);
//     setTimeout(() => {
//         console.log("details fetched")
//     }, 5000);
//     setTimeout(() => {
//         cb();
//     }, 6000);
// }

// getDettails("ajay" , function(){
//     console.log("hello ajay")
// });

//ab  ismeek aata hai    callback hell mnalijiye hame ek se jyada database se details fetch krni h to hum callback hell me chla jate h


// function step1(cb){
//     console.log ("step 1 completed");
//     cb();
// }
// function step2(cb){
//     console.log("step 2 completed");
//     cb();   
// }
// function step3(cb){
//     console.log("step 3 completed");
//     cb();   
// }

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("all steps completed");
//         }
//         );
//     });     

// });


//ab isme hum promise ka use karte h to callback hell se bach sakte h

function step1(){
  return new Promise((resolve, reject)=>{

  
    console.log ("step 1 completed");
    resolve();
  });
}
function step2(){
   return new Promise((resolve, reject)=>{

  
    console.log ("step 2 completed");
    resolve();
  });
      
}
function step3(){
    return new Promise((resolve, reject)=>{

    console.log ("step 3 completed");
    resolve();
  });
}

step1().then(step2).then(step3).then(function(){
   
    console.log("all steps completed");


});


