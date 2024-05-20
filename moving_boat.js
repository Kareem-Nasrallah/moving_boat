let stars1 = document.getElementById("stars1");
let moon2 = document.getElementById("moon2");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let mountains7 = document.getElementById("mountains7");
let imgs = document.querySelector(".imgs");
let mainword = document.getElementById("mainword");

onscroll = function () {
  let value = scrollY;
  stars1.style.right = -value + "px";
  moon2.style.top = value * 2.2 + "px";
  mountains3.style.top = value * 1.2 + "px";
  mountains4.style.top = value * 0.9 + "px";
  river5.style.top = value * 0.9 + "px";
  boat6.style.left = value * 1.5 + "px";
  boat6.style.top = value + "px";
  mainword.style.fontSize = value * 0.2 + "px";
  mainword.style.display = "block";
  if (value >= 65) {
    mainword.style.position = "fixed";
  }
  if (value * 0.2 >= 65) {
    mainword.style.fontSize = 65 + "px";
  }
  if (value >= "180") {
    imgs.style.background = "#87cfeb88";
  } else {
    imgs.style.background = "none";
  }
  if (value >= "420") {
    mainword.style.display = "none";
  } else {
    mainword.style.display = "block";
  }
};
