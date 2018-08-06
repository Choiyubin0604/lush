(function($){

  var winW = $(window).outerWidth();
  var ib = $('.infoBrandBox');
  var ibTop = ib.offset().top;

  var brH = $(window).outerHeight();
  var myscrollH_01 = ibTop - (brH/2);

    if(winW > 480){
      $(window).on('scroll',function(){

    var mys = $(this).scrollTop();
    if(mys >= myscrollH_01) {
      $('.info_01').addClass('active');
    // ibLi.addClass('active');  
    } else {
      $('.info_01').removeClass('active');
    }

    if(mys >= (myscrollH_01+600) ){
      $('.info_02').addClass('active');
    } else {
      $('.info_02').removeClass('active');
    }

    if(mys >= (myscrollH_01+1000) ){
      $('.info_03').addClass('active');
    } else {
      $('.info_03').removeClass('active');
    }

      if(mys >= (myscrollH_01+1300) ){
      $('.info_04').addClass('active');
    } else {
      $('.info_04').removeClass('active');
    }


    });
};

})(jQuery);