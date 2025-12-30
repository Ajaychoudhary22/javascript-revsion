// Rest operator       in js

// function sum(a,b, c,...args){
// console.log(a,b,c,args);

// }
// sum(1,2,3,4,5);

//hoisting


// var a ;
// console.log(a);
//  a=19;

//IIFE

//     var obj = (function(){
//     return{
//         set:function(){
//             console.log("set called");
//         },
//         get:function(){
//             console.log("get called");
//         }
//     }

// })();
// obj.set();
// obj.get();

//hofs  . higher oreder functuion voo hote h yato function ko return krta h ya function ko accepct kr leta hai parameter mein

// function abs(){
//     return function(){
//         console.log("hello world");
//     }
// }
// abs()();
 // 2 type of hof

//  function abs(fn){
//     fn(); 

//  }
// abs(function(){
//     console.log("hello world");
// });


// Callback function > EK ESA FUNCTION JO DUSRE FUNCTION KO AS ARGUMENT MEIN LETA HAI usse call back function bolte hai


// function abs(val){
// val();
// }
// abs(function(){})

//CLOSURE >jab koi function dusra function return krta ho or uski parent function ki variable ko access krta ho to use closure bolte hai
function outer(){
    let a =10;

    return function inner(){
        console.log(a)
    }

}   

