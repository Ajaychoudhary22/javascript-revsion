// there are 3 way to log in console

// console.log("hello world");
// console.warn("this is a warning");
// console.error("this is an error");


//check the data type of the "1223" 123

// console.log(typeof "1223" );
// console.log(typeof 123);

//swaping of two number


// var a=5;
// var b=10;


// a=a+b; //15
// b=a-b;
// a=a-b;
// console.log("the value of a is " + a);
// console.log("the value of b is " + b);


//console.gruop 

// console.group("friends");
// console.log("ajay");
// console.log("rahul");
// console.log("sachin");
// console.groupEnd("friends");


//we createa obj with const and change the value inside it

// const obj ={
//     name: "ajay",
//     age: 22,
//     location: "india"
// }
// obj.age=33;
// console.log(obj);

//javascript mein script hai ki nhi batana without using include tag

// let src = 'javascript';
// src.indexOf('script')!==-1 ? console.log("yes") : console.log("no");

// let a ="30";
//     console.log(typeof parseInt(a));

//write aloop to revese the 10 to 1

// let i=10;
// for(let i =10;i>=1;i--){
//     console.log(i);
    
// }

// map filter reduce
//map ek naya arrayreturn karta hai or haarb baar array mein ek naya element add karta hai
// let arr =[1,2,3,4,5];
//  let ans = arr.map(function (val) {
//     return val+2;
//   console.log(ans);
    
// })
//for each  => ek array ke har element pe ek function call karta hai or kuch return nahi karta
// let arr =[1,2,3,4,5];
// arr.forEach(function (val) {
//     console.log(val+2);


//filter => ek naya array return karta hai jisme wo element hote hai jo condition ko satisfy karte hai
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let ans =arr.filter(function(val){
//     return val<4
// })

//reduce => ek single value return karta hai jo array ke sabhi element pe operation karne ke baad milti hai
// let arr=[1,2,3,4,5];
// let ans = arr.reduce(function (accumulator, val) {
//     return accumulator + val;
// }, 0);

// console.log(ans);

//ek 5 no loo array mein or unka sum krke dikhao 

// let arr = [1,2,3,4,5];
// let ans = arr.reduce(function(acc,key){
//     return acc+key;
// }, 0);
// console.log(ans);

//with the help of while loop print the muliple of 3 of 3to 30 ;

// let i =3;
// while(i<=30){
//     console.log(i);
//     i=i+3;
// }

//write a program to sum no 1 to 100 using loop 

// let sum =0;
// for(let i =1;i<=100;i++){
//     sum+=i;
   
    
// }
//  console.log(sum);


//remove dublicate value from array
//ek concept hai Set jisse esa hota hai ki hame duplicate value hata kr deta hai 
// let arr =[1,2,2,3,4,4,5,6,6];
// let uniqueArr= [...new Set(arr)];
// console.log(uniqueArr);

//find ther second largest number in array without sorting


// let arr =[10,20,4,45,99,99,88,77];
// let first =0;
// let second =0;
// for(let i =0;i<arr.length;i++){
//     if(arr[i]>first){
//         second=first;
//         first=arr[i];
//     }else if(arr[i]>second && arr[i]!==first){
//         second=arr[i];
//     }
// }
// console.log("The second largest number is " + second);

//hof and calback 
//create a function which takes another function as an argument and calls it after 3 second(hof+callback)

// function call(fn){
//     setTimeout(fn, 3000);
// }
// call(function(){
//     console.log("hello world after 3 second");
// });

//implement your own version .map as ahigher   order function

// let arr = [1,2,3,4,5];

// function newmap(array,functioncall){
// let result =[];
// for(let i =0;i<array.length;i++){
//     result.push(functioncall(array[i]))

// }
// return result;
// }
//  let ans = newmap(arr,function(val){
//     return val*2;
// });


//write a function that uses closure to create a counter

// function creatareCounter(){
//     let count =0;
//     return function(){
//         count++;
//         console.log(count);
        
//     }
// }
// let counter = creatareCounter();
// counter();
// counter();
// counter();

// counter();
// counter();

//Implements a function that limits the number of times a given function can be called

// function limit(fn, limits){
//     let count =0;
//     return function(){
//         if(count<limits){
//             count++;
//            fn() ;
// }
//     }
// }
// let limitedFn = limit(function(){
//     console.log("hello " );
// },3);

// limitedFn();
// limitedFn();
// limitedFn();

// limitedFn();
// limitedFn();


//take a function that takes a callback and execute a function it after every n seconds indefinitely

// function repeact(fn, n){
//     setInterval(fn, n);
// }
// repeact(function(){
//     console.log("hello world");
// },2000);

//implement a function that return a function with a present greeting (closure)
// function greeting(greeter){
//     return function(name){
//         console.log(`${greeter} ${name}`);
        
//     }
// }
// let hellogreeter = greeting("hello");
// hellogreeter("ajay");


//implement a function that takes a callbacks and execute    it once (hof  +closure )

// function executeonce(fn){
//     let executed = false;
//     return function(){
//         if(!executed ){
//             executed = true;
//             fn();
//         }
//     }
// }
// let onceFn = executeonce(function(){
//     console.log("this function is executed only once");
// });

// onceFn();
// onceFn();

//implement a function that    throttles another function (hof + closure)

function throttle(fn, limit){
    let lastCall =0;
    return function(){
        let now = Date.now();   
        if(now - lastCall >= limit){
            lastCall = now;
            fn();
        }   
    }
}
let throttledFn = throttle(function(){
    console.log("this function is throttled");
}, 2000);
throttledFn();
throttledFn();
throttledFn();