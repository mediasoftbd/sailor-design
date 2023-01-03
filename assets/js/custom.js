function darken_screen(yesno) {
  if (yesno == true) {
    document.querySelector('.screen-darken').classList.add('active');
  } else if (yesno == false) {
    document.querySelector('.screen-darken').classList.remove('active');
  }
}

function close_offcanvas() {
  darken_screen(false);
  document.querySelector('.mobile-offcanvas.show').classList.remove('show');
  document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
  darken_screen(true);
  document.getElementById(offcanvas_id).classList.add('show');
  document.body.classList.add('offcanvas-active');
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {
    let offcanvas_id = everyelement.getAttribute('data-trigger');

    everyelement.addEventListener('click', function (e) {
      e.preventDefault();
      show_offcanvas(offcanvas_id);
    });
  });

  document.querySelectorAll('.btn-close').forEach(function (everybutton) {
    everybutton.addEventListener('click', function (e) {
      e.preventDefault();
      close_offcanvas();
    });
  });

  document
    .querySelector('.screen-darken')
    .addEventListener('click', function (event) {
      close_offcanvas();
    });
});
var swiper = new Swiper('.home-slider', {
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

var swiper = new Swiper('.trending-category', {
  slidesPerView: 6,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.newarrival-slider', {
  slidesPerView: 6,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper = new Swiper('.flashsale-slider', {
  slidesPerView: 6,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper = new Swiper('.feature-slider', {
  slidesPerView: 6,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper = new Swiper('.megazine-slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// product details page slider

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  vertical: true,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-up'><i class='fa-solid fa-chevron-up'></i></button>",
  nextArrow:
    "<button type='button' class='slick-down'><i class='fa-solid fa-chevron-down'></i></button>",
});
