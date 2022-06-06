// Get current date 

function clock() {
    const today = new Date();

    //---------TIME----------

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

    //---------DATE----------

    let dayNumber = today.getDate();
    const dayName = today.toLocaleString("default", {weekday: "long"});
    const monthName = today.toLocaleString("default", {month: "short"});
    const year = today.getFullYear();

    // Add the 0 for day number lower than 10 

    dayNumber = dayNumber < 10 ? "0" + dayNumber : dayNumber;

    document.querySelector(".day_number").innerHTML = dayNumber;
    document.querySelector(".day_name").innerHTML = dayName;
    document.querySelector(".month_name").innerHTML = monthName;
    document.querySelector(".year").innerHTML = year;

}

setInterval(clock, 1000)