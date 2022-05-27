const daysEl = document.getElementById('days');     // El = Element
const hoursEl = document.getElementById('hours');      // creates a reference to elements in HTML file
const minutesEl = document.getElementById('minutes'); 
const secondsEl = document.getElementById('seconds'); 

const birthday = '24 Aug 2022';

function countdown() {
    const birthdayDate = new Date (birthday);     //  // creating an Date object with '25 Dec 2022' as the value
    const currentDate = new Date();     // creating a Date object with todays date as the value

    const totalSeconds = (birthdayDate - currentDate) / 1000;      // converts time remaining into totalSeconds remaining 
    const days = Math.floor(totalSeconds / 3600 / 24);     // converts time remaining into days remaining
    const hours = Math.floor(totalSeconds / 3600) % 24;     // converts time remaining into hours remaining
    const minutes = Math.floor(totalSeconds / 60) % 60     // converts time remaining into minutes remaining
    const seconds = Math.floor(totalSeconds) % 60;
    //console.log(christmasDate - currentDate);     // returns: 18259286800 (time in ms)
    //console.log(days, hours, minutes, seconds); 

    daysEl.innerHTML = formatTime(days);     // The innerHTML property sets or returns the HTML content (inner HTML) of an element.
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;     // if seconds is less than 10 show a '0' infront of the seconds remaing (03 instead of 3)
}

countdown();     // initial call

setInterval (countdown, 1000);     // calls countdown function every second 1000ms = 1s
