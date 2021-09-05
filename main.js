import Swiper from "swiper";

function setSwiper() {
  new Swiper(".vertical-swiper .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true
  });
}

function init () {
  setSwiper();
}

init();