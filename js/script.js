const swiperTop = new Swiper('.section-top__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  breakpoints: {

    390: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    1280: {
      slidesPerView: 2,
      spaceBetween: 20
    }

  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.section-top__next',
    prevEl: '.section-top__prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperMaybe = new Swiper('.section-maybe__slider', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,

  breakpoints: {

    390: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 10
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 20
    }

  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.section-maybe__next',
    prevEl: '.section-maybe__prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


document.querySelectorAll('.section-conditions__h2').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    button.classList.toggle('section-conditions__h2_active');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

document.querySelectorAll('.section-card__tabs-btn').forEach(function (Tabs) {
  Tabs.addEventListener('click', function (event) {
    let el = this;
    el.classList.add('section-card__tabs-btn_active');
    document.querySelectorAll('.section-card__article').forEach(item => {
      if (item != el) {
        item.classList.remove('section-card__article_active');
      }
    });
    document.querySelectorAll('.section-card__tabs-btn').forEach(item => {
      if (item != el) {
        item.classList.remove('section-card__tabs-btn_active');
      }
    });
    const path = event.currentTarget.dataset.path
    document.querySelectorAll('.section-card__article').forEach(function (TabsContent) {
      TabsContent.classList.remove('section-card__article_active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('section-card__article_active');
  });
});

document.querySelector('.header__burger').addEventListener('click', function () {
  document.querySelector('.header__menu').classList.add('header__menu-active');
});
document.querySelector('.header__burger-x').addEventListener('click', function () {
  document.querySelector('.header__menu').classList.remove('header__menu-active');
});
document.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.header__burger') && !target.closest('.header__burger-x')) {
    document.querySelector('.header__menu').classList.remove('header__menu-active');
  }
});

document.querySelectorAll('.header__link').forEach(function (BottomMenu) {
  BottomMenu.addEventListener('click', function (event) {
    let el = this;
    el.classList.toggle('header__link-active');
    document.querySelectorAll('.header__sublist').forEach(item => {
      if (item.parentElement.querySelector('.header__link') != el) {
        item.parentElement.querySelector('.header__link').classList.remove('header__link-active');
      }
      if (el.parentElement.querySelector('.header__sublist') != item) {
        item.classList.remove('header__sublist-active');
      }
    })

    const path = event.currentTarget.dataset.path
    document.querySelector(`[data-target="${path}"]`).classList.toggle('header__sublist-active');
  })
});

document.addEventListener('click', e => {
  const target = e.target;
  if (!target.closest('.header__sublist') && !target.closest('.header__link')) {
    document.querySelectorAll('.header__sublist').forEach(function (item) {
      item.classList.remove('header__sublist-active');
    })
    document.querySelectorAll('.header__link').forEach(function (item) {
      item.classList.remove('header__link-active');
    })
  }
});