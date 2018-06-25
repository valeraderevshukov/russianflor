import select2 from 'select2';


let drop = $('.js-dropdown');
let nav = $('.js-nav');
let burger = $('.js-burger');
let menu = $('.js-menu');
let search = $('.js-search');
let btnClose = $('.js-search-close');
let searchOpen = $('.js-search-open');
let header = $('.js-header');
let left;
if ($(window).width() <= 960) {
  nav.on('click', function() {
    // $('.js-nav').removeClass('is-open');
    $(this).toggleClass('is-open');
  });
} else {
  nav.on('mouseover', function() {
    $(this).addClass('is-open');

    let topMenuLeft = menu.offset().left;
    let itemMenuLeft = $(this).offset().left + 40;
    left = itemMenuLeft - topMenuLeft;

    checkTopMenu($(this));

  });
  nav.on('mouseleave', function() {
    $(this).removeClass('is-open');
  });
}

function checkTopMenu(item) {
  console.log(item.find('.nav__col').length);
  if (item.find('.nav__col').length <= 1) {
    item.find('.nav__in').addClass('is-sm');

  } else {
    item.find('.nav__in').css({
      'left': -(left) ,
      'width': $('.header__inner').width()
    });

  }
}

// $(window).on('resize', function() {
//   checkTopMenu($('.nav__in'));
// });

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
  search.addClass('is-open');

});
btnClose.on('click', function() {
  search.removeClass('is-open');

});



$(document).ready(function() {
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = './img/flags';
    var $state = $(
      '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
  };
  $('.js-select2').select2({
    templateResult: formatState
  });
});
