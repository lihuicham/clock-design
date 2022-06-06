// get current time 

function clock() {
    const today = new Date();
    
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period;

    // Set the time period (AM/PM)

    period = hours > 12 ? "PM" : "AM"

    // Set the 12-hour clock format 
    hours = hours > 12 ? hours % 12 : hours;

    // Add the 0 for the values lower than 10 
    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    
    //change the html content 
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
}

setInterval(clock, 1000)