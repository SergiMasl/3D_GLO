const imgTeams = () => {
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
};

export default imgTeams;
