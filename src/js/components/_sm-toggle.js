import { OPEN, BODY, ACTIVE } from '../_constants';

// ===== FILTER TOGGLE =====

$('.js-sm-filter-btn').click(e => {
  var filter = $('.js-filter');
  if (!filter.hasClass(OPEN)) {
    $(filter).addClass(OPEN);
    $(filter).slideDown(500);
  } else {
    $(filter).removeClass(OPEN);
    $(filter).slideUp(500);
  }
  event.stopPropagation();
});

// ===== CARDS TOGGLE =====

$('.js-cards-2-columns').click(e => {

  $('.js-cards-2-columns').addClass(ACTIVE);
  $('.js-cards-1-column').removeClass(ACTIVE);
  
  var cards = $('.js-cards-container');
  $(cards).removeClass('sm-one-column');
  $(cards).addClass('sm-two-columns');
});

$('.js-cards-1-column').click(e => {

  if (!$('.js-cards-1-column').hasClass(ACTIVE)) {
    $('.js-cards-1-column').addClass(ACTIVE);
    $('.js-cards-2-columns').removeClass(ACTIVE);
  }

  var cards = $('.js-cards-container');
  if (!cards.hasClass('sm-one-column')) {
    $(cards).addClass('sm-one-column');
    $(cards).removeClass('sm-two-columns');
  }
});
