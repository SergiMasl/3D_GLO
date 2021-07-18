const sendForm = () => {
  const errorMwssege = "что то не так",
    loadMessage = "загрузка",
    successMessage = "Форма отправлена, Ждите ответа";

  const statusMessage = document.createElement("div");
  statusMessage.style.cssText =
    "font-size: 2rem; color: black; background: white";

  //форма верхняя
  const form = document.getElementById("form1");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form);
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then(() => {
        statusMessage.textContent = successMessage;
      })
      .catch((error) => {
        statusMessage.textContent =
          errorMwssege + "потому что " + error.message;
      });

    form.reset();
  });

  //форма "наши услуги"

  const formPopup = document.getElementById("form3");

  formPopup.addEventListener("submit", (event) => {
    event.preventDefault();
    formPopup.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(formPopup);
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then(() => {
        statusMessage.textContent = successMessage;
      })
      .catch((error) => {
        statusMessage.textContent =
          errorMwssege + "потому что " + error.message;
      });

    formPopup.reset();
  });

  //форма "Контактной форме в самом низу страницы"

  const formContact = document.getElementById("form2");

  formContact.addEventListener("submit", (event) => {
    event.preventDefault();
    formContact.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(formContact);
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then(() => {
        statusMessage.textContent = successMessage;
      })
      .catch((error) => {
        statusMessage.textContent =
          errorMwssege + "потому что " + error.message;
      });

    formContact.reset();
  });

  //////////
  const postData = (body) => {
    return fetch("./server.php", {
      method: "post",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
};

export default sendForm;
