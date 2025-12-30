// class MobileShop {
//     constructor() {
//         this.mobiles = [];
//     }

//     addMobile(mobile) {
//         this.mobiles.push(mobile);
//     }

//     listMobiles() {
//         this.mobiles.forEach((mobile, index) => {
//             console.log(`${index + 1}. ${mobile.brand} ${mobile.model}`);
//         });
//     }
// }

// class Mobile {
//     constructor(brand, model, price, storage, ram, camera) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//         this.storage = storage;
//         this.ram = ram;
//         this.camera = camera;
//         this.id = Math.floor(Math.random() * 10000);
//         this.sims = [];
//     }

//     getMobileInfo() {
//         console.log(
//             `${this.brand} ${this.model} | Price: ${this.price} | Storage: ${this.storage} | RAM: ${this.ram} | Camera: ${this.camera}`
//         );
//     }

//     addSim(sim) {
//         if (this.sims.length === 2) {
//             console.log("You can't add more than 2 SIMs");
//             return;
//         }
//         this.sims.push(sim);
//     }
// }

// class Sim {
//     constructor(brand, balance) {
//         this.brand = brand;
//         this.balance = balance;
//     }

//     addBalance(amount) {
//         if (amount <= 0) {
//             console.log("Balance must be greater than 0");
//             return;
//         }
//         this.balance += amount;
//     }
// }

// // Usage
// let myMobileShop = new MobileShop();

// let mobile1 = new Mobile("Apple", "iPhone 13", 999, 128, "4GB", "12MP");
// let sim1 = new Sim("Jio", 50);
// mobile1.addSim(sim1);
// myMobileShop.addMobile(mobile1);

// let mobile2 = new Mobile("Samsung", "Galaxy S21", 799, 256, "8GB", "64MP");
// let sim2 = new Sim("Airtel", 100);
// mobile2.addSim(sim2);
// myMobileShop.addMobile(mobile2);

// myMobileShop.listMobiles();
// mobile1.getMobileInfo();
