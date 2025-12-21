//saab se phele ham ek constructor function bnaenge

// se phele ek baat yaad rakho jese hi ham function ko call krte vakt ek new ka 
//use krte h too vo ek blank object bana leta hai or fir us blank object ke andar ham this
//keyword ke through properties or methods ko add krte h

//Example 

// function Ghar(){
//     this.rooms= 4;
//     this.color= "blue";

// }

//  let newGhar = new Ghar(); // blank object create hoga
// console.log(newGhar);
// console.log(newGhar.rooms);


// ab ham ek class banayege usko acces karege 

// class Car{

//     //ek baat yaad rakh loo haaar baar class banate hoto usme tumhe construter key word ka use krna padega
//    constructor (wheels, color ){

// this.wheels= wheels;
// this.color= color;

// }
// }
// let myCar = new Car (4, "red");
// let myCar2 = new Car (6, "blue");

// console.log(myCar);
// console.log(myCar2);

// jab bhi constructorr banaoge aur kuch esa mil gya jo ki saab mein same haitoo usse direct constructor mein baana glt pr sahi taraika hai prototype ka use krna chahiye kyuki prototype mein savekrne se jitne bhi new ke sath instance banaoge voo saare instance bt default proto ki value ko hold karenge or memory mein bhi kam jagah lega


// function Toffee(name){
//     this.name= name;
// }
// Toffee.prototype.price= 20;

// let t1 = new Toffee("mango");
// let t2 = new Toffee("orange");


// another example of prototype

function Bike(wheels, color){
    this.wheels= wheels;
    this.color= color;
    
}
Bike.prototype.start= function(){
    console.log("bike started");
}
let myBike = new Bike( 2, "black");