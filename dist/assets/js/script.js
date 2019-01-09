'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

$(function () {
  $('.check__checkbox').click(function () {
    // console.log($(this).closest('.form').find('.jsCheck'));
    if ($(this).is(':checked') == false) {
      $(this).closest('.form').find('.jsCheck').attr('disabled', 'disabled');
    } else {
      $(this).closest('.form').find('.jsCheck').removeAttr('disabled');
    }
  });

  $('.jsSearch').click(function () {
    $('.jsSearchInp').addClass('active-search');
  });

  $(document).click(function (e) {
    // событие клика по веб-документу
    var input = $(".jsSearchInp input"); // тут указываем ID элемента
    var inputBlock = $('.jsSearch');
    if (!input.is(e.target) // если клик был не по нашему блоку
    && inputBlock.has(e.target).length === 0) {
      // и не по его дочерним элементам
      $(".jsSearchInp").removeClass('active-search'); // скрываем его
    }
  });

  $('.jsOpenBasket').click(function () {
    $('.jsBOpen').fadeToggle();
  });

  $(document).click(function (e) {
    // событие клика по веб-документу
    var input = $(".jsBOpen"); // тут указываем ID элемента
    var inputBlock = $('.jsOpenBasket');
    if (!input.is(e.target) && inputBlock.has(e.target).length === 0 // если клик был не по нашему блоку
    && input.has(e.target).length === 0) {
      // и не по его дочерним элементам
      $('.jsBOpen').fadeOut(); // скрываем его
    }
  });

  function totalPrice() {
    var summPrice = 0;
    var total = $('.jsBAllPrice');
    var allBPrice = document.querySelectorAll('.jsBPrice');
    for (var i = 0; i < allBPrice.length; i++) {
      summPrice += parseInt(allBPrice[i].innerHTML.replace(' ', ''));
    }
    total.text(summPrice);
  }
  totalPrice();

  $('.jsMinus').click(function () {
    var amount = $(this).parent().find('.jsAmount');
    var amountNum = amount.text();

    var price = $(this).closest('.b-item').find('.jsPrice').text();

    var bPrice = $(this).closest('.b-item__block').find('.jsBPrice');
    var bPriceNum = bPrice.text();

    if (amountNum > 1) {
      amount.text(parseInt(amountNum) - 1);
      bPrice.text(parseInt(bPriceNum.replace(' ', '')) - parseInt(price.replace(' ', '')));
    }
    totalPrice();
  });

  $('.jsPlus').click(function () {
    var amount = $(this).parent().find('.jsAmount');
    var amountNum = amount.text();

    var price = $(this).closest('.b-item').find('.jsPrice').text();

    var bPrice = $(this).closest('.b-item__block').find('.jsBPrice');
    var bPriceNum = bPrice.text();

    // console.log(parseInt(price.replace(' ', '')));

    amount.text(parseInt(amountNum) + 1);
    bPrice.text(parseInt(bPriceNum.replace(' ', '')) + parseInt(price.replace(' ', '')));
    totalPrice();
  });
});

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
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }
});

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
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }]
    });
  }
});

$(function () {
  $('.jsMAdvice').click(function () {
    $('.jsModal').fadeIn();
    $('body').addClass('body-overflow');
  });
  $('.jsMClose').click(function () {
    $('.jsModal').fadeOut();
    $('body').removeClass('body-overflow');
  });
});

jQuery(document).ready(function ($) {

  $(".jsDotDot").dotdotdot({

    callback: function callback(isTruncated) {},
    /* Function invoked after truncating the text.
       Inside this function, "this" refers to the wrapper. */

    ellipsis: '\u2026 ',
    /* The text to add as ellipsis. */

    height: 40,
    /* The (max-)height for the wrapper:
       null: measure the CSS (max-)height ones;
       a number: sets a specific height in pixels;
       "watch": re-measures the CSS (max-)height in the "watch". */

    keep: null,
    /* jQuery-selector for elements to keep after the ellipsis. */

    tolerance: 0,
    /* Deviation for the measured wrapper height. */

    truncate: "word",
    /* How to truncate the text: By "node", "word" or "letter". */

    watch: "window"
    /* Whether to update the ellipsis:
       true: Monitors the wrapper width and height;
       "window": Monitors the window width and height. */

  });

  $('.jsProductsSlider').slick({
    dots: false,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="products-prev"><img src="assets/images/right-arrow_slick.svg" alt=""></button>',
    nextArrow: '<button type="button" class="products-next"><img src="assets/images/right-arrow_slick.svg" alt=""></button>'
  });
});
//# sourceMappingURL=script.js.map
