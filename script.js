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
        $(".project-container").show();

    }
});

// var $window = $(window);
//
// $(window).on('scroll', function() {
//     $topOffset = $(this).scrollTop();
//
//     console.log($topOffset);
//
// });


var about = $(".about-wrapper").offset().top;
$( ".about-text" ).hide();

$(document).scroll(function() {
    if($(this).scrollTop() > about + 100 ) {
        $(".about-text").show();
    }
});


});
