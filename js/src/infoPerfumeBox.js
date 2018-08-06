(function($) {

// tabMenu
var imgaddr = "../img/perfumes/";
var imgData = ['pro_1_i', 'pro_2_i', 'pro_3_i','pro_4_i'];
var textLogo = ['pro_1', 'pro_2', 'pro_3','pro_4'];
var productMenu = $('.list').find('li');
var productContent = $('.pro_box');
var text = productContent.children('h4');
var productVideo = $('.video_wrap');
var pro = $('.pro');

for(var i = 0; i <productContent.length; i+=1){
  productContent.eq(i).children('h4').css({backgroundImage:'url(' + imgaddr + textLogo[i] + '.svg)',
  backgroundRepeat:'no-repeat', backgroundSize:'contain'});
}


productMenu.on('click', ['a'], function(e){
  e.preventDefault();
  var i = $(this).index();
  pro.css({backgroundImage:'url(' + imgaddr + imgData[i] + '.jpg)',
  backgroundRepeat:'no-repeat', backgroundSize:'contain'});

  // text.css({backgroundImage:'url(' + imgaddr + textLogo[i] + '.svg)',
  // backgroundRepeat:'no-repeat', backgroundSize:'contain'});



  productContent.slideUp();
  productContent.eq(i).slideDown();


  var winW = $(window).outerWidth();

  if(winW < 480){
    productVideo.hide();
  }else if(winW >=480){
  productVideo.slideUp();
  productVideo.eq(i).slideDown();

  }

});



// ==============================================================
  var winW = $(window).outerWidth();
  var ib = $('.info_perfume');
  var ibTop = ib.offset().top;
  var brH = $(window).outerHeight();
  var myscrollH_01 = ibTop - (brH/2);
  var btn = $('.video');


    // 480

  if(winW < 480){
    btn.on('click',['button'], function(e){
    e.preventDefault();
    var thisI = $(this).parent().index();
    productVideo.eq(thisI).show();
    productVideo.eq(thisI).siblings(thisI).hide();
    });
    var close = $('.close'); 

    close.on('click',function(e) { 
    e.preventDefault();
    var thisI = $(this).parent().index();
    productVideo.eq(thisI).fadeOut();
    // productVideo.eq(thisI).siblings(thisI).hide();
    

      // productVideo.fadeOut( function(){  
      // $(this).find('.close').remove(); });
      // productVideo.eq(thisI).fadeOut();
    }); 
    

  }


  // 768 보다 큰 브라우저
  if(winW >= 480){
  
    $(window).on('scroll',function(){
    var mys = $(this).scrollTop();
    if(mys >= myscrollH_01-250) {
      $('.info_perfume').addClass('active');
    // ibLi.addClass('active');  
    } else {
      $('.info_perfume').removeClass('active');
    }

  
  });


}; // if(winW>480) 보다 큰 브라우저





})(jQuery);