$(document).ready(function() {

  var plus = $('.js-table-plus');
  var minus = $('.js-table-minus');
  // var input = $('.js-table-input');
  var price = parseFloat($('.js-table-price').text(), 2);
  // var total = $('.js-table-total');
  

  $(plus).click(function(e) {
    var input = $(this).parents('.plus-minus').find('.js-table-input');
    var total = $(this).parents('tr').find('.js-table-total');
    var _price = $(this).parents('tr').find('.js-table-price');
    var price = parseFloat($(_price).text(), 2);
    var number = parseInt($(input).val());
    ++number;
    $(input).val(number);
    var totalNum = (price * number).toFixed(2);
    $(total).text(totalNum);
  });
	
  $(minus).click(function(e) {
    var input = $(this).parents('.plus-minus').find('.js-table-input');
    var total = $(this).parents('tr').find('.js-table-total');
    var _price = $(this).parents('tr').find('.js-table-price');
    var price = parseFloat($(_price).text(), 2);
    var number = parseInt($(input).val());
    --number;
    if (number < 2) number = 2;
    $(input).val(--number);
    var totalNum = (price * number).toFixed(2);
    $(total).text(totalNum);
  });
  
	
});
