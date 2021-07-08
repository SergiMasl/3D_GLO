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

export default toggleMenu;
