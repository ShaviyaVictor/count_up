// The day I joined Group IT Software Development Team
// Create a function to calculate the time difference
function countUp() {

  // create variables for the different dates
  var lastOutage = new Date("May 31, 2022 08:00:00");
  var today = new Date()

  // create variabes for the different times
  var outageTime = lastOutage.getTime();
  var currentTime = today.getTime();

  // create a variable for holding the time diffence in milliseconds(1000)
  var timeDifference = currentTime - outageTime;

  // classify the time days, hrs, min, sec and use floor to avoid decimal values
  var sec = Math.floor(timeDifference / 1000);
  var min = Math.floor(sec / 60);
  var hrs = Math.floor(min / 60);
  var days = Math.floor(hrs / 24);

  // get the obtained remaining values
  hrs%=24;
  min%=60;
  sec%=60;

  // capturing single value digits and appending a zero
  hrs = (hrs < 10) ? '0' + hrs : hrs;
  min = (min < 10) ? '0' + min : min;
  sec = (sec < 10) ? '0' + sec : sec;

  // print the values on the html page
  document.getElementById('days').innerHTML = days;
  document.getElementById('hrs').innerHTML = hrs;
  document.getElementById('min').innerHTML = min;
  // document.getElementById('sec').innerHTML = sec;

  // adding lastoutage date to the html page
  lastOutage = new Date("May 31, 2022 08:00:00").toLocaleDateString('en-us', {
    // weekday:'long',
    year:'numeric',
    month:'short',
    day:'numeric'
  })
  document.getElementById('outage').innerHTML = lastOutage;

  // format date today
  today = new Date().toLocaleDateString('en-us', {
    weekday:'long',
    year:'numeric',
    month:'short',
    day:'numeric'
  })

  document.getElementById('time').innerHTML = today;

  setTimeout(countUp, 1000);


}

countUp();