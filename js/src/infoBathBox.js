(function($) {

/** 반복기능을 사용하기 위해 알아야할 몇가지
  * for(최초; 조건; 증감){}    // forEach/each()
  * 배열 = [];
  * 객체 = {속성: 속성값};
  * JSON방식 = 배열형식과, 객체형식의 결합체
*/
  
var addr = "../img/bath/";



var itme = [
            {img:"1.jpg", imgp:"shower_item1",link:"shower.html",  title:"The Olive Branch", type:"Shower Gel", data:"Peaceful skin", weight:'100g'},
            {img:"2.jpg", imgp:"shower_item2",link:"shower.html",  title:"It's Raining Men", type:"Shower Ge", data:"/Hallelujah!", weight:'100g'},
            {img:"3.jpg", imgp:"shower_item3",link:"shower.html",  title:"Outback Mate", type:"Soap", data:"Get clean down under", weight:'120g'},
            {img:"4.jpg", imgp:"shower_item4",link:"shower.html",  title:"Ocean Salt", data:"Face And Body Scrub/Scrub and soften/70g"},
            {img:"5.jpg", imgp:"shower_item5",link:"shower.html",  title:"Crème de Menthe", data:"Mouthwash Tabs/Ice, ice, baby/45g"},
            {img:"6.jpg", imgp:"shower_item6",link:"shower.html",  title:"The Rough With The Smooth", data:"Body Scrub/The breakfast scrub/130g"},
            {img:"7.jpg", imgp:"shower_item7",link:"shower.html",  title:"Happy Hippy", data:"Shower Gel/Don’t worry, be happy/100g"},
            {img:"8.jpg", imgp:"shower_item8",link:"shower.html",  title:"Karma", data:"Soap/Smelling fabulous is your destiny/120g"},
            {img:"9.jpg", imgp:"shower_item9",link:"shower.html",  title:"Whoosh", data:"Strawberry Shaving Soap/Defluffed and delightful/70g"},
            {img:"10.jpg",imgp:"shower_item10", link:"shower.html", title:"D'Fluff", data:"Shower Jelly/Blast away the tiredness/100g"}

            ];
// $('.new_01').find('.news_img').css({backgroundImage:'url('+ addr + img[0] +')'});
// $('.new_02').find('.news_img').css({backgroundImage:'url('+ addr + img[1] +')'});
// $('.new_03').find('.news_img').css({backgroundImage:'url('+ addr + img[2] +')'});
// $('.new_04').find('.news_img').css({backgroundImage:'url('+ addr + img[3] +')'});


var infoBody = $('.info_body');
var infoUl = infoBody.find('ul');
 //html복제해서 처리하는 방법
var i=0; 
for(; i < itme.length; i+=1){
  var infoLi = infoUl.find('li').eq(0).clone();
  infoUl.append(infoLi);
  var li = infoUl.children('li').eq(i);
  li.find('.item1').css({backgroundImage:'url('+ addr + itme[i].img +')', backgroundRepeat:'no-repeat' , backgroundSize:'contain', backgroundPosition:'center'});

  
  li.find('a').attr({ href:itme[i].link , target:'_blank', "class":'more', "data-myattr":'myname'});
  li.find('dt').text(itme[i].title);
  li.find('dd').eq(0).text(itme[i].type);
  li.find('dd').eq(1).text(itme[i].data);
  li.find('dd').eq(2).text(itme[i].weight);
} // for
  infoUl.children('li').eq(itme.length).remove();



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
var imgaddr = "../img/bath/";
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
      ibLi.eq(4).prevAll().addClass('active');
    // ibLi.addClass('active');  
    } else {
      ibLi.eq(4).prevAll().removeClass('active');
    }

    if(mys >= (myscrollH_01+600) ){
      ibLi.slice(4,8).addClass('active');
    } else {
      ibLi.slice(4,8).removeClass('active');
    }

    if(mys >= (myscrollH_01+900) ){
      ibLi.slice(8,10).addClass('active');
    } else {
      ibLi.slice(8,10).removeClass('active');
    }
  
  });


}; // if(winW>768) 보다 큰 브라우저


  // 768 보다 큰 브라우저
  if(winW > 480 && winW < 768){
  
    $(window).on('scroll',function(){
    console.log('?');
    var mys = $(this).scrollTop();
    if(mys >= myscrollH_01) {
      ibLi.eq(3).prevAll().addClass('active');
    // ibLi.addClass('active');  
    } else {
      ibLi.eq(3).prevAll().removeClass('active');
    }


    if(mys >= (myscrollH_01+700) ){
      ibLi.slice(3,6).addClass('active');
    } else {
      ibLi.slice(3,6).removeClass('active');
    }

    if(mys >= (myscrollH_01+1000) ){
      ibLi.slice(6,9).addClass('active');
    } else {
      ibLi.slice(6,9).removeClass('active');
    }

    if(mys >= myscrollH_01+1300) {
      ibLi.slice(9,10).addClass('active');
    } else {
      ibLi.slice(9,10).removeClass('active');
    }
  
  });

};


})(jQuery);