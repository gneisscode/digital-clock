let clock = document.querySelector("#clock");


function displayTime() {
    // Getting the currentTIme from the Date() object
    let currentTime = new Date();
    // Getting hours minutes and seconds using the date methods. 
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let date= currentTime.getDate();
    let month = currentTime.getMonth();
    let year= currentTime.getFullYear();
   
    
    // Getting the day in the form of number
    let day = currentTime.getDay();
    let meridiem = "AM";

    // setting up the array of week to use it with day which comes in the form of a number
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months=["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December" ]

    // storing the day of the week by using the days array. 
    let day_of_week = days[day];
    let months_of_year=months[month]

    // if hours are greater than 12 then we need to switch to PM
    // also to make sure that we aren't following the 24 hours clock. We will subtract
    // 12 from the hours. 
    if(hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }

    // If it is midnight then we have to reset the 00 hours to 12 AM
    if(hours === 0) {
        hours = 12;
    }

    // if the seconds, minutes or hours are less than 10 then we have to pad them with a zero to 
    // the left
    if(seconds < 10) {
        seconds = `0${seconds}`;
    }

    if(minutes < 10) {
        minutes = `0${minutes}`;
    }

    if(hours < 10) {
        hours = `0${hours}`;
    }

    if (date<10){
        date= `0${date}`
    }
    setTimeout(function () {
      displayTime();
    }, 1000);

    // inserting all the data inside the clock div with its own HTML elements
    clock.innerHTML = `
    <div>
        <h1>${hours}:${minutes}:${seconds} ${meridiem}</h1>
        <h2>${day_of_week}<br>${date}-${months_of_year}-${year}</h2> 
        
    </div>
    `;  
    
 
}

// Calling the function at the end to display or run the program. 
displayTime();