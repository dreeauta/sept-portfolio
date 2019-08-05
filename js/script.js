$(document).ready(function () {



  // fade in skills

var skills = $(".title").offset().top;

$(document).scroll(function() {
  if($(this).scrollTop() > skills) {
    $(".skills").show();
  }
})


// fade in projects


var project = $('.project-wrapper').offset().top,
    $window = $(window);
$(".project-container").hide();
$(".projects h1").hide();

$window.scroll(function() {
    if ( $window.scrollTop() >= project - 300) {
      $('.project-container').each(function(index){
        $(this).delay(500 * index).fadeIn(1000);
      });
      $(".projects h1").fadeIn(500);
    }
});



$(function () {
	initSlides();
});



console.log($(document).scrollTop());


var about = $(".about-wrapper").offset().top;
$( ".about-container" ).hide();

$(document).scroll(function() {
    if($(this).scrollTop() > 1800 ) {
      $(".about-container").delay(1000).fadeIn(2000);
    }
});






});
