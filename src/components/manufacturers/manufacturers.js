$(document).ready(function () {
  if (window.innerWidth < 1200) {
    $('.jsManufacturersSlider').slick({
      dots: false,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: '<button type="button" class="manufacturers-next"><img src="assets/images/right-arrow_slick.svg" alt=""></button>',
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }
});
