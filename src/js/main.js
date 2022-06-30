import * as flsFunctions from "./modules/function.js";
import Swiper, { FreeMode, Navigation, Pagination } from "swiper";
import { Fancybox } from "@fancyapps/ui";
import "swiper/css/bundle";
import $ from "jquery";
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

var $page = $("html, body");
$('.navigation ul li a[href*="#"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    400
  );
  return false;
});

$('.footer__menu ul li a[href*="#"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    400
  );
  return false;
});

const openPopup = document.querySelector("#openPopup");
const popup = document.querySelector(".popup");
openPopup.addEventListener("click", () => {
  popup.classList.add("active");
});

const closePopup = document.querySelector(".close__popup");
closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

$(document).ready(function () {
  $(".popup-form form").submit(function (e) {
    //устанавливаем событие отправки для формы с id=form
    var form_data = $(this).serialize(); //собераем все данные из формы
    e.preventDefault();
    $.ajax({
      type: "POST", //Метод отправки
      url: "../files/sendForm.php", //путь до php фаила отправителя
      data: form_data,
      success: function (data) {
        document.querySelector(".form__container").style.display = "none";
        document.querySelector(".form__success").style.display = "flex";
        setTimeout(()=>{
          popup.classList.remove("active");
        }, 2500);
      },
    });
  });
});


$(document).ready(function () {
  $(".form__anketa").submit(function (e) {
    //устанавливаем событие отправки для формы с id=form
    var form_data = $(this).serialize(); //собераем все данные из формы
    e.preventDefault();
    $.ajax({
      type: "POST", //Метод отправки
      url: "../files/sendAnket.php", //путь до php фаила отправителя
      data: form_data,
      success: function (data) {
        // document.querySelector(".form__container").style.display = "none";
        // document.querySelector(".form__success").style.display = "flex";
        // setTimeout(()=>{
        //   popup.classList.remove("active");
        // }, 2500);
      },
    });
  });
});
