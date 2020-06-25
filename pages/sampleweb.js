function fun1(){
    var user=document.getElementById("username_id").value;
regx =new RegExp("E00","i");
if (regx.test(user)) {
     
    document.getElementById("lable").style.visibility="hidden";
}
else {
   
    document.getElementById("lable").style.visibility="visible";
}
}
var ID=0;

function changeword(){
    document.getElementById("opid").innerHTML="4 seconds have already passed";
}
function start(){
 alert("hello"); 
}
function stop(){

}
