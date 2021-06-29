window.addEventListener("DOMContentLoaded", function () {
  "use strict";

//   	function countTimer(dedline) {
//     	let timerHours = document.querySelector("#timer-hours"),
//      	 timerMinutes = document.querySelector("#timer-minutes"),
//      	 timerSeconds = document.querySelector("#timer-seconds");


//     function getTimeRemaiming() {
//       let dateStop = new Date(dedline).getTime(),
//         dateNow = new Date().getTime(),
//         timeRemaining = (dateStop - dateNow) / 1000,
//         seconds = Math.floor(timeRemaining % 60),
//         minutes = Math.floor((timeRemaining / 60) % 60),
//         hours = Math.floor((timeRemaining / 60 / 60) % 24);
//       return { timeRemaining, hours, minutes, seconds };
//     }

//     function updateClock() {
//       let timer = getTimeRemaiming();

//       timerHours.textContent = timer.hours;
//       timerMinutes.textContent = timer.minutes;
//       timerSeconds.textContent = timer.seconds;

//       if (timer.timeRemaining > 0) {
//       } else {
//         timerHours.textContent = "00";
//         timerHours.style.color = "red";
//         timerMinutes.textContent = "00";
//         timerMinutes.style.color = "red";
//         timerSeconds.textContent = "00";
//         timerSeconds.style.color = "red";
//         clearInterval(counter);
//       }
//     }

//     let counter = setInterval(updateClock, 1000);
//   }

//   countTimer("20 july 2021");

//   const btnMenu = document.querySelector(".menu"),
//     menu = document.querySelector("menu"),
//     closeBtn = document.querySelector(".close-btn"),
//     menuItems = menu.querySelectorAll("ul>li"); //получили детей

//   const toggleMenu = () => {
//     const btnMenu = document.querySelector(".menu"),
//       menu = document.querySelector("menu"),
//       closeBtn = document.querySelector(".close-btn"),
//       menuItems = menu.querySelectorAll("ul>li"); //получили детей

//     const handlerMenu = () => {
//       // if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
//       //        menu.style.transform = `translate(0)`;
//       //     } else {
//       //       menu.style.transform = `translate(-100%)`;
//       //     }
//       //// OR
//       menu.classList.toggle("active-menu");
//     };

//     btnMenu.addEventListener("click", handlerMenu);
//     closeBtn.addEventListener("click", handlerMenu);

//     menuItems.forEach((elem) => elem.addEventListener("click", handlerMenu));
//   };

//   toggleMenu();

//   //popup

//   const toggelPopUp = () => {
//     const popup = document.querySelector(".popup"),
//     blockA = document.querySelector(".popup-content");
//     const popupBtn = document.querySelectorAll(".popup-btn");
//     const popupClose = document.querySelector('.popup-close');

//     popupBtn.forEach((elem) => {
//       elem.addEventListener("click", () => {
//           popup.style.display = "block";
//       });
//     });

//      popup.addEventListener('click', (event) => {
//       let target = event.target;

//       if(target.classList.contains('popup-close')){
//         popup.style.display = "none";
//       } else {
//         target = target.closest('.popup-content');
        
//         if(!target){
//           popup.style.display = "none";
//         }
//       }

//      });

  


//  //           таймер
//         // let start = Date.now();

//         // let timer = setInterval(function () {
//         //   let timePassed = Date.now() - start;
//         //   popup.style.display = "block";

//         //   blockA.style.left = timePassed / 5 + "px";

//         //   let windowHaft = document.documentElement.clientWidth / 2;
//         //   let popUpHalf = blockA.getBoundingClientRect().width / 2;
//         //   let leftPosishin = blockA.getBoundingClientRect().left + popUpHalf;
//         //   console.log(leftPosishin, windowHaft);
//         //   if (leftPosishin > windowHaft) clearInterval(timer);
//         // }, 20);


//     popupClose.addEventListener("click", () => {
//       popup.style.display = "none"
//     })
//     };
//   toggelPopUp();


// // Табы

//   const tabs = () => {
//   const tabHeader = document.querySelector('.service-header'),
//     tab = tabHeader.querySelector('.service-header-tab'),
//     tabContent = document.querySelectorAll('.service-tab');

//   const toggleTabContent = (index) => {
//     for(let i = 0; i < tabContent.length; i++) {
//       if (index === i){
//         tab[i].classList.add('active');
//         tabContent[i].classList.remove('d-none')
//       } else {
//         tabContent[i].classList.add('d-none')
//         tab[i].classList.remove('active');
//       }
//     }
//   };

//   tabHeader.addEventListener('click', (event) => {
//       let target = event.target;
//         target = target.closest('.service-header-tab');   //!!!!!!! поднимает дерево и возвращает null если не найден селектор, видит только родителей
        
//         if(target ){ //если наргет TRUE
          
//           tab.forEach((item, i) => {
            
//             if(item === target) {
//               toggleTabContent(i);
//             }
         
//           });
        
//         }
//       });
//   };
//   tabs();






     //слайдер

  //   const slider = () => {
  //   	const slides = document.querySelectorAll('.portfolio-item'),
  //   		btn = document.querySelectorAll('.portfolio-btn'),
  //   		slider = document.querySelector('.portfolio-content'),
  //       dotsUl = document.querySelector('.portfolio-dots');

  //   	let currentSlide = 0;
  //   	let interval;


  // // вставляем точки
  //     slides.forEach((elem) => {
  //       let newDot = document.createElement('li');
  //         newDot.classList.add('dot');
  //         dotsUl.appendChild(newDot);
  //     });

  //     const dot = document.querySelectorAll('.dot');



  //   	const prevSlide = (elem, index, strClass) => {
  //  	   		elem[index].classList.remove(strClass);

  //  		};

  //    	const nextSlide = (elem, index, strClass) => {
  //      		elem[index].classList.add(strClass);

  //    	};


  //   	const autoPlaySlide = () => {
       
  //       prevSlide(slides, currentSlide, 'portfolio-item-active');
  //       prevSlide(dot, currentSlide, 'dot-active');        
  //       currentSlide++;
  //       if(currentSlide >= slides.length) {
  //         currentSlide = 0;
  //       }
  //   		nextSlide(slides, currentSlide, 'portfolio-item-active');
  //   		nextSlide(dot, currentSlide, 'dot-active');
  //   	};

  //   	const startSlide = (time) => {
  //   		interval = setInterval(autoPlaySlide, time)
  //   	};
    	
  //   	const stopSlider = () => {
  //   		clearInterval(interval);
  //   	};

  //   slider.addEventListener('click', (event) => {
  //   	event.preventDefault();
  //   	let target = event.target;

  //   	if(!target.matches('.portfolio-btn, .dot')){
  //   		return;
  //   	};

  //     prevSlide(slides, currentSlide, 'portfolio-item-active');
  //   	prevSlide(dot, currentSlide, 'dot-active');

  //   	if(target.matches('#arrow-right')){
  //   		currentSlide++;
  //   	} else if(target.matches('#arrow-left')){
  //   		currentSlide--;
  //   	} else if (target.matches('.dot')){
  //   		dot.forEach((elem, index) => {
  //   			if(elem === target){
  //   				currentSlide = index;
  //   			}
  //   		});
  //   	}

  //   	if(currentSlide >= slides.length) {
  //   		currentSlide = 0;
  //   	}

  //   	if(currentSlide < 0) {
  //   		currentSlide = slides.length - 1;
  //   	}

  //   	nextSlide(slides, currentSlide, 'portfolio-item-active');
  //   	nextSlide(dot, currentSlide, 'dot-active');


  //   });
  //     slider.addEventListener('mouseover', (event) => {
  //     	if(event.target.matches('.portfolio-btn') || 
  //     	event.target.matches('.dot')){
  //     		stopSlider();
  //     	}
  //    });

  //     slider.addEventListener('mouseout', (event) => {
  //     	if(event.target.matches('.portfolio-btn') || 
  //       event.target.matches('.dot')){
  //         startSlide(2000);
  //       }
  //     });

 

  //   startSlide(2000)

  // };

  // slider()




// калькулятор

  const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.querySelector('#total');

    const countSum = () => {
      let total = 0,
        countValue = 1, 
        dayValue = 1;

      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValu = +calcSquare.value;

      if(calcCount.value > 1){
        countValue += (calcCount.value - 1) / 10;
      }

      if(calcDay.value && calcDay.value < 5) {
        dayValue *= 2
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5
      }

      if(typeValue && squareValu) {
        total = price * typeValue * squareValu * countValue * dayValue;
      }

      totalValue.textContent = Math.floor(total);
    }

    calcBlock.addEventListener('change', (event) => {
      const target = event.target;

      if(target === calcType || 
        target === calcSquare ||
        target === calcDay ||
        target === calcCount){
          countSum()
      }

    })

  };

  calc(100);












 });

