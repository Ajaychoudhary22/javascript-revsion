
//  let b = document.querySelector("#btn")
// b.addEventListener("click",()=>{
    



// fetch("https://api.github.com/users/ajay")
// .then(res=>res.json())
// .then(item=>{
//     console.log("User data:", item);
// })
// });


 const sub = document.querySelector("#sub");
const inp = document.querySelector("#inp");

  sub.addEventListener("click", (e) => {
    e.preventDefault(); // ✅ correct place

    const username = inp.value;

    
  
fetch("https://api.github.com/users/ajay")
    .then(res=>res.json())
    .then(item=>{
        console.log("User data:", item);
    })
    .catch(error => {
        console.error("Error fetching user data:", error);
    });
});
