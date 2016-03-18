import $ from 'jquery';
import _ from 'underscore';


let listItems = $('.spinner-container>ul').children();
let $spinner = $('.spinner-container');

let initialWidth = $('.spinner-container').width();
let divider      = listItems.length;
let sectionWidth = initialWidth/divider;

function divideContainer(images){

  let sections = [];
  
  // let i = 0  
  // $(".spinner-container li").each(function( index ) {
  //   $(this).data("max")
  //   i += sectionWidth.to_i
  // })

  // for (var i = 0; i < images.length; i++){
  //   sections[i] = sectionWidth * i;
  // } 

  // console.log(sections);
  // return sections; 
}

divideContainer(listItems);


// divideContainer(listItems).then(function(sections){
//   console.log('grabbed sections', sections)
// })

let i = 0
$spinner.on("mousemove", function(e) {

  let offset = $(this).offset();
  let relX = e.pageX - offset.left;
  console.log(relX);
  // if( relX > sections[8] ){
  //   //
  // }  
  $(".spinner-container li").each(function( index ) {
    if (relX < i) {
      console.log("adsf")
      $(this).addClass("active")  
    }
    i += sectionWidth.to_i
  })

});

//  sample code from website
// 
// $spinner.on("mousemove", function(e) {
//   $(">ul>li", $spinner).each(function() {
//     var t = e.pageX
//       , o = $spinner.width() / 2
//       , i = Math.abs(t - o)
//       , n = parseFloat($(this).attr("data-speed"))
//       , a = $("> li", this).length
//       , s = Math.floor(i / n % a);
//     o > t && (s = Math.abs(s - (a - 1))),
//     $("> li.active", this).removeClass("active"),
//     $("> li", this).eq(s).addClass("active");
//   });
// });