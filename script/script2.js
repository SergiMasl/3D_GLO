window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  /*
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
*/
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
/*
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

  const slider = () => {
    const slides = document.querySelectorAll(".portfolio-item"),
      btn = document.querySelectorAll(".portfolio-btn"),
      slider = document.querySelector(".portfolio-content"),
      dotsUl = document.querySelector(".portfolio-dots");

    let currentSlide = 0;
    let interval;

    // вставляем точки
    slides.forEach((elem) => {
      let newDot = document.createElement("li");
      newDot.classList.add("dot");
      dotsUl.appendChild(newDot);
    });

    const dot = document.querySelectorAll(".dot");

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slides, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      nextSlide(slides, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    };

    const startSlide = (time) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlider = () => {
      clearInterval(interval);
    };

    slider.addEventListener("click", (event) => {
      event.preventDefault();
      let target = event.target;

      if (!target.matches(".portfolio-btn, .dot")) {
        return;
      }

      prevSlide(slides, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");

      if (target.matches("#arrow-right")) {
        currentSlide++;
      } else if (target.matches("#arrow-left")) {
        currentSlide--;
      } else if (target.matches(".dot")) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }

      nextSlide(slides, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    });
    slider.addEventListener("mouseover", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        stopSlider();
      }
    });

    slider.addEventListener("mouseout", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        startSlide(2000);
      }
    });

    startSlide(2000);
  };

  slider();
*/
/*
  //23
  const imgTeams = document.querySelectorAll(".command__photo");

  imgTeams.forEach((image) => {
    let oldPic = "";

    image.addEventListener("mouseenter", (event) => {
      oldPic = event.target.src;
      event.target.src = event.target.dataset.img;
    });

    function mouseLeaveImg() {
      event.target.src = oldPic;
    }

    image.addEventListener("mouseleave", mouseLeaveImg);
  });

  // калькулятор

  // const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block"),
    calcType = document.querySelector(".calc-type"),
    calcSquare = document.querySelector(".calc-square"),
    calcDay = document.querySelector(".calc-day"),
    calcCount = document.querySelector(".calc-count"),
    totalValue = document.querySelector("#total");

  //2
  function chechNumbers(event) {
    event.target.value = event.target.value.replace(/\D/g, "");
  }

  calcSquare.addEventListener("input", chechNumbers);
  calcDay.addEventListener("input", chechNumbers);
  calcCount.addEventListener("input", chechNumbers);

  // форма

  const formName = document.querySelector("#form2-name");
  const formMessage = document.querySelector("#form2-message");
  const formEmail = document.querySelector("#form2-email");
  const mobile = document.querySelector("#form2-phone");

  function chechWords(event) {
    console.log("fsd");
    event.target.value = event.target.value.replace(/[^а-я ]/gi, "");
  }

  formName.addEventListener("input", chechWords);
  formMessage.addEventListener("input", chechWords);

  formEmail.addEventListener("input", (event) => {
    formEmail.value = formEmail.value.replace(/[^a-z@\-\.\_!~\*\']/gi, "");
  });

  mobile.addEventListener("input", (event) => {
    mobile.value = mobile.value.replace(/[^0-9()\-]/gi, "");
  });

  function checkBlur(event) {
    event.target.value = event.target.value.replace(/-{1,}/g, "-");
    event.target.value = event.target.value.replace(/ {1,}/g, " ");
    event.target.value = event.target.value.replace(/\({1,}/g, "(");
    event.target.value = event.target.value.replace(/\){1,}/g, ")");
    event.target.value = event.target.value.replace(/@{1,}/g, "@");
    event.target.value = event.target.value.replace(/\.{1,}/g, ".");
    event.target.value = event.target.value.replace(/\_{1,}/g, "_");
    event.target.value = event.target.value.replace(/~{1,}/g, "~");
    event.target.value = event.target.value.replace(/\*{1,}/g, "*");
    event.target.value = event.target.value.replace(/\'{1,}/g, "'");
  }

  mobile.addEventListener("blur", checkBlur);
  formEmail.addEventListener("blur", checkBlur);
  formMessage.addEventListener("blur", checkBlur);

  formName.addEventListener("blur", () => {
    let arr = [];
    let newArr = [];

    arr = formName.value.split(" ");

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    for (let i = 0; i < arr.length; i++) {
      let newString = capitalizeFirstLetter(arr[i]);
      newArr.push(newString);
    }

    let newName = newArr.join(" ");
    formName.value = newName;

    console.log(newArr);
  });

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;

    const typeValue = calcType.options[calcType.selectedIndex].value,
      squareValu = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValu) {
      total = Math.floor(
        price * typeValue * squareValu * countValue * dayValue
      );

      let startCalc = 0;
      let step = Math.floor(total / 50);

      let calcSteps = setInterval(function () {
        startCalc = startCalc + step;

        if (startCalc <= total) {
          totalValue.textContent = startCalc;
        } else {
          clearInterval(calcSteps);
        }
      }, 10);
    }
  };

  calcBlock.addEventListener("change", (event) => {
    const target = event.target;

    if (
      target === calcType ||
      target === calcSquare ||
      target === calcDay ||
      target === calcCount
    ) {
      countSum();
    }
  });
};

calc(100);
*/


  //send-ajax-form
/*
  let phoneNumbers = document.querySelectorAll('.form-phone');

  phoneNumbers.forEach((item) => {
    item.addEventListener("input", (event) => {
      item.value = item.value.replace(/[^0-9()+\-]/gi, "");
    });
  });

  let nameForm = document.querySelectorAll('.form-name');

  nameForm.forEach((item) => {
    item.addEventListener("input", (event) => {
      item.value = item.value.replace(/[^а-я ]/gi, "");
    });
  });

  let messageForm = document.querySelector('#form2-message');

    messageForm.addEventListener("input", (event) => {
      messageForm.value = messageForm.value.replace(/[^а-я0-9,. ]/gi, "");
    });
*/

const sendForm = () => {

  const errorMwssege = 'что то не так',
    loadMessage ='загрузка',
    successMessage = 'Форма отправлена, Ждите ответа';

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem; color: black; background: white'

//форма верхняя
  const form = document.getElementById('form1');
      

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(form);
      let body ={};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then(() =>{
          statusMessage.textContent = successMessage;
        })
        .catch((error) => {
            statusMessage.textContent = errorMwssege + 'потому что ' + error.message;

          });

      form.reset()
  
    });


  //форма "наши услуги"

  const formPopup = document.getElementById('form3');

  formPopup.addEventListener('submit', (event) => {
    event.preventDefault();
    formPopup.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(formPopup);
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

     postData(body)
        .then(() =>{
          statusMessage.textContent = successMessage;
        })
        .catch((error) => {
            statusMessage.textContent = errorMwssege + 'потому что ' + error.message;

          });
      
      formPopup.reset()

    });


//форма "Контактной форме в самом низу страницы"

  const formContact = document.getElementById('form2');

  formContact.addEventListener('submit', (event) => {
    event.preventDefault();
    formContact.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(formContact);
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

     postData(body)
        .then(() =>{
          statusMessage.textContent = successMessage;
        })
        .catch((error) => {
            statusMessage.textContent = errorMwssege + 'потому что ' + error.message;

          });
      
      formContact.reset()

    });

//////////
    const postData = (body) => {
      
      return fetch(('./server.php'), {
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify(body)
      });
    };
  };

sendForm();

  







});
