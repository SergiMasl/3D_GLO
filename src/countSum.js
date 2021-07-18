const countSum = () => {
  console.log(11);
  let total = 0,
    countValue = 1,
    dayValue = 1;

  const calc = (price = 100) => {
    console.log(122);
    const calcBlock = document.querySelector(".calc-block"),
      calcType = document.querySelector(".calc-type"),
      calcSquare = document.querySelector(".calc-square"),
      calcDay = document.querySelector(".calc-day"),
      calcCount = document.querySelector(".calc-count"),
      totalValue = document.querySelector("#total");

    function chechNumbers(event) {
      event.target.value = event.target.value.replace(/\D/g, "");
    }

    calcSquare.addEventListener("input", chechNumbers);
    calcDay.addEventListener("input", chechNumbers);
    calcCount.addEventListener("input", chechNumbers);

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
  calc();
};

export default countSum;
