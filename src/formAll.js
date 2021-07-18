const formAll = () => {
  // check functions:
  function chechNumbers(event) {
    event.target.value = event.target.value.replace(/\D/g, "");
  }
  function chechMobile(event) {
    event.target.value = event.target.value.replace(/[^0-9()\-]/gi, "");
  }

  function chechWords(event) {
    event.target.value = event.target.value.replace(/[^а-я ]/gi, "");
  }
  function chechEmail(event) {
    event.target.value = event.target.value.replace(
      /[^a-z@\-\.\_!~\*\']/gi,
      ""
    );
  }

  //last form
  const formName = document.querySelector("#form2-name");
  const formMessage = document.querySelector("#form2-message");
  const formEmail = document.querySelector("#form2-email");
  const mobile = document.querySelector("#form2-phone");

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
  });

  //main form
  const formNameMainForm = document.querySelector("#form1-name");
  const formEmailMainForm = document.querySelector("#form1-email");
  const mobileMainForm = document.querySelector("#form1-phone");

  formNameMainForm.addEventListener("input", chechWords);
  formEmailMainForm.addEventListener("input", chechEmail);
  mobileMainForm.addEventListener("input", chechMobile);

  //toggle form
  const formNameToggleForm = document.querySelectorAll("#form3-name");
  const formEmailToggleForm = document.querySelectorAll("#form3-email");
  const mobileToggleForm = document.querySelectorAll("#form3-phone");

  formNameToggleForm.forEach((elem) => {
    elem.addEventListener("input", chechWords);
  });
  formEmailToggleForm.forEach((elem) => {
    elem.addEventListener("input", chechEmail);
  });
  mobileToggleForm.forEach((elem) => {
    elem.addEventListener("input", chechMobile);
  });
};
export default formAll;
