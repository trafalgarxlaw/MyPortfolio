if(performance.navigation.type == 2){
  location.reload(true);
}
let opened=false;
let clicked=false;
let Chekboxopened=false;

function Chekbox(){
    if(Chekboxopened==false){
        document.getElementById('contact').style.fontSize = "14px";
        document.getElementById('contact').innerHTML = "contact";
    }
}

function ContactFunction(){ 
    if(window.innerWidth < 864){    
    if(opened){
    document.getElementById('contact').style.fontSize = "14px";
    document.getElementById('contact').innerHTML = "contact";
    }
    else{
    document.getElementById('contact').style.fontSize = "20px";
    document.getElementById('contact').style.transition = "all 1s";
    document.getElementById('contact').innerHTML = "masyyaf@gmail.com";
    }
    opened=!opened;
  }else{
    if(!opened){
        document.getElementById('contact').style.fontSize = "30px";
        document.getElementById('contact').style.transition = "all 1s";
        }
        else{
            document.getElementById('contact').style.fontSize = "14px";
        }
        opened=!opened;

  }
}

function MySkillsFunction(){ 
    if(window.innerWidth < 864){    
    if(opened){
    document.getElementById('myskills').style.fontSize = "14px";
    document.getElementById('myskills').innerHTML = "myskills";
    }
    else{
    document.getElementById('myskills').style.fontSize = "30px";
    document.getElementById('myskills').style.transition = "all 1s";
    }
    opened=!opened;
  }else{
    if(!opened){
        document.getElementById('myskills').style.fontSize = "30px";
        document.getElementById('myskills').style.transition = "all 1s";
        }
        else{
            document.getElementById('myskills').style.fontSize = "14px";
        }
        opened=!opened;

  }
}

function OverviewFunction(){ 
    if(window.innerWidth < 864){    
    if(opened){
    document.getElementById('overview').style.fontSize = "14px";
    document.getElementById('overview').innerHTML = "overview";
    }
    else{
    document.getElementById('overview').style.fontSize = "30px";
    document.getElementById('overview').style.transition = "all 1s";
    }
    opened=!opened;
  }else{
    if(!opened){
        document.getElementById('overview').style.fontSize = "30px";
        document.getElementById('overview').style.transition = "all 1s";
        }
        else{
            document.getElementById('overview').style.fontSize = "14px";
        }
        opened=!opened;

  }
}

function HomeFunction(){ 
    if(window.innerWidth < 864){    
    if(opened){
    document.getElementById('home').style.fontSize = "14px";
    document.getElementById('home').innerHTML = "home";
    }
    else{
    document.getElementById('home').style.fontSize = "30px";
    document.getElementById('home').style.transition = "all 1s";
    }
    opened=!opened;
  }else{
    if(!opened){
        document.getElementById('home').style.fontSize = "30px";
        document.getElementById('home').style.transition = "all 1s";
        }
        else{
            document.getElementById('home').style.fontSize = "14px";
        }
        opened=!opened;

  }
}
