import { isTouch } from '../_utils';
import { DOC } from '../_constants';

DOC.ready(() => {
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
        $('.nav__drop_main').removeAttr('style');
        $('.nav__in').removeAttr('style');
      });
    }

  }
  setEvent();

  function setMenuSize( item) {
    let height = item.find('.nav__drop_main').innerHeight();
    let liLength = item.find('.nav__drop_main > li').length;
    let containerWidth = $('.header__inner').innerWidth();
    width = $(window).width();

    if (liLength > 1) {
      if (item.find('.nav__drop_main').hasClass('is-big')) {
        item.find('.nav__in').css({
          'left': -(left),
          'width': containerWidth
        });

      } else {
        let inner = item.find('.nav__drop_main');
        let innerWidth = inner.innerWidth();
        let innerPosition = inner.offset().left;
        let innerSum = innerPosition + innerWidth;
        let distinction = 0;
       
        if (width < 960) {
          item.find('.nav__in').css({
            'width': '100%',
          });
        } else {
          distinction = width - innerSum - 15;
          if (innerSum >= width && innerWidth < width - 40 ) {
            item.find('.nav__in').css({
              'width': innerWidth + 5,
              'left': distinction,
              'white-space': 'normal'
            });
          }
          else {
            if (innerWidth >= width - 40 ) innerWidth = width - 40;
            innerSum = innerPosition + innerWidth;
            distinction = width - innerSum - 15;
            if (distinction > 0 ) distinction = 0;
            distinction = distinction;
            console.log(innerWidth, width, distinction);
            item.find('.nav__in').css({
              'width': innerWidth + 5,
              'left': distinction,
              'white-space': 'normal'
            });
          }
        }
      }
    }
  }
  let timeout;
  $(window).on('resize', function() {
    if (!isTouch()) {
      timeout = setTimeout(() => {
        width = $(window).width();
        nav.removeClass('is-open');
        $('.nav__drop_main').removeAttr('style');
        $('.nav__in').removeAttr('style');
        setEvent();
      }, 100);
      clearTimeout(timeout);
    }
  });
});

