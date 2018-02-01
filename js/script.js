$(document).ready(function () {



  // fade in skills

var skills = $(".title").offset().top;

$(document).scroll(function() {
  if($(this).scrollTop() > skills) {
    $(".skills").show();
  }
})


// fade in projects

var project = $(".skills").offset().top;
$( ".project-container" ).hide();

$(document).scroll(function() {
    if($(this).scrollTop() > 770 ) {
      $(".project-container-drawingthings").delay(500).fadeIn(500);
      $(".project-container-blackjack").delay(1000).fadeIn(500);
      $(".project-container-smarta").delay(2000).fadeIn(500);
      $(".project-container-coolgadgetsguru").delay(2500).fadeIn(500);
      $(".project-container-tictactoe").delay(3000).fadeIn(500);


    }

});


$(function () {
	initSlides();
});



console.log($(document).scrollTop());


var about = $(".about-wrapper").offset().top;
$( ".about-text" ).hide();

$(document).scroll(function() {
    if($(this).scrollTop() > 1800 ) {
      $(".about-text").delay(1000).fadeIn(2000);
    }
});






});
