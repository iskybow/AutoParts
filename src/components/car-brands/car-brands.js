$(document).ready(function () {
  if (window.innerWidth < 993) {
    $('.jsCarSlider').slick({
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: '<button type="button" class="manufacturers-next"><img src="assets/images/right-arrow_slick.svg" alt=""></button>',
      // variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
});
