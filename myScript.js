let opened=false;
let clicked=false;
let Chekboxopened=false;

function myCfunction(){ 
    if(window.innerWidth < 864){    
    if(opened){
    document.getElementById('contact').style.fontSize = "14px";
    document.getElementById('contact').innerHTML = "contact";
    }
    else{
    document.getElementById('contact').style.fontSize = "30px";
    document.getElementById('contact').style.transition = "all 1s";
    document.getElementById('contact').innerHTML = "masyyaf@gmail.com";
    document.getElementById('contact').href="masyyaf@gmail.com";
    }
    opened=!opened;
}
}
function Chekbox(){
    if(Chekboxopened==false){
        document.getElementById('contact').style.fontSize = "14px";
        document.getElementById('contact').innerHTML = "contact";
    }
}