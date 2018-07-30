(function($) {

/** 반복기능을 사용하기 위해 알아야할 몇가지
  * for(최초; 조건; 증감){}    // forEach/each()
  * 배열 = [];
  * 객체 = {속성: 속성값};
  * JSON방식 = 배열형식과, 객체형식의 결합체
*/
  
var addr = "../img/face/";



var mask = [
            {img:"1.jpg", imgp:"mask_1",link:"mask.html",  title:"Catastrophe Cosmetic", data:"I'd like to keep it on please!"},
            {img:"2.jpg", imgp:"mask_2",link:"mask.html",  title:"Oatifix", data:"Hydrate, exfoliate and treat"},
            {img:"3.jpg", imgp:"mask_3",link:"mask.html",  title:"Cosmetic Warrior", data:"Combats troublesome spots, cleanses and... "},
            {img:"4.jpg", imgp:"mask_4",link:"mask.html",  title:"Rosy Cheeks", data:"Soothe skin from cheek to cheek"},
            {img:"5.jpg", imgp:"mask_5",link:"mask.html",  title:"Cupcake", data:"Cleanse and clarify  with this chocolatey treat..."},
            {img:"6.jpg", imgp:"mask_6",link:"mask.html",  title:"BB Seaweed", data:"Be shore of yourself"},
            {img:"7.jpg", imgp:"mask_7",link:"mask.html",  title:"Brazened Honey", data:"Refresh and detoxify your skin"},
            {img:"8.jpg", imgp:"mask_8",link:"mask.html",  title:"Don't Look At Me", data:"Don't be shy, you'll like it!"}

            ];
// $('.new_01').find('.news_img').css({backgroundImage:'url('+ addr + img[0] +')'});
// $('.new_02').find('.news_img').css({backgroundImage:'url('+ addr + img[1] +')'});
// $('.new_03').find('.news_img').css({backgroundImage:'url('+ addr + img[2] +')'});
// $('.new_04').find('.news_img').css({backgroundImage:'url('+ addr + img[3] +')'});


var infoBody = $('.info_body');
var infoUl = infoBody.find('ul');
 //html복제해서 처리하는 방법
var i=0; 
for(; i < mask.length; i+=1){
  var infoLi = infoUl.find('li').eq(0).clone();
  infoUl.append(infoLi);
  var li = infoUl.children('li').eq(i);
  li.find('.mask').css({backgroundImage:'url('+ addr + mask[i].img +')', backgroundRepeat:'no-repeat' , backgroundSize:'contain', backgroundPosition:'center'});

  
  li.find('a').attr({ href:mask[i].link , target:'_blank', "class":'more', "data-myattr":'myname'});
  li.find('dt').text(mask[i].title);
  li.find('dd').text(mask[i].data);
} // for
  infoUl.children('li').eq(mask.length).remove();



/* // 생성해서 처리한다면???
var i = 0;
for(; i<img.length; i+=1){
  bestUl.append('<li>  <a href="#">  <div class="news_img"></div>  <dl>  <dt>???</dt>  <dd>=======</dd>  </dl>  </a>  </li>');
  bestUl.children('li').eq(i).find('.news_img').css({backgroundImage:'url('+ addr + img[i] +')'});
}
bestUl.append('<li></li>');
bestUl.find('li').eq(-1).css({backgroundImage:'url('+ addr+ 'default_menu.png' +')', backgroundRepeat:'no-repeat'});
*/

// tabMenu
var imgaddr = "../img/face/";
var imgData = ['face_1_i', 'face_2_i', 'face_3_i','face_4_i'];
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
  var ib = $('.info_body');
  var ibTop = ib.offset().top;
  var ibUl = ib.children('ul');
  var ibLi = ibUl.children('li');
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
  if(winW >= 768){
  
    $(window).on('scroll',function(){
    console.log('?');
    var mys = $(this).scrollTop();
    if(mys >= myscrollH_01) {
      ibLi.eq(3).prevAll().addClass('active');
    // ibLi.addClass('active');  
    } else {
      ibLi.eq(3).prevAll().removeClass('active');
    }

    if(mys >= (myscrollH_01+400) ){
      ibLi.slice(3,6).addClass('active');
    } else {
      ibLi.slice(3,6).removeClass('active');
    }

    if(mys >= (myscrollH_01+750) ){
      ibLi.slice(6,8).addClass('active');
    } else {
      ibLi.slice(6,8).removeClass('active');
    }
  
  });


}; // if(winW>768) 보다 큰 브라우저


  // 768 보다 큰 브라우저
  if(winW > 480 && winW < 768){
  
    $(window).on('scroll',function(){
    console.log('?');
    var mys = $(this).scrollTop();
    if(mys >= myscrollH_01) {
      ibLi.eq(2).prevAll().addClass('active');
    // ibLi.addClass('active');  
    } else {
      ibLi.eq(2).prevAll().removeClass('active');
    }


    if(mys >= (myscrollH_01+400) ){
      ibLi.slice(2,4).addClass('active');
    } else {
      ibLi.slice(2,4).removeClass('active');
    }

    if(mys >= (myscrollH_01+700) ){
      ibLi.slice(4,6).addClass('active');
    } else {
      ibLi.slice(4,6).removeClass('active');
    }

    if(mys >= (myscrollH_01+980) ){
      ibLi.slice(6,8).addClass('active');
    } else {
      ibLi.slice(6,8).removeClass('active');
    }

  
  });

};


})(jQuery);