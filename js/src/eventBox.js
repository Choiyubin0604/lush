 (function($){
var winW = $(window).outerWidth();

if(winW < 480){
  var event1 = $('.event_1')

  

}else{
    var event     = $('.event_wrap');
    var indicator = $('#eventBox').find('.indicator');
    var indiLi    = indicator.children('li');
    var eventLi   = event.children('li');
    var eventLen  = eventLi.length;
    event.children('ul').css({width:eventLen * 100 + '%'});


  //  이벤트베너내용 설정 --------------------------------------------------------
  // event banner 첫번째내용 복제 및 마지막으로 이동
    var eventLiClone = event.find('li').eq(0).clone();
    event.children('ul').append(eventLiClone);

    var banner = event.children('ul');
  // 복제된 내용의 갯수만큼 부모의 크기값을 재설정
    var eventLen = event.find('li').length;
    banner.css({width:eventLen * 100 + '%'});
  // 복제된 내용 포함한 li의 가로값을 일정하게 재처리
    banner.find('li').css({width:100 / eventLen + '%'});
  // ---------------------------------------------------------------------------

    var i =0;
  /*
    // var Move = function(a){
    //   indiLi.eq(a).addClass('active');
    //   indiLi.eq(a).siblings(indiLi).removeClass('active');

    //   var per = a * 100 + '%';
    //   banner.stop().animate({marginLeft:per});
    // };
    // Move(i);

    // indiLi.on('click',function(e){
    //   e.preventDefault();
    //   i = $(this).index();
    //   Move(i);
    // });
  */

    //배너의 갯수를 파악해서 마지막 갯수가 처음으로 오게 만들기

    var EventF = function(i){

      var num = i * -100 + '%';
      if (i < eventLen-1){
        event.children('ul').animate({marginLeft:num});
      }else {
        i = 0;
        event.children('ul').animate({marginLeft:num}, function(){
          $(this).css({marginLeft:0});
        });
      }
        
      indiLi.eq(i).addClass('active');
      indiLi.eq(i).siblings('li').removeClass('active');
    };
    EventF(i);

    indiLi.on('click',function(e){
      e.preventDefault();
      i = $(this).index();
      EventF(i);
    });

    //자동으로 이동

    var timed = 3000;
    var autoStart;

    var StartSlide = function(){
      autoStart = setInterval(function(){
        (i < eventLen-1) ? i+=1 : i=1;
        EventF(i);}, timed); };

    var StopSlide = function(){
            clearInterval(autoStart); };

    StartSlide();




    // 좌우 버튼 클릭으로 슬라이딩 처리하기
    var eventSlidebtn = $('.event_slide_btn');
    var event_nextBtn = $('.event_next_btn');
    var event_prevBtn = $('.event_prev_btn');

    // 오른버튼 클릭
    event_nextBtn.on('click',function(e){
      e.preventDefault();
      if(i < eventLen-1){
        i +=1;
      }else{
        i = 0;
      }
      // var i = i * -100 +"%";
      // event.stop().animate({marginLeft:i});
      EventF(i);

    });

    // 왼쪽버튼
    event_prevBtn.on('click',function(e){
      e.preventDefault();
      if(i > 0){
        i -=1;
      }else{
        i = eventLen-1;
      }
      // var i = btnNum * -100 +"%";
      // event.stop().animate({marginLeft:i});
      EventF(i);

});
}
    })(jQuery);