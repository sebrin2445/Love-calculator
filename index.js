
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
if(loveCal===100){
   document.getElementById("form").innerHTML="your love score is "+ loveCal+"%" + " Congratulation your now husband and wife";

   document.getElementById("title").innerHTML="your soulmate is "+ othername;
   
} 
 if(loveCal>75){
    var element=document.getElementById("sec");
    
    element.style.display="block";
    var lii=document.querySelectorAll("#li");
    var image="images/heart1.png";

    for(var i=0; i<lii.length;i++){
        lii[i].style.backgroundImage="url('"+image+"')";
    
    }
    
    hey=loveCal + "%";
document.getElementById("title").innerHTML="I think We got the soulmate "+ othername + " is the one";

document.getElementById("form").innerHTML="Dear " + username + " Your love score is "+ hey;
document.section.style.display="block";
}
else if(loveCal<75 && loveCal>30){
    //alert(loveCal+"%");
    
    var element=document.getElementById("sec");
    
    element.style.display="block";
    var lii=document.querySelectorAll("#li");
    var image="images/inlove1.png";

    for(var i=0; i<lii.length;i++){
        lii[i].style.backgroundImage="url('"+image+"')";
    
    }
    
    hey=loveCal + "%";
    document.getElementById("title").innerHTML="Dear "+ username;

document.getElementById("title").innerHTML="Dear " + username + "Your love score is "+ hey;
document.body.style.background = "pink";
document.getElementById("form").innerHTML="Better not to say "+ othername + " is your soulmate";



}
else{
    var element=document.getElementById("sec");
    
    element.style.display="block";
    var lii=document.querySelectorAll("#li");
    var image="images/brokenheart.jpg";

    for(var i=0; i<lii.length;i++){
        lii[i].style.backgroundImage="url('"+image+"')";
    
    }
    
    hey=loveCal + "%";
    document.getElementById("title").innerHTML = "Dear " +"  " + username + " this one is hard";
    document.getElementById("imgg").innerHTML = "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Fid2JtaHR4emk1MXp4d2YzdmV0enJleWVvcjhxem9oYmlnOHpybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oPqLjAcwhYosXbTJW7/giphy.gif')";
    document.getElementById("form").innerHTML="Maybe Your soulmate died idk but ik "+ othername +" will never be ur soulmate sorry dear"
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  

}
}
