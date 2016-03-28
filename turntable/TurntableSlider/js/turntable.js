
(function($){

  $.fn.turntable = function(options){

    // variable declarations
    'use strict';

    var $listItems = $('ul', this).children(),
        settings = $.extend({}, $.fn.turntable.defaults, options),
        $turntable = $(this),
        sections = [];


    // splits container based on
    // amount of li's in turntable
    function divideContainer(images) {

      var initialLength = undefined,
          dividend = images.length;

      if (settings.axis === 'y') {
        initialLength = $turntable.height();
      } else {
        initialLength = $turntable.width();
      }

      var sectionLength = initialLength / dividend;

      // creates array of value pairs with min and max ranges
      for (var j = 0; j < images.length; j++) {
        sections[j] = {
          min: sectionLength * j,
          max: sectionLength + (sectionLength * j),
          index: j
        };
      }
    }

    //loads images one at a time on page load
    (function appendImages(callback) {
      $listItems.each(function () {
        $(this).append('<img src="' + $(this).data("imgSrc") + '">');
      });
    })();

    // divides container once image is loaded
    $("li:first-child>img", $turntable).load(function () {
      $(this).parent().addClass('active');
      divideContainer($listItems);
    });

    //redivides window on resize
    $(window).resize(function(){
      divideContainer($listItems);
    });

    // finds mouse position and appends body
    // based on location
    return $turntable.on("mousemove", function (e) {
      var offset = $(this).offset();
      var position = undefined;
      if (settings.axis === 'y') {
        position = e.pageY - offset.top;
      } else {
        position = e.pageX - offset.left;
      }
      // loop through array and find correct range pair
      $.each(sections, function () {
        if (position >= this.min && position <= this.max) {
          $listItems.removeClass('active');
          $listItems.eq(this.index).addClass("active");
        }
      });
    });
  };

  $.fn.turntable.defaults = {
    axis: 'x'
  };

})(jQuery);
