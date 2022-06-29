import * as flsFunctions from "./modules/function.js";
import Swiper, { FreeMode, Navigation, Pagination } from "swiper";
import { Fancybox } from "@fancyapps/ui";
import "swiper/css/bundle";
import $ from "jquery"
import "@fancyapps/ui/dist/fancybox.css";
flsFunctions.isWebp();
Swiper.use([Navigation, Pagination]);
const brandSwiper = new Swiper(".brand__swiper", {
  slidesPerView: 4,
  loop: true,
});
const trainSlider = new Swiper(".tarin__slider", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: {
    enabled: true,
    momentum: false,
  },
  modules: [FreeMode],
  pagination: {
    el: ".train__control .swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
    dynamicMainBullets: 4,
  },
  navigation: {
    nextEl: ".train__control .swiper-button-next",
    prevEl: ".train__control .swiper-button-prev",
  },
});
Fancybox.bind('[data-fancybox="gallery"]', {});

const teamSlide = new Swiper(".team", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 80,
});

const burger = document.querySelector(".burger");
const menu = document.querySelector(".navigation");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});


var $page = $('html, body');
$('.navigation ul li a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$('.footer__menu ul li a[href*="#"]').click(function() {
  $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
});

