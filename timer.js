let timer = document.getElementById("timer")

function show24Hr() {
    let curTime = new Date();
    let hour = curTime.getHours();
    let minutes = curTime.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let timeString = hour + ":" + minutes;
    timer.innerHTML = timeString;
    timer.style.width = "3em";
}

function show12Hr() {
    let curTime = new Date();
    let hour = curTime.getHours();
    let minutes = curTime.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let meridiem = hour > 11 ? "PM" : "AM";
    let timeString = (hour > 12 ? hour - 12 : hour) + ":" + minutes + " " + meridiem;
    timer.innerHTML = timeString;
    timer.style.width = (hour >= 10 && hour <= 12) || (hour >= 22 && hour <= 24) ? "5em" : "4em";
}

let mode = 0;
let timerID = setInterval(show12Hr, 1000);
function swapHourMode() {
    clearInterval(timerID);
    if (mode == 0) {
        show24Hr();
        timerID = setInterval(show24Hr, 1000);
        mode = 1;
    } else {
        show12Hr();
        timerID = setInterval(show12Hr, 1000);
        mode = 0;
    }
}

timer.addEventListener("click", swapHourMode)

show12Hr()
