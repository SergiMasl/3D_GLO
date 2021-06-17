window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  function countTimer(dedline) {
    let timerHours = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");

    function getTimeRemaiming() {
      let dateStop = new Date(dedline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor((timeRemaining / 60 / 60) % 24);
      return { timeRemaining, hours, minutes, seconds };
    }

    function updateClock() {
      console.log("sss");
      let timer = getTimeRemaiming();

      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;

      if (timer.timeRemaining > 0) {
      } else {
        timerHours.textContent = "00";
        timerHours.style.color = "red";
        timerMinutes.textContent = "00";
        timerMinutes.style.color = "red";
        timerSeconds.textContent = "00";
        timerSeconds.style.color = "red";
        clearInterval(counter);
      }
    }

    let counter = setInterval(updateClock, 1000);
  }

  countTimer("20 july 2021");
});
