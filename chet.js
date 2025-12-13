// Write a function makeCounter() that returns a function which increments and logs a count each time it’s called.

// function makeCounter(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
        
//     }
// }
// let counter = makeCounter();
// counter();
// counter();
// counter();
//Write a function once(fn) that runs fn only the first time it’s called (closure + control logic).


// function once(fn){
//     let called = false;
//     return function(){
//         if(!called){
//             called = true;
//             fn();
//         }
//     }
// }
// let runOnce = once(function(){
//     console.log("This should run only once");
// });
// runOnce();
// runOnce();
// runOnce();

//Write a function rememberMe() that returns a function keeping track of all names passed to it.

// function rememberMe(){
//     let names="";
//     return function(name){
//         names+= name + " ";
//         console.log("Names so far: " + names);
// }
// }
// let rem =rememberMe();
// rem("ajay");
// rem("vijay");
// rem("sanjay");


//Create a timer function that uses closure to store start time and prints elapsed time.

// function timer()
// {
//     let starttimer = Date.now();
//     return function(){
//         let endtimer = Date.now();
//         console.log(`Elapsed time: ${endtimer - starttimer} ms`);
//     }
// }       
// let t = timer();
// setTimeout(function(){
//     t();
// },2000);

//Implement a secretPassword() function that stores a password inside closure and allows checking if user input matches.
// function secretPassword(password){
//     return function(input){
//         if(input===password){
//             console.log("Access granted");  
//         }else{
//             console.log("Access denied");
//         }
//     }
// }
// let secert = secretPassword("mypassword");
// secert("wrongpassword");

// Reverse a string without using built-in reverse()

// function reverseString(str){

//     let   reversed = "";
//     for(let char of str){
//         reversed = char + reversed;
//     }
//     return reversed;
// }
// console.log(reverseString("ajay"));

//Count vowels in a given string

// function countVowels(str){
//     let count =0;
//     for(let char of str.toLowerCase()){
//         if("aeiou".includes(char)){
//             count++;
//         }

//     }
//     return count;
// }
// console.log(countVowels("Ajay Kumar"));

//double function mein agar double occurance hai too true return kro nhi too fal


// function double(){
//     let   arr =[2,3,4,5,5,6,6,7]

//     arr.sort((a,b)=>a-b);
//     for(let i =0;i<arr.length-1;i++){
//         if(arr[i]===arr[i+1]){
//             return true;
//         }
//     }
//     return false;



// }
// console.log(double());


// // Toggle text without using if/else.

// // Given a <p> tag with text "ON", toggle it to "OFF" on button click — without using if.


// let h1  = document.getElementById("toggleText")
// let button = document.getElementById("toggleButton");
// button.addEventListener("click", function(){
//     h1.textContent = h1.textContent === "ON" ? "OFF" : "ON";
// })

// Write a function to remove duplicates from an array (no Set allowed).

// function removeDuplicates(arr){
//     let uni =0;
//     let result =[];
//     for(let i =0;i<arr.length;i++){
//         if(arr.indexOf(arr[i])===i){
//             result[uni]=arr[i];
//             uni++;
//         }   

//     }
//     return result;
// }
// console.log(removeDuplicates([1,2,2,3,4,4,5]));

// Create a function that returns another function (closure) to count button clicks.
let   betton = document.getElementById("btn");
function clickCounter(){
    let     count =0;
    return  function(){
        count++;
        console.log(`Button clicked ${count} times`);
    } 
}

let counter = clickCounter();
betton.addEventListener("click", counter);