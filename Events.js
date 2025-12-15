//get attribute and set atttribute topic 

// var img1 = document.getElementById("img1");
// var img2 = document.getElementById("img2");
// var btn = document.getElementById("btn");   


// btn.addEventListener("click", function(){
//     var img1src = img1.getAttribute("src");
//     var img2src = img2.getAttribute("src");
//     img1.setAttribute("src", img2src);
//     img2.setAttribute("src", img1src);
// });

//how to crreate an element using the dom methods

//  var btn = document.getElementById("btn");



//  btn.addEventListener("click", function(){
//     var x = Math.floor(Math.random() * 100);
//      var y = Math.floor(Math.random() * 100);
//      var create = document.createElement("img");
//     create.src = "https://images.unsplash.com/photo-1764866915273-ea87cf57526d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8";
        
//         // create.style.left= x+'%';
//         create.style.top= y+'%';
//     create.style.height = "400px";
//     document.body.appendChild(create);
//  });


//instagram like project when the object is dbclicked they seen after just sec it goes 
document.body.addEventListener("dblclick", function (e) {

    let heart = document.createElement("img");

    heart.src = "https://tse4.mm.bing.net/th/id/OIP.xSpspLeY6ApVGVcbureuQQHaG7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3";

    heart.style.position = "absolute";
    heart.style.width = "60px";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.transform = "translate(-50%, -50%)";
    heart.style.pointerEvents = "none";
    heart.style.animation = "floatUp 1s ease-out";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});
