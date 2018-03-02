(function ($) {
  'use strict';
  Drupal.behaviors.hello = {
    attach: function (context, settings) {
      console.log('javascript file working properly');
    }
  }

}) (jQuery);
