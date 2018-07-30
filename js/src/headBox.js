//headBox.js
(function($){
  var winW = $(window).outerWidth();
  var gnbBtn = $('#menu');
  var gnb = $('#gnb').find('ul');

  if(winW < 480){
    gnbBtn.on('click',function(e){
      gnb.stop().fadeToggle();
      $(this).toggleClass('active');

    });
  }else {
    gnbBtn.on('click',function(e){
      gnb.stop().slideToggle();
      $(this).toggleClass('active');

    });
  }

  $(window).on('resize',function(e){
    var nowW = $(window).outerWidth();
    if(winW !== nowW){
      location.reload();
    }
  });
})(jQuery);