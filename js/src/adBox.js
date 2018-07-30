   
    (function($){
    var winW = $(window).outerWidth();

    var product   = $('.product');
    var timed     = 500;

    var slideBtn = $('.slide_btn');
    var nextBtn = slideBtn.children('.next_btn');
    var prevBtn = slideBtn.children('.prev_btn');

    var num = 0;
    var pr1 = $('.product_1').children('li').length;
    var pr2 = $('.product_2').children('li').length;
    var pr3 = $('.product_3').children('li').length;
    var productLength = pr1+pr2+pr3;


    // var productLength = productLi.length;

    console.log(productLength);
    nextBtn.on('click',function(e){
      e.preventDefault();
      if(num < productLength-1){
        num +=1;
      }
      var i = num * -33.333333 +"%";
      product.stop().animate({marginLeft:i});
    });
   
    prevBtn.on('click',function(e){
      e.preventDefault();
      if(num > 0){
        num -=1;
      }
      var i = num * -33.333333 +"%";
      product.stop().animate({marginLeft:i});
    });

    if(winW > 480){
  //  ---------------------------------
  // scroll 위치에 따라 
  // $('.weekly_text').hide();

  var bb = $('#bestBox');
  var bbTop = bb.offset().top; 
  // console.log(bbTop);
  var brH = $(window).outerHeight();
  var myscrollH_01 = bbTop - (brH/2);

  var md = $('.md_text');
  var mdTop = md.offset().top;


  $(window).on('scroll',function(){
    var mys = $(this).scrollTop();
    // console.log(mys);

    if(mys >= myscrollH_01){
      $('.weekly_text').addClass('active');
     
    }else{
      $('.weekly_text').removeClass('active');
    }

  });

  $(window).on('scroll',function(){
    var mys = $(this).scrollTop();
    // console.log(mys);

    if(mys >= myscrollH_01){
      $('.weekly_1').addClass('active');
     
    }else{
      $('.weekly_1').removeClass('active');
    }
  });

  $(window).on('scroll',function(){
    var mys = $(this).scrollTop();
    // console.log(mys);

    if(mys >= bbTop){
      $('.weekly_2').addClass('active');
     
    }else{
      $('.weekly_2').removeClass('active');
    }

  });

  $(window).on('scroll',function(){
    var mys = $(this).scrollTop();
    // console.log(mys);

    if(mys >= bbTop){
      $('.weekly_3').addClass('active');
     
    }else{
      $('.weekly_3').removeClass('active');
    }

  });


  var myscrollH_02 = mdTop - (brH/2);

  $(window).on('scroll',function(){
    var mys2 = $(this).scrollTop();

    if(mys2 >= myscrollH_02) {  
      md.addClass('active');  
      $('.md_1').addClass('active');          
    }else{  
      md.removeClass('active'); 
      $('.md_1').removeClass('active'); 
    }

    if(mys2 >= mdTop) {    
      $('.md_2').addClass('active');   
      $('.md_3').addClass('active');
    }else{  
      $('.md_2').removeClass('active'); 
      $('.md_3').removeClass('active');
    }
  });
  }
 
  })(jQuery);

