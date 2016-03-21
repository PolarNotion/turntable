import $ from 'jquery';

// variable declarations
let $listItems = $('.turntable>ul').children();
let $turntable = $('.turntable');
let sections = [];
let axisValue = $('.turntable').data('axis');
let offset = $('.turntable').offset();

// splits container based on 
// amount of li's in turntable
function divideContainer(images){

  var initialLength,  
      dividend = images.length;

  if( axisValue === 'y') {
    initialLength = $turntable.height();
  } else {
    initialLength = $turntable.width();
  }

  let sectionLength = initialLength/dividend;
  
  // creates array of value pairs with min and max ranges
  for (var j = 0; j < images.length; j++){
    sections[j] = {   
      min: sectionLength * j,
      max: sectionLength + (sectionLength * j),
      index: j
    };
  }
}

//loads images one at a time on page load
(function appendImages(callback) {
  $listItems.each(function(){
    $(this).append('<img src="' + 
      $(this).data("imgSrc") +
      '">');
  });
})();

// divides container once image is loaded
$( "li:first-child>img", $turntable ).load(function() {
  $(this).parent().addClass('active');
  divideContainer($listItems);
});

// finds mouse position and appends body
// based on location
$turntable.on("mousemove", function(e) {
    
  let position; 
  if( axisValue === 'y' ) {
    position = e.pageY - offset.top;
  } else {
    position = e.pageX - offset.left;
  }
  // loop through array and find correct range pair
  $.each(sections, function(){
    if(position >= this.min && position <= this.max) {
      $listItems.removeClass('active');
      $listItems.eq(this.index).addClass("active");
    }
  });

});
 