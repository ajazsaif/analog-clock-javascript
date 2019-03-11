setInterval(function(){
    var date = new Date();
    UpdateTime(date);
    UpdateClock(date);
},1000);

function UpdateClock(date){
  var secHand   =   document.getElementById("sec-hand").style;  
  var minHand   =   document.getElementById("min-hand").style;  
  var hrHand    =   document.getElementById("hr-hand").style;  
secHand.transform = "rotate("+date.getSeconds() * 6 + "deg)";
minHand.transform = "rotate("+date.getMinutes() * 6 + "deg)";
hrHand.transform = "rotate("+(date.getHours() * 30 + date.getMinutes() * 0.5)+ "deg)";
}

function UpdateTime(date){
    var timeDiv =   document.getElementById("time");
    var time    =   "Time for refrence -- "+date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
    //timeDiv.innerHTML   =   time;
}