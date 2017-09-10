$(document).ready(function () {

// fade in projects

var project = $(".skills").offset().top;
$( ".project-container" ).hide();

$(document).scroll(function() {
    if($(this).scrollTop() > project ) {
        $(".project-container").show();
    }
});


});
