import * as flsFunctions from "./modules/function.js";
import Swiper, { FreeMode } from "swiper";
import { Fancybox } from "@fancyapps/ui";
import "swiper/css";
import "@fancyapps/ui/dist/fancybox.css";
flsFunctions.isWebp();

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
});
Fancybox.bind('[data-fancybox="gallery"]', {});
