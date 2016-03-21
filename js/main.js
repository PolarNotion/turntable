import $ from 'jquery';

let $listItems = $('.spinner-container>ul').children();
let $spinner = $('.spinner-container');
let sections = [];

let divideContainer = function(images){
  
  let initialWidth = $spinner.width();
  let divider      = images.length;
  let sectionWidth = initialWidth/divider;
  
  for (var j = 0; j < images.length; j++){
    sections[j] = {   
      min: sectionWidth * j,
      max: sectionWidth + (sectionWidth * j),
      index: j
    };
  }
};

divideContainer($listItems);

$spinner.on("mousemove", function(e) {

  let offset = $(this).offset();
  let relX = e.pageX - offset.left;

  $.each(sections, function(){
    if(relX >= this.min && relX <= this.max) {
      $listItems.removeClass('active');
      $listItems.eq(this.index).addClass("active");
    }
  });
});