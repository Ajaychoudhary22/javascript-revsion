// 1 . simulate the food delivary

//task 1: create aorderfood to return a promise that resolves after 2 seconds with "pizza  delivered"

//bonus add a chance    to reject the promise with "order failed"


// function orderFoood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//        let  chance = Math.random()*10<5
//          if(chance)resolve();
//             else reject(); 
        

//         }, 100);
        
// })  ;
// }
// orderFoood()
// .then(()=>{
//     console.log("pizza delivered");
// }).catch(()=>{
//     console.log("order failed");
// });

//2. chained promises :  user >post> comments

//task1:
//1 create getUser() resolve with {id:1, name:"john" } 
//2. getpost() > resolve with list of posts for the post title
//3. getComments() > resolve with list of comments for the post
//  chain them together using.then and log the final output

// function getUser(){
//     return new Promise((resolve, reject)=>{
//      setTimeout(() => {
//         resolve({id:1, name:"john" })
//      }, 1000);  
   
//     })
// }

// function getPost(userId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(["title1", "title2", "title3"])
//         }, 1000);  
//     })
// }

// function getComments(postTitle){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(["comment1", "comment2", "comment3"])
//         }, 1000);



//     })
// }
//yee jo dottehn   kaa traika h usse falt chianing boltehai

// getUser()
// .then((data)=>{
//     console.log("User:", data);
//     return getPost(data.id);

// })
// .then(function(titles){
//     console.log("Posts:", titles);
//     return getComments(titles[0]);
// }
// )
// .then((comments)=>{
//     console.log("Comments:", comments);
// })
// .finally(()=>{
//     console.log("All operations completed");
// });

//finally voo hota hia isme chiaye joo bhi error aaye pr finally too chlata hi hia


//3. fake API delay
 //write a function fkaeapicall (endpoint) that:
//* Accept the string like "/users" or "/posts"
// resolve with some dummy data after a delay of 1 second

// function  fakeApiCall(endpoint){
// const   data={
// user :["ajay" ,"vijay"],
// post :["hey","hello"],

// };
// let delay = Math.random()*2000+1000;

// return new Promise(function( resolve, reject){
// setTimeout(()=>{
// resolve(data[endpoint])

// },delay)
// })
// }
// fakeApiCall("user")
// .then(function(data){
//     console.log("Data received:", data);
// });
// fakeApiCall("post")
// .then(function(data){
//     console.log("Data received:", data);
// });


function createOredr(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({orderId:1234, item:"laptop"})
        },1000)
})
}
function processPayment(item){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(["pic1","pic2","pic3"])
        },1500)
    })
}
function confirmOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        },1000)
})
}

createOredr().then((data)=>{
    console.log("Order created id this order " , data.orderId);
    return processPayment();
})
.then((item)=>{
    console.log("Payment processed:", item);
    return confirmOrder();
})
.then(()=>{
    console.log("Order confirmed");
})