const sendForm = () => {
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

    export default


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

  export default sendForm;