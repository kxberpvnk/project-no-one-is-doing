const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'slide',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //autoHeight: true,

    slidesPerView: 1.5,

    spaceBetween: 30,
    
    centeredSlides: true,

    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnIteration: true,
    }
  
  });