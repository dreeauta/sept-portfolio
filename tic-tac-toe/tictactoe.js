// <script>
// $('document').ready(function() {
//   var j = 1;
//
//   $('.button').click(function() {
//
//     if (j === 1){
//       $(this).text('x');
//       j += 1;
//     }
//     else if ( j === 2){
//       // $(this).toggleClass('x');
//       $(this).text('o');
//       j += 1;
//     }
//
//     else {
//       // $(this).toggleClass('o');
//       j = 1;
//     }
//
//     });
//
//
// });

//
// var win_array = [
//
//   //horizontal
//   [$('.1').hasClass(), $('.2').hasClass(), $('.3').hasClass()],
//   [$('.4').hasClass(), $('.5').hasClass(), $('.6').hasClass()],
//   [$('.7').hasClass(), $('.8').hasClass(), $('.9').hasClass()],
//
//   //vertical
//   [$('.1').hasClass(), $('.4').hasClass(), $('.7').hasClass()],
//   [$('.2').hasClass(), $('.5').hasClass(), $('.8').hasClass()],
//   [$('.3').hasClass(), $('.6').hasClass(), $('.9').hasClass()],
//
//   [$('.1').hasClass(), $('.5').hasClass(), $('.9').hasClass()],
//   [$('.3').hasClass(), $('.5').hasClass(), $('.7').hasClass()]
// ];

$('document').ready(function() {
   var player = 1;


  $('.button').click(function(){
    var selected = $(this);
    //var is this button

  if (selected.hasClass('x') || selected.hasClass('o')){
      //if x or o has already been selected, do nothing.
    }

  else {
      if (player === 1 ) {
        selected.addClass('x');
        player = 2;
        //make it play 2's turn
        if (checkWon('x')) {
          //
          alert('Player 1 has Won!');
        }
       }
      else {
        selected.addClass('o');
        player = 1;
        //switch turns to player 1
        if (checkWon('o')) {
          alert('Player 2 has Won!'); }
    }
  }
});

function checkWon(winner) {

// if 1 + 2 + 3 return true. player wins!
  if ($('.1').hasClass(winner) && $('.2').hasClass(winner) && $('.3').hasClass(winner)){
    return true;
  }
  else if ($('.4').hasClass(winner) && $('.5').hasClass(winner) && $('.6').hasClass(winner)){
    return true;
  }

  else if ($('.7').hasClass(winner) && $('.8').hasClass(winner) && $('.9').hasClass(winner)){
    return true;
  }

  else if ($('.1').hasClass(winner) && $('.4').hasClass(winner) && $('.7').hasClass(winner)){
    return true;
  }

  else if ($('.2').hasClass(winner) && $('.5').hasClass(winner) && $('.8').hasClass(winner)){
    return true;
  }

  else if ($('.3').hasClass(winner) && $('.6').hasClass(winner) && $('.9').hasClass(winner)){
    return true;
  }
  else if ($('.1').hasClass(winner) && $('.5').hasClass(winner) && $('.9').hasClass(winner)){
    return true;
  }

  else if ($('.3').hasClass(winner) && $('.5').hasClass(winner) && $('.7').hasClass(winner)){
    return true;
  }
  else {
    return false;
    // keep playing
  }

}


$('.resetButton').click(function() {
  $('.o').removeAtr(".button");
  $('.x').removeAtr(".button");

   });




});
