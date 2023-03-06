let intervalId;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let stopwatch = document.getElementById("stopwatch");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

// event listeners added to run functions on start, stop, and reset
startButton.addEventListener("click", function () {
  startStopwatch()
});

stopButton.addEventListener("click", function () {
  stopStopwatch()
});

resetButton.addEventListener("click", function () {
  resetStopwatch()
});


// start function utilizes the set interval function to run every ten miliseconds. Time is added to the stopwatch
// 10 miliseconds at a time. Once time reaches 1000 miliseconds (1 full second) the stopwatch adds seconds. If
// the stopwatch reaches 60 seconds, it starts tallying minutes as well. If it reaches 60 minutes, hours are counted.
function startStopwatch() {
  intervalId = setInterval(() => {
    milliseconds += 10;
    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    // this portion of the code dictates what is added to the html. Turnery operators are used to show each alternative based on 
    // how much time has been counted
      stopwatch.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" + (seconds > 9 ? seconds : "0" + seconds) +
        ":" + (milliseconds > 99 ? milliseconds : (milliseconds > 9 ? "0" + milliseconds : "00" + milliseconds));
    }, 10);
}

// stopping the stopwatch clears the interval 
function stopStopwatch() {
  clearInterval(intervalId);
}

// resetting the stopwatch sets the javascript counter back to 0, and resets the counter in the html to 0
function resetStopwatch() {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  stopwatch.innerHTML = "00:00:00:000";
}
