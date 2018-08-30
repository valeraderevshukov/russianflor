import { OPEN, BODY } from '../_constants';

var dd = $('.js-dropdown-btn');
dd.on('click', function() {
  $(this)
    .parents('.js-dropdown-container')
    .toggleClass(OPEN);
});
