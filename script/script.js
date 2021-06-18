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



  const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    menuItems = menu.querySelectorAll('ul>li'); //получили детей

  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    menuItems = menu.querySelectorAll('ul>li'); //получили детей

      const handlerMenu = () => {
    // if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
    //        menu.style.transform = `translate(0)`;
    //     } else {
    //       menu.style.transform = `translate(-100%)`;
    //     }
      //// OR
      menu.classList.toggle('active-menu')

    };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);

    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };

  toggleMenu();


  //popup

  const toggelPopUp = () => {
    const popup = document.querySelector('.popup'),
     blockA = document.querySelector('.popup-content'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close');

      popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
          let start = Date.now();

          let timer = setInterval(function() {
            let timePassed = Date.now()- start;
            popup.style.display = 'block';

            blockA.style.left = timePassed / 5 + 'px';

            let windowHaft = document.documentElement.clientWidth / 2;
            let popUpHalf = blockA.getBoundingClientRect().width / 2;
            let leftPosishin = blockA.getBoundingClientRect().left + popUpHalf;
            console.log(leftPosishin, windowHaft)
            if (leftPosishin > windowHaft ) clearInterval(timer);
          }, 20)
        })
      });

    popupClose.addEventListener('click',() => {
     popup.style.display = 'none';
   });
  }

toggelPopUp();













});