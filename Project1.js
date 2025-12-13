        let btn = document.getElementById('btn');
        let box = document.getElementById('box');
       let h1 = document.getElementById('h1');

  let arr = [
  {
    name: "CSK",
    trophies: 5,
    jerseyColor: "Yellow"
  },
  {
    name: "MI",
    trophies: 5,
    jerseyColor: "Blue"
  },
  {
    name: "KKR",
    trophies: 3,
    jerseyColor: "Purple & Gold"
  },
  {
    name: "SRH",
    trophies: 1,
    jerseyColor: "Orange"
  },
  {
    name: "RR",
    trophies: 1,
    jerseyColor: "Pink & Blue"
  },
  {
    name: "RCB",
    trophies: 0,
    jerseyColor: "Red & Black"
  },
  {
    name: "DC",
    trophies: 0,
    jerseyColor: "Blue & Red"
  },
  {
    name: "PBKS",
    trophies: 0,
    jerseyColor: "Red"
  },
  {
    name: "GT",
    trophies: 1,
    jerseyColor: "Dark Blue & Gold"
  },
  {
    name: "LSG",
    trophies: 0,
    jerseyColor: "Turquoise & Orange"
  }
];


       btn.addEventListener('click', function () {
    h1.innerText = "THE WINNER IS";

    let randomTeam = Math.floor(Math.random() * arr.length);

    box.innerText = arr[randomTeam].name.toUpperCase();
});
console.log(window);
