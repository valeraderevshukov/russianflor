import { buildIcon } from '../_utils';
import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  var sliderTrigger = document.querySelector('.js-carousel-dots');

  if (sliderTrigger !== null) {
    var slider = $('.js-carousel-dots');

    slider.owlCarousel({
      onInitialized: sliderVisible,
      loop: true,
      dots: true,
      smartSpeed: 2000,
      nav: true,
      navText: [buildIcon('chevron-left'), buildIcon('chevron-right')],
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      responsive: {
        0: {
          nav: false
        },
        767: {
          nav: true
        }
      }
    });

    function sliderVisible() {
      $('.slider').css({ opacity: '1', visibility: 'visible' });
    }
  }
});
