const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const referenceDate = '1 Jan 2022';

function countdown() {
    const newYearsDate = new Date(referenceDate);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) %24;
    const mins = Math.floor(totalseconds / 60) %60;
    const seconds = Math.floor(totalseconds) %60;

    daysEl.innerHTML = formattime(days);
    hoursEl.innerHTML = formattime(hours);
    minsEl.innerHTML = formattime(mins);
    secondsEl.innerHTML = formattime(seconds);
}

function formattime(time) {
    return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown, 1000);