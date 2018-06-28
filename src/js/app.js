import './components';
import {DOC, BODY, NO_TOUCH} from './_constants';
import {isTouch} from './_utils';

DOC.ready(() => {
  if (!isTouch()) BODY.addClass(NO_TOUCH);
});


let burger = $('.js-burger');
let drop = $('.js-dropdown');
let search = $('.js-search');
let btnClose = $('.js-search-close');
let searchOpen = $('.js-search-open');
let header = $('.js-header');


drop.on('mouseover click', function() {
  $(this).addClass('is-open');
});
drop.on('mouseleave', function() {
  $(this).removeClass('is-open');
});

burger.on('click', function() {
  $(this).closest('.js-header').find('.js-menu').toggleClass('is-open');
});

searchOpen.on('click', function() {
  $(this).closest('.js-header').find('.js-search').addClass('is-open');

});
btnClose.on('click', function() {
  search.removeClass('is-open');

});
