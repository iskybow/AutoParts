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
