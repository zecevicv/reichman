/* #Header
  ======================================================= */
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header-hamburger a');
const headerMenuClose = document.querySelector('.header-menu-close');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault();

    header.classList.toggle('show');
    body.classList.toggle('no-scroll');
  });
}

if (headerMenuClose) {
  headerMenuClose.addEventListener('click', (e) => {
    header.classList.remove('show');
    body.classList.remove('no-scroll');
  });
}

/* #Home Banner Slider
  ======================================================= */
if (document.querySelector('.home-banner .swiper')) {
  new Swiper(".home-banner .swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".home-banner .next",
      prevEl: ".home-banner .prev",
    },
  });
}

/* #Post Slider
  ======================================================= */
if (document.querySelector('.post-slider .swiper')) {
  new Swiper(".post-slider .swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".post-slider .next",
      prevEl: ".post-slider .prev",
    },
  });
}

/* #Partners Slider
  ======================================================= */
if (document.querySelector('.partners .swiper')) {
  new Swiper(".partners .swiper", {
    slidesPerView: 2,
    grid: {
      rows: 3,
      fill: 'row'
    },
    navigation: {
      nextEl: ".partners .next",
      prevEl: ".partners .prev",
    },
    breakpoints: {
      0: {
        allowTouchMove: true
      },
      1024: {
        allowTouchMove: false
      }
    }
  });
}

/* #Team Slider
  ======================================================= */
if (document.querySelector('.team-slider .swiper')) {
  new Swiper(".team-slider .swiper", {
    navigation: {
      nextEl: ".team-slider .next",
      prevEl: ".team-slider .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row'
        },
      },
      1024: {
        slidesPerView: 4.6,
        grid: {
          rows: 1,
          fill: 'row'
        },
      }
    }
  });
}

/* #Home Courses 2 Slider
  ======================================================= */
if (document.querySelector('.home-courses-2 .swiper')) {
  new Swiper(".home-courses-2 .swiper", {
    navigation: {
      nextEl: ".home-courses-2 .next",
      prevEl: ".home-courses-2 .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        grid: {
          rows: 1,
          fill: 'row'
        },
      },
      1024: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'row'
        },
      }
    }
  });
}