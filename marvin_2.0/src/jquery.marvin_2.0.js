/*
 * marvin_2.0
 * https://github.com/nicollecastrog/code_samples
 *
 * Copyright (c) 2014 nicollecastrog
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.marvin_2_0 = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.marvin_2_0 = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.marvin_2_0.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.marvin_2_0.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].marvin_2_0 = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
