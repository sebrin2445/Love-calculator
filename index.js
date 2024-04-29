
let username;
let othername;
document.getElementById("btns").onclick = function(){
    username=document.getElementById("inputyour").value;
    othername=document.getElementById("inputhis").value;
    document.getElementById("title").innerHTML = username;
   console.log(username);
}

var loveCal=Math.random();
loveCal=loveCal*100;
loveCal=Math.floor(loveCal)+1;
let hey;
document.getElementById("btns").onclick = function(){

    username=document.getElementById("inputyour").value;
    othername=document.getElementById("inputhis").value;
if(loveCal===100&& loveCal<90){
    var element=document.getElementById("sec");
    
    element.style.display="block";
    var elementt=document.getElementById("head");
    elementt.style.display="block";
    var lii=document.querySelectorAll("#li");
    var image="images/justgetmarried.png";

    for(var i=0; i<lii.length;i++){
        lii[i].style.backgroundImage="url('"+image+"')";

        
    
    }
    
    var lii2=document.querySelectorAll("#li1");
    var imagee="images/married.png";
    for(var i=0; i<lii.length;i++){
        lii2[i].style.backgroundImage="url('"+imagee+"')";

        
    
    }
   document.getElementById("form").innerHTML="your love score is "+ loveCal+"%" + " Congratulation your now husband and wife";

   document.getElementById("title").innerHTML="your soulmate is "+ othername;
   
} 
 if(loveCal>75){
    var element=document.getElementById("sec");
    
    element.style.display="block";
    var elementt=document.getElementById("head");
    elementt.style.display="block";
    var lii=document.querySelectorAll("#li");
    var image="images/melted.png";

    for(var i=0; i<lii.length;i++){
        lii[i].style.backgroundImage="url('"+image+"')";

        
    
    }
    
    var lii2=document.querySelectorAll("#li1");
    var imagee="images/melting.png";
    for(var i=0; i<lii.length;i++){
        lii2[i].style.backgroundImage="url('"+imagee+"')";

        
    
    }
    
    hey=loveCal + "%";
document.getElementById("title").innerHTML="I think We got the soulmate "+ othername + " is the one";

var textt=document.getElementById("form").innerHTML="Dear " + username + " Your love score is "+ hey;
textt.style.fontweight ="800";

document.section.style.display="block";
}
else if(loveCal<75 && loveCal>30){
    //alert(loveCal+"%");
    
    var element=document.getElementById("sec");
    
    element.style.display="block";
    var elementt=document.getElementById("head");
    elementt.style.display="block";
    var lii=document.querySelectorAll("#li");
    var image="images/confusedheart.png";

    for(var i=0; i<lii.length;i++){
        lii[i].style.backgroundImage="url('"+image+"')";

        
    
    }
    
    var lii2=document.querySelectorAll("#li1");
    var imagee="images/confused.png";
    for(var i=0; i<lii.length;i++){
        lii2[i].style.backgroundImage="url('"+imagee+"')";

        
    
    }
    
    hey=loveCal + "%";
    document.getElementById("title").innerHTML="Dear "+ username;

document.getElementById("title").innerHTML="Dear " + username + "Your love score is "+ hey;
document.body.style.background = "pink";
var textt=document.getElementById("form").innerHTML="Better not to say "+ othername + " is your soulmate";

textt.style.fontweight ="800";


}
else{
    var element=document.getElementById("sec");
    
    element.style.display="block";
    var elementt=document.getElementById("head");
    elementt.style.display="block";
    var lii=document.querySelectorAll("#li");
    var image="images/brokenheart.png";

    for(var i=0; i<lii.length;i++){
        lii[i].style.backgroundImage="url('"+image+"')";

        
    
    }
    
    var lii2=document.querySelectorAll("#li1");
    var imagee="images/sad.png";
    for(var i=0; i<lii.length;i++){
        lii2[i].style.backgroundImage="url('"+imagee+"')";

        
    
    }
    
    hey=loveCal + "%";
    document.getElementById("title").innerHTML = "Dear " +"  " + username + " this one is hard";
    document.getElementById("imgg").innerHTML = "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Fid2JtaHR4emk1MXp4d2YzdmV0enJleWVvcjhxem9oYmlnOHpybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oPqLjAcwhYosXbTJW7/giphy.gif')";
    var textt=document.getElementById("form").innerHTML="Maybe Your soulmate died idk but ik "+ othername +" will never be ur soulmate sorry dear"
    textt.style.fontweight ="800";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  

}
}
