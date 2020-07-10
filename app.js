var ms = 0; 
var s = 0; 
var m = 0;
var mheading = document.getElementById("m")
var sheading = document.getElementById("s")
var msheading = document.getElementById("ms")
var interval;

var stopwatchEl = document.querySelector('.stopwatch');
var lapscontainer = document.querySelector('.laps');

function start(){
    if(!interval){
        interval = setInterval(run,10);
    }
    
}

function run(){
    stopwatchEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
    ms++;
    msheading.innerHTML = ms;
    if(ms == 100){
        ms = 0;
        s++
        sheading.innerHTML = s;
    }
    if(s == 60){
        s = 0;
        m++;
        mheading.innerHTML = m;

    }

}

function pause(){
    stopTimer();
}

function stop(){
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    stopwatchEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);

    
}

function stopTimer(){
    clearInterval(interval);
    interval = false;
}

function getTimer(){
   return stopwatchEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);

}


function restart(){
    stop();
    start();
}

function lap(){
    if(interval){
        var li = document.createElement('li');
        li.innerText = getTimer();
        lapscontainer.appendChild(li);


    }
    
}

function clearlaps(){
    lapscontainer.innerHTML = '';
}

// function start() {

//     (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);

//     if(!interval){
//         interval = setInterval(run, 10);
//     }
    
// }

// function timer() {
//     ms++;
//     msheading.innerHTML = ms;
//     if(ms == 100) {
//         s++;
//         sheading.innerHTML = s;
//         ms = 0
//     }else if(s >= 60){
//         m++;
//         mheading.innerHTML = m;
//         s = 0;
//     }
// }

// function start(){
//     (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
//         interval = setInterval(timer, 10); 
       
// }
    
// function Pause(){
//      clearInterval(interval)
//      document.getElementById('start()').disabled = false
     

// }  

// function Reset(){
//     (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);

   
//      m = 0;
//     s = 0;
//     ms = 0;
//     mheading.innerHTML = m;
//     sheading.innerHTML = s;
//     msheading.innerHTML = ms;
//     document.getElementById('start()').disabled = false

// }

// function getTimer(){
//     return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
// }
//  function lap(){
//      if(interval){
//         var lapheading = document.createElement("laps");
//         laps.innerHTML = interval(laps);
//         laps.appendChild(laps);

//      }
     
//  }