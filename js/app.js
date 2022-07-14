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

/* #Quottes Slider
  ======================================================= */
if (document.querySelector('.quottes-slider .swiper')) {
  new Swiper(".quottes-slider .swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".quottes-slider .next",
      prevEl: ".quottes-slider .prev",
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
if (!document.querySelector('.team-page')) {
  if (document.querySelector('.team-slider .swiper')) {
    if (document.querySelector('.team-slider').classList.contains('alt')) {
      new Swiper(".team-slider .swiper", {
        navigation: {
          nextEl: ".team-slider .next",
          prevEl: ".team-slider .prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1.3,
          },
          1024: {
            slidesPerView: 5,
          }
        }
      });
    } else {
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
  }
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

/* #Category Courses
  ======================================================= */
if (document.querySelector('.category-courses .swiper')) {
  if (document.querySelector('.category-courses').classList.contains('alt')) {
    new Swiper(".category-courses .swiper", {
      breakpoints: {
        0: {
          slidesPerView: 1.2,
        },
        1024: {
          slidesPerView: 4,
        }
      }
    });
  } else {
    new Swiper(".category-courses .swiper", {
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          grid: {
            rows: 1,
            fill: 'row'
          },
          allowSlideNext: true,
          allowSlidePrev: true
        },
        1024: {
          slidesPerView: 1,
          grid: {
            rows: 1,
            fill: 'row'
          },
          allowSlideNext: false,
          allowSlidePrev: false
        }
      }
    });
  }
}

/* #Timeline Slider
  ======================================================= */
if (document.querySelector('.timeline .swiper')) {
  new Swiper(".timeline .swiper", {
    navigation: {
      nextEl: ".timeline .next",
      prevEl: ".timeline .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      1024: {
        slidesPerView: 6.25,
      }
    },
    loop: true
  });
}

/* #Blog Post Slider
  ======================================================= */
if (document.querySelector('.blog-post-slider .swiper')) {
  new Swiper(".blog-post-slider .swiper", {
    navigation: {
      nextEl: ".blog-post-slider .next",
      prevEl: ".blog-post-slider .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3.8,
      }
    }
  });
}