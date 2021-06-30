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

  countTimer("20 july 2010");

  const toggleMenu = () => {
    const btnMenu = document.querySelector(".menu"),
      menu = document.querySelector("menu"),
      closeBtn = document.querySelector(".close-btn"),
      menuItems = menu.querySelectorAll("ul>li");

    menu.addEventListener("click", (event) => {
      let target = event.target;
      if (target === closeBtn || target.tagName === "A") {
        handlerMenu();
      }
    });

    const handlerMenu = () => {
      menu.classList.toggle("active-menu");
    };

    btnMenu.addEventListener("click", handlerMenu);
  };

  toggleMenu();

  //popup

  const toggelPopUp = () => {
    const popup = document.querySelector(".popup");
    //blockA = document.querySelector(".popup-content");
    const popupBtn = document.querySelectorAll(".popup-btn");

    popupBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        popup.style.display = "block";
      });
    });

    popup.addEventListener("click", (event) => {
      let target = event.target;

      if (target.classList.contains("popup-close")) {
        popup.style.display = "none";
      } else {
        target = target.closest(".popup-content");

        if (!target) {
          popup.style.display = "none";
        }
      }
    });
  };

  toggelPopUp();

  //           таймер
  // let start = Date.now();

  // let timer = setInterval(function () {
  //   let timePassed = Date.now() - start;
  //   popup.style.display = "block";

  //   blockA.style.left = timePassed / 5 + "px";

  //   let windowHaft = document.documentElement.clientWidth / 2;
  //   let popUpHalf = blockA.getBoundingClientRect().width / 2;
  //   let leftPosishin = blockA.getBoundingClientRect().left + popUpHalf;
  //   console.log(leftPosishin, windowHaft);
  //   if (leftPosishin > windowHaft) clearInterval(timer);
  // }, 20);

  // popupClose.addEventListener("click", () => {
  //   popup.style.display = "none"
  // })

  // Табы

  const tabs = () => {
    const tabHeader = document.querySelector(".service-header"),
      tab = document.querySelectorAll(".service-header-tab"),
      tabContent = document.querySelectorAll(".service-tab");

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add("active");
          tabContent[i].classList.remove("d-none");
        } else {
          tabContent[i].classList.add("d-none");
          tab[i].classList.remove("active");
        }
      }
    };

    tabHeader.addEventListener("click", (event) => {
      let target = event.target;

      target = target.closest(".service-header-tab"); //!!!!!!! поднимает дерево и возвращает null если не найден селектор, видит только родителей

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();
});
