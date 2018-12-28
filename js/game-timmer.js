$( document ).ready(function() {
	var clock;
document.getElementById('submit').addEventListener('click',function(){
	var timming_text= " your timming";
document.getElementById('userone').innerText=document.getElementById('useronename').value +timming_text;
document.getElementById('usersecond').innerText=document.getElementById('usersecondname').value +timming_text;
document.getElementById('form-div').style.display = "none";
document.getElementById('result-div').style.display = "block";

});

$('body').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
  if(clock)
  clearInterval(clock);
  
  var userOne=document.getElementById('useronetimer');
  var userSecond=document.getElementById('usersecondtimer');
  var userOneTime=document.getElementById('useronetimer').innerText;
  var userSecondTime=document.getElementById('usersecondtimer').innerText;
  var activeUser;
  
  if((userOne.getAttribute('value')=='0'&&userSecond.getAttribute('value')=='0')||(userOne.getAttribute('value')=='0')){
  activeUser=userOne;
  activeUser.setAttribute('value','1');
  usersecond.setAttribute('value','0');
  }else{
  activeUser=userSecond; 
  activeUser.setAttribute('value','1');
  userOne.setAttribute('value','0');
  }
  
   clock=setInterval(function(){
   var minutes=Number(activeUser.innerText.split(":")[0]);
   var seconds=Number(activeUser.innerText.split(":")[1]);
	  if(!seconds){
	  minutes=minutes-1;
	  seconds=59;
	  }else{
	  seconds=seconds-1;
	  }
	  activeUser.innerText="0"+minutes+":"+seconds;
	  if(minutes===0&&seconds===0){
	  clearInterval(clock);
	  }
   },1000);
  }
});
});