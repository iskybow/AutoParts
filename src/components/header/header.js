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

  $(document).click(function (e){ // событие клика по веб-документу
    let input = $(".jsSearchInp input"); // тут указываем ID элемента
    let inputBlock = $('.jsSearch');
    if (!input.is(e.target) // если клик был не по нашему блоку
      && inputBlock.has(e.target).length === 0 ) { // и не по его дочерним элементам
      $(".jsSearchInp").removeClass('active-search'); // скрываем его
    }
  });

  $('.jsOpenBasket').click(function () {
    $('.jsBOpen').fadeToggle();
  });

  $(document).click(function (e){ // событие клика по веб-документу
    let input = $(".jsBOpen"); // тут указываем ID элемента
    let inputBlock = $('.jsOpenBasket');
    if (!input.is(e.target) && inputBlock.has(e.target).length === 0 // если клик был не по нашему блоку
      && input.has(e.target).length === 0 ) { // и не по его дочерним элементам
      $('.jsBOpen').fadeOut(); // скрываем его
    }
  });

  function totalPrice() {
    let summPrice = 0;
    let total = $('.jsBAllPrice');
    let allBPrice = document.querySelectorAll('.jsBPrice');
    for (let i = 0; i < allBPrice.length; i++) {
      summPrice += parseInt(allBPrice[i].innerHTML.replace(' ', ''));
    }
    total.text(summPrice);
  }
  totalPrice();

  $('.jsMinus').click(function () {
    let amount = $(this).parent().find('.jsAmount');
    let amountNum = amount.text();

    let price = $(this).closest('.b-item').find('.jsPrice').text();

    let bPrice = $(this).closest('.b-item__block').find('.jsBPrice');
    let bPriceNum = bPrice.text();

    if (amountNum > 1){
      amount.text(parseInt(amountNum) - 1);
      bPrice.text(parseInt(bPriceNum.replace(' ', '')) - parseInt(price.replace(' ', '')));
    }
    totalPrice();
  });

  $('.jsPlus').click(function () {
    let amount = $(this).parent().find('.jsAmount');
    let amountNum = amount.text();

    let price = $(this).closest('.b-item').find('.jsPrice').text();

    let bPrice = $(this).closest('.b-item__block').find('.jsBPrice');
    let bPriceNum = bPrice.text();

    // console.log(parseInt(price.replace(' ', '')));

    amount.text(parseInt(amountNum) + 1);
    bPrice.text(parseInt(bPriceNum.replace(' ', '')) + parseInt(price.replace(' ', '')));
    totalPrice();
  });
});
