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

export default countSum;