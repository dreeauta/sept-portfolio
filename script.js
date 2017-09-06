$(document).ready(function () {

// fade in projects

var f = $(".project-wrapper").offset().top;

$(document).scroll(function() {
    if($(this).scrollTop() > f) {
      $('.project-container-handcrafted').addClass('animated fadeInLeft');
      $('.project-container-handcrafted').show();

    }
});

  //projects features slider section

    // $('.slider-btn').click(function(){
    //   if($(this).hasClass('project-container-handcrafted')){
    //       $('#project-container-handcrafted').show();
    //       $('#project-container-blackjack').hide();
    //       $('#project-container-smarta').hide();
    //       $('#project-container-drawingthings').hide();
    //       
    //   } else if ($(this).hasClass('project-container-blackjack')){
    //     $('#project-container-handcrafted').hide();
    //     $('#project-container-blackjack').show();
    //     $('#project-container-smarta').hide();
    //     $('#project-container-drawingthings').hide();
    //   }
    //   else if ($(this).hasClass('project-container-smarta')){
    //     $('#project-container-handcrafted').hide();
    //     $('#project-container-blackjack').hide();
    //     $('#project-container-smarta').show();
    //     $('#project-container-drawingthings').hide();
    //   }
    //   else if ($(this).hasClass('project-container-drawingthings')){
    //     $('#project-container-handcrafted').hide();
    //     $('#project-container-blackjack').hide();
    //     $('#project-container-smarta').hide();
    //     $('#project-container-drawingthings').show();
    //   }
    // 
    // })
)};