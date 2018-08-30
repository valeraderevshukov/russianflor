// import 'nouislider';
var noUiSlider = require('nouislider');
var wNumb = require('wnumb');

var slider = document.querySelector('.js-range-slider');

if (slider) {

  var minSlider = parseInt(slider.dataset['rangeMin']);
  var maxSlider = parseInt(slider.dataset['rangeMax']);
  var startSlider = parseInt(slider.dataset['rangeStart']);
  var endSlider = parseInt(slider.dataset['rangeEnd']);
  
  noUiSlider.create(slider, {
    start: [startSlider, maxSlider],

    connect: true,
    range: {
      min: minSlider,
      max: maxSlider
    }, 
    format: wNumb({ decimals: 0 })
  });

  slider.noUiSlider.on('update.one', function(e) {
    $('.js-range-min').text(e[0]);
    $('.js-range-max').text(e[1]);
  });
}
