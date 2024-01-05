let txtchanger  = document.getElementsByClassName("txt-changer")[0];

txtchanger.addEventListener("click", function(){
    document.getElementById("lead").innerHTML = "Is you text has changed?";
})



let bulb = document.getElementById("bulb");
let onBulb = document.getElementById("on-btn");
let offBulb = document.getElementById("off-btn");

onBulb.addEventListener("click", function(){
    bulb.src = "https://cdn3.vectorstock.com/i/1000x1000/43/07/light-bulb-on-black-vector-1094307.jpg";
});

offBulb.addEventListener("click", function(){
    bulb.src = "https://previews.123rf.com/images/peshkova/peshkova1206/peshkova120600306/14060282-light-bulb-on-a-white-background.jpg";
});

function txtColorChange(){
    if(document.getElementById("txtForChange").style.color == "red"){
        document.getElementById("txtForChange").style.color = "black";
    }else{
        document.getElementById("txtForChange").style.color = "red";
    }
};

function txtText(){
    if(document.getElementById("txtForChange").style.opacity == "1"){
        document.getElementById("txtForChange").style.opacity = "0";
    }else{
        document.getElementById("txtForChange").style.opacity = "1";
    }
};



