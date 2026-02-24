const btnPurple = document.getElementById("purple");
btnPurple.onclick = function purple() {
  document.body.style.backgroundColor = "purple";
};

function imgChange() {
  const image = document.getElementById("img");
  if (image.src.includes("jpeg")) {
    image.src = "./images/thumbbig-1314087.png";
  } else {
    image.src = "./images/images.jpeg";
  }
}
