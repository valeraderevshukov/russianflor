import { isTouch } from '../_utils';
let nav = $('.js-nav');
let menu = $('.js-menu');
let left;

let width = $(window).width();

function setEvent() {
  width = $(window).width();
  if (width < 960) {
    nav.on('touch click', function(event) {
      // event.preventDefault();
      let that = $(this);
      if (!that.hasClass('is-open')) {
        nav.removeClass('is-open');
        that.addClass('is-open');
      }
      else {
        that.removeClass('is-open');
      }
    });
  } else {
    nav.on('mouseenter', function(event) {
      event.preventDefault();
      $('.js-nav').removeClass('is-open');
      $(this).addClass('is-open');
      let topMenuLeft = menu.offset().left;
      let itemMenuLeft = $(this).offset().left + 40;
      left = itemMenuLeft - topMenuLeft - 5;
      setMenuSize($(this));

    });
    nav.on('mouseleave', function() {
      $(this).removeClass('is-open');
    });
  }

}
setEvent();

function setMenuSize( item) {
  let height = item.find('.nav__drop_main').height();
  let liLength = item.find('.nav__drop_main > li').length;
  let containerWidth = $('.header__inner').innerWidth();


  if (width <= 1180) {
    containerWidth = containerWidth - 20;
  } else {
    containerWidth = containerWidth - 50;
  }
  if (liLength > 1) {
    if (height >= 1000 || item.find('.nav__drop_main').hasClass('is-big')) {
      item.find('.nav__drop_main')
        .css({
          'column-count': 2,
        })
        .addClass('is-big');
      item.find('.nav__in').css({
        'left': -(left),
        'width': containerWidth
      });

    } else {
      if (width < 1380 ) {
        liLength = 2;
        item.find('.nav__drop_main').css({
          'column-count': liLength,
        });

      } else if (width < 1024 ) {
        liLength = 2;
        item.find('.nav__drop_main').css({
          'column-count': liLength,
        });
      } else {
        item.find('.nav__drop_main').css({
          'column-count': liLength,
        });
      }

      if (width < 960) {
        item.find('.nav__in').css({
          'width': '100%',
        });
      } else {
        item.find('.nav__in').css({
          'width': 140 * liLength,
        });

      }

    }
  }
}

$(window).on('resize', function() {
  if (!isTouch()) {
    width = $(window).width();
    nav.removeClass('is-open');
    $('.nav__drop_main').removeAttr('style');
    $('.nav__in').removeAttr('style');
    setEvent();
  }
});
