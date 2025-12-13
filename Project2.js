 var prg= document.querySelector("#progress")
 var btn= document.querySelector("button")
 var per = document.querySelector("#percent")

var grow =0;
 btn.addEventListener("click", function(){
 var set = setInterval(function(){

    if(grow >=99){
        clearInterval(set);
    }
    grow++;
    per.innerHTML= grow + "%";
    prg.style.width= grow + "%";
    
},100);
 })

    