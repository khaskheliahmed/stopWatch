

var head = document.querySelector("#timer");


var timer;
var sec = 0;
var min = 0;
var hr = 0;


function startTimer(){
  timer = setInterval(function () {

         sec = parseInt(sec);
         min = parseInt(min);
         hr = parseInt(hr);




      sec +=    1;
    if ( sec == 60){
      min =min + 1
      sec = 0; 
    }
    if( min == 60){
      hr = hr + 1;
      min = 0;
      sec  = 0;
    }


    if ( sec < 10 ){
       sec = "0" + sec;
       
    }

    if (min < 10){
      min = "0" + min;
      
    }
    if ( min < 10 ){
      hr = "0" + hr
    }


    head.innerHTML =    hr +":" + min + ":" + sec

  }, 1000)
      

}


function stoptime(){
  clearInterval(timer)
}


function resetTimer(){

  head.innerHTML = "00:00:00";
  sec = 0;
  min = 0;
  hr = 0;


}




