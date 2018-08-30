import 'tooltipster';
$(document).ready(function() {
  $('.js-tooltip-right').tooltipster({
    side: ['right', 'left', 'top', 'bottom'],
    trigger: 'click'
  });
  $('.js-tooltip').tooltipster({ trigger: 'click',
    side: ['top', 'right','left', 'top'], });
});
