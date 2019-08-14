function greeting() {
    let curTime = new Date();
    let greet = document.getElementById("greeting");
    if (curTime.getHours() >= 17) {
        greet.innerHTML = "Good Evening, Andrew!";
    } else if (curTime.getHours() >= 12) {
        greet.innerHTML = "Good Afternoon, Andrew!";
    } else if (curTime.getHours() < 12) {
        greet.innerHTML = "Good Morning, Andrew!";
    }
}

greeting();
