var seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    var h2= document.getElementsByTagName('h2')[0];
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h2.textContent= (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
timer();
}


/* Start button */
function timer(){
    t=setTimeout(add, 1000);
};


/* Stop button */
function stopit() {
    clearTimeout(t);
}

/* Clear button */
function resetit() {
    var h2= document.getElementsByTagName('h2')[0];
    h2.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}
