const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.portfolio__slider-prev',
      prevEl: '.portfolio__slider-next',
    },
  });


  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.design-projects__slider-prev',
      prevEl: '.design-projects__slider-next',
    },
  });


  const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.cottage-projects__slider-prev',
      prevEl: '.cottage-projects__slider-next',
    },
  });


  const swiper4 = new Swiper('.swiper4', {
    slidesPerView: 1,
    // slidesToScroll: 1,
    // spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.aboutus-mission__slider-prev',
      prevEl: '.aboutus-mission__slider-next',
    },
  });