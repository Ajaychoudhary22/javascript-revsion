// let arr = [
//     { age: 21, name: 'Event A' },
//     { age: 32, name: 'Event B' },
//     { age: 34, name: 'Event C' }

// ]

// let sum =0;
// arr.forEach(element => {
//     sum += element.age;
    
    
    
// });
// console.log(sum );


let arr = [
    {

        name:"ajay",
        age:21 , 
        married :true,
        Image :"https://images.unsplash.com/photo-1692550691675-628ede0848e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 
    },
    {
        name:"vikas",
        age:25  ,
        married :false , 
    Image :"https://plus.unsplash.com/premium_photo-1699537317988-b0d94b666661?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

var sum ='';
arr.forEach(element => {
    sum = sum +`<div class="card">
    <img src=${element.Image} alt="image"/>
    <h1>${element.name}</h1>
    <h2>${element.age}</h2>
    <h4>married:${element.married}</h4>
    
</div>` 
 var body = document.body;
body.innerHTML = sum;
});
console.log(sum );
