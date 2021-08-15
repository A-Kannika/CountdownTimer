const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

// Expected day to graduate
const congratDay = "31 Dec 2022";

function countdown(){
        const congratsDate = new Date(congratDay); //set graduation date
        const currentDate =  new Date(); // set current date

        const totalSeconds = (congratsDate - currentDate) / 1000;

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysEL.innerHTML = formatTime(days);
        hoursEL.innerHTML = formatTime(hours);
        minsEL.innerHTML = formatTime(mins);
        secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time){
        return time < 10 ? (`0${time}`) : time;
}


// Initial call
countdown();
setInterval(countdown, 1000);