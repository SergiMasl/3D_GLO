const imgTeamsFun = () => {
  console.log('1-dd')
  const imgTeams = document.querySelectorAll(".command__photo");

  imgTeams.forEach((image) => {
    let oldPic = "";

    image.addEventListener("mouseenter", (event) => {
      console.log('enter')

      oldPic = event.target.src;
      console.log(event.target.src, 'kkk')
      event.target.src = event.target.dataset.img;
      console.log(event.target.dataset.img, 'kfff')
    });

    function mouseLeaveImg(event) {
            console.log('leave', oldPic)

      event.target.src = oldPic;
    }

    image.addEventListener("mouseleave", mouseLeaveImg);
  });
};
export default imgTeamsFun;
