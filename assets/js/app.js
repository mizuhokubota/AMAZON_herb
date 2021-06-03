$(function() {
  // ---------------indexed.htmlはココから----------------

  $(".fancy-button").mousedown(function(){
    $(this).bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
        $(this).removeClass('active');
    })
     $(this).addClass("active");
  });

  // ---------------indexed.htmlはココで終わり------------
  // ---------------cart.htmlはココから-------------------



  // ---------------cart.htmlはココで終わり---------------
});