// seletors and event listeners

// let hh = document.querySelector("h1");

// addEventListener("click",function(){
//     hh.style.color="red";
//     hh.innerHTML="you clicked me";
//     console.log("you clicked me");
// })



//box koo circle bana ya    fir uspe      eseltiong opratyion kiya

// let box = document.getElementById("box");

// box.addEventListener("mouseover", function(){
//     box.style.color="red";
//     box.innerHTML="you hovered me";

//     console.log("you hovered me");
// })

// let h1 =  document.querySelectorAll("h1");
// h1[0].innerHTML="hello world";
// console.log(h1);



// ham kisi bhi chij kaa phele se ek bana bnaaya function use kr skatehai jese iss code mein kiya gaya hai
// let  box = document.getElementById("box");
// let btn = document.getElementById("btn");


// function changes(){
//     setTimeout(function(){
//         box.style.backgroundColor="red";
//         box.innerHTML="you clicked me";
//     },2000) 

// }

// btn.addEventListener("click",changes);


//joo stranger likha hua haiuusse  friend            bannaana hai or fir vo button pe click krne pe change ho jaaye

let  h1    =document.getElementById("h1");
let btn = document.getElementById("btn");
let h2 = document.getElementById("h2");

let check = false;

 var set = setInterval(function(){
    console.log("hello");
},1000);



 btn.addEventListener("click",function(){
   check = !check;
   h2.innerHTML= check ? "friend" : "stranger";
 clearInterval(set);

})

