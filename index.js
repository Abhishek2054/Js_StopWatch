window.onload = function (){
    // initialising the variables (watch timimg) with 00
    var min = 00, sec = 00, tens = 00;

    // fetching the html elements by their ID's
    var appTens = document.getElementById("tens");
    var appSec = document.getElementById("sec");
    var appMin = document.getElementById("min");
    var startBtn = document.getElementById("start_btn");
    var stopBtn = document.getElementById("stop_btn");
    var resetBtn = document.getElementById("reset_btn");
    var Interval;


    // adding onclick event to the start btn
    startBtn.onclick = function(){
        clearInterval(Interval);
        // here I'm calling the start timer function for each milisec
        Interval = setInterval(startTimer, 10);
    }

    // adding onclick event to the stop btn
    stopBtn.onclick = function(){
        clearInterval(Interval);
    }

    // adding onclick event to the reset btn
    resetBtn.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        sec = "00";
        min = "00";
        appTens.innerHTML = tens;
        appSec.innerHTML = sec;
        appMin.innerHTML = min;
    }

    // start function for stopwatch
    function startTimer() {
        // here I'm increasing the tens
        tens++;

        if(tens <= 9){
            appTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appTens.innerHTML = tens;
        }
        if(tens > 99){
            sec++;
            appSec.innerHTML = "0" + sec;
            tens = 0;
            appTens.innerHTML = "0" + 0;
        }

        if(sec > 9){
            appSec.innerHTML = sec;
        }

    }




}