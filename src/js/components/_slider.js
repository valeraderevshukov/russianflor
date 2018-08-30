import { buildIcon } from '../_utils';
import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  var sliderTrigger = document.querySelector('.js-slider');

  if (sliderTrigger !== null) {
    var slider = $('.slider');

    slider.owlCarousel({
      onInitialized: sliderVisible,
      loop: true,
      // dots: false,
      smartSpeed: 500,
      margin: 0,
      lazyLoad:true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      navText: [buildIcon('prev-slide-button'), buildIcon('next-slide-button')],
      responsive: {
        0: {
          items: 1,
          margin: 0,
          nav: false
        },
        500: {
          items: 2,
          margin: 0,
          nav: false
        },
        678: {
          items: 3,
          nav: false
        },
        1023: {
          items: 4,
          nav: false,
          dots: true
        },
        1024: {
          items: 4,
          nav: true,
          dots: false
        },
        1220: {
          items: 5,
          nav: true,
          dots: false
        }
      }
    });

    function sliderVisible() {
      $('.slider').css({ opacity: '1', visibility: 'visible' });
    }
  }
});
