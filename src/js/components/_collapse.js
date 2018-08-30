import { OPEN, BODY, WIN, widthMD } from '../_constants';

$(document).ready(function() {
  var accordionTrigger = $('.js-accordion-header');
  var accordions = $('.js-accordion-open');

  if (WIN.width() > widthMD) {
    $(accordions).each(function(index, el) {
      $(el).addClass(OPEN);
      var list = $(el).find('.js-accordion-list');
      $(list).slideDown();
    });
  } else {
    var list = $('.js-accordion-open .js-accordion-list');
    $(list).slideUp();
  }
  accordionTrigger.click(accordionHeandler);

  $('.js-accordion-closed .js-accordion-list').slideUp();
});

function accordionHeandler(event) {
  var parent;
  
  parent = $(this).parents('.js-accordion'); 
 
  if (!parent.hasClass(OPEN)) {
    parent.addClass(OPEN);
    var list = $(parent).find('.js-accordion-list');
    $(list).slideDown(750);
  } else {
    parent.removeClass(OPEN);
    var list = $(parent).find('.js-accordion-list');
    $(list).slideUp(750);
  }
  event.stopPropagation();
}
