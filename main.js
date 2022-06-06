//------ SWITCH CLOCK FORMAT --------

const formatSwitchButton = document.querySelector(".format_switch_button");

formatSwitchButton.addEventListener('click', () => {
    formatSwitchButton.classList.toggle("active");

    var formatValue = formatSwitchButton.getAttribute("data-format");

    if (formatValue === "12") {
        formatSwitchButton.setAttribute("data-format", "24")
    } else {
        formatSwitchButton.setAttribute("data-format", "12")
    }
})


//----- SYNCING TIME & DATE --------

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
    var formatValue = formatSwitchButton.getAttribute("data-format");

    if (formatValue === "12") {
        hours = hours > 12 ? hours % 12 : hours;
    }

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


//----- DOT-MENU TOGGLE--------
const dotMenuIcon = document.querySelector(".dot_menu_icon");
const dotMenu = document.querySelector(".dot_menu");

dotMenuIcon.addEventListener('click', () => {
    dotMenu.classList.toggle("active")
})

// click anywhere on the screen to remove dot menu
// call the addEventListener function on the document 
document.addEventListener("click", (elem) => {
    if(elem.target.id !== "active-menu") {
        dotMenu.classList.remove("active")
    }
})