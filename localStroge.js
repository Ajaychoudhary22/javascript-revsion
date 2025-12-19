// var btn = document.querySelector("#btn")


// btn.addEventListener("click", function() {
//     location.href= "https://www.jeetfoundations.in/";
// });


// local stroage ki kuch functions hote h jese ki setItem, getItem, removeItem, clear


// // setItem
// localStorage.setItem("name", "jeet");
// localStorage.setItem("age", "22");


// getItem

// var name = localStorage.getItem("name");
// console.log(name);


// removeItem
// localStorage.removeItem("age");

// clear
// localStorage.clear();


// we cannot save the object value in the local stroage we can convert it into string through json method its example to understand the problem 


var user = [
    {
    name: "jeet",
    age: 22,
    city: "rajkot"
    
},
{
    name: "aeet",
    age: 22,
    city: "rajkot"
},
{
    name: "veet",
    age: 22,
    city: "rajkot"
}
]

// var newUser= JSON.stringify(user);

var newUser= JSON.parse(user);  
localStorage.setItem("user", newUser);
console.log(user);


// var getUser= localStorage.getItem("user");
// console.log(JSON.parse(getUser));