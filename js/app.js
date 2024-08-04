var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    560: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1600: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var showBtn = document.getElementById("show-btn");
var content = document.getElementById("content");

function toggleContent() {
  content.classList.toggle("active");

  if (content.classList.contains("active")) {
    console.log("True");
    showBtn.textContent = "Show Links";
  } else {
    console.log("False");
    showBtn.textContent = "Hide links";
  }
}

var swiper = new Swiper(".mySwipers", {
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    560: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
