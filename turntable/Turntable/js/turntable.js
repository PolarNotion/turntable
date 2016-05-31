/*
 * TurntableSlider
 * v 1.1.1
 *
 * Copyright (c) 2016 Polar Notion
 * Licensed under the MIT license.
 */

(function($){

  $.fn.turntable = function(options){

    // variable declarations
    'use strict';

    var mobilecheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

    var $listItems = $('ul', this).children(),
        settings = $.extend({}, $.fn.turntable.defaults, options),
        $turntable = $(this),
        sections = [];

    // splits container based on
    // amount of li's in turntable
    function divideContainer(images) {

      var initialLength,
          dividend = images.length;
      if (settings.axis === 'scroll') {
        initialLength = $(window).height();
      } else if (settings.axis === 'y') {
        initialLength = $turntable.height();
      } else {
        initialLength = $turntable.width();
      }

      var sectionLength = initialLength / dividend;

      // creates array of value pairs with min and max ranges
      for (var i = 0; i < images.length; i++) {
        sections[i] = {
          min: sectionLength * i,
          max: sectionLength + (sectionLength * i),
          index: i
        };
      }

      // reverses direction
      if (settings.reverse === true) {
        // reverse array
        sections.reverse();
        // reset index values
        $.each(sections, function(i, obj) {
          obj.index = i;
        });
      }
    }

    //loads images one at a time on page load
    (function appendImages(callback) {
      $listItems.each(function () {
        $(this).html('<img src="' + $(this).data("imgSrc") + '">');
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

    // loop through array and find correct range pair
    var applyClasses = function(sections, position) {
      $.each(sections, function () {
        if (position >= this.min && position <= this.max) {
          $listItems.removeClass('active');
          $listItems.eq(this.index).addClass("active");
        }
      });
    };

    // finds mouse position and appends body
    // based on location
    if (settings.axis === 'scroll'){
      // scroll
      return $(window).scroll(function(){
        var scrollStart;
        if (settings.scrollStart === 'bottom') {
          scrollStart = $turntable.height();
        } else if (settings.scrollStart === 'top') {
          scrollStart = 0;
        } else {
          // scroll start is middle or other unusable value
          scrollStart = $turntable.height() / 2;
        }
        var offset = $turntable.offset();
        var position = offset.top - ( $(window).scrollTop() - scrollStart );
        applyClasses(sections, position);
      });

    } else if(mobilecheck()){
      // touch
      return $turntable.on("touchmove", function (e) {
        e.preventDefault();
        var offset = $(this).offset();
        var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        var position;
        if (settings.axis === 'y') {
          position = t.pageY - offset.top;
        } else {
          position = t.pageX - offset.left;
        }
        // loop through array and find correct range pair
        applyClasses(sections, position);
      });   

    } else {
      // mouseover
      return $turntable.on("mousemove", function (e) {
        var offset = $(this).offset();
        var position;
        if (settings.axis === 'y') {
          position = e.pageY - offset.top;
        } else {
          position = e.pageX - offset.left;
        }
        applyClasses(sections, position);
      });  

    }
  }; //end if

  $.fn.turntable.defaults = {
    axis: 'x',
    reverse: false,
    scrollStart: 'middle'
  };

})(jQuery);
