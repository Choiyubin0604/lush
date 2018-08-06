(function($) {
  var aspa = $('.aspaBox');
  var bspa = $('.bspaBox');
  var cspa = $('.cspaBox');
  var spell = $('.spellFullBox');
  var sound = $('.soundFullBox');
  var val = $('.valFullBox');
  var tailor = $('.tailorFullBox');

  var spaOffset = [];
      spaOffset[0] = aspa.offset().top;
      spaOffset[1] = bspa.offset().top;
      spaOffset[2] = cspa.offset().top;
      spaOffset[3] = spell.offset().top;
      spaOffset[4] = sound.offset().top;
      spaOffset[5] = val.offset().top;
      spaOffset[6] = tailor.offset().top;

  aspa.addClass('active');

console.log(spaOffset);
  var i = 0, bool = true;
  $('html, body').on('mousewheel',function(e){
    var wheelValue = e.originalEvent.wheelDelta;
    var nT = $('#wrap').offset().top * -1;
    console.log(wheelValue);
    if(wheelValue < 0 && bool){
      bool = false;
      i+=1; 
    }
    if(wheelValue > 0 && bool){
      bool = false;
      i-=1; 
    }

    $('body').animate({scrollTop:spaOffset[i]},function(){
        switch(i){
          case 0:
          aspa.addClass('active');
          bspa.removeClass('active');
          cspa.removeClass('active');
          spell.removeClass('active');
          sound.removeClass('active');
          break;
          case 1:
          bspa.addClass('active');
          aspa.removeClass('active');
          cspa.removeClass('active');
          spell.removeClass('active');
          sound.removeClass('active'); 
          break;
          case 2:
          cspa.addClass('active');
          aspa.removeClass('active');
          bspa.removeClass('active');
          spell.removeClass('active');
          sound.removeClass('active');
          break;
          case 3:
          spell.addClass('active');
          cspa.removeClass('active');
          aspa.removeClass('active');
          bspa.removeClass('active');
          sound.removeClass('active');
          break;
          case 4:
          sound.addClass('active');
          spell.removeClass('active');
          cspa.removeClass('active');
          aspa.removeClass('active');
          bspa.removeClass('active');
          break;
          case 5:
          val.addClass('active');
          sound.removeClass('active');
          spell.removeClass('active');
          cspa.removeClass('active');
          aspa.removeClass('active');
          bspa.removeClass('active');
          break;
          case 6:
          tailor.addClass('active');
          val.removeClass('active');
          sound.removeClass('active');
          spell.removeClass('active');
          cspa.removeClass('active');
          aspa.removeClass('active');
          bspa.removeClass('active');
          break;
        }
        bool = true;
    });
  });

/*
.aspa{background-image:url(); transition:background-image 400ms linear;}
.aspa.videoView{background-image:none;}


*/

  var vbtn = $('.video'); 

    vbtn.on('click', function(){
    $(this).parent().prev().children('video').fadeIn();
  });

    var originE = e.originalEvent;
    var delta = evt;  
    var foxevt = originE.detail; // firefox에 존재
    var evt = originE.wheelDelta;  // firefox이외의 브라우저 존재
    var delta;
    // -----------------------------------------------------
    // firefox에서는 어떠한 이벤트를 받아들이는가?
    if(foxevt){
      //console.log('detail속성이 존재한다!!!', foxevt);
      foxevt *= -40;
      delta = foxevt;
    }else if(evt){
      //console.log('wheelDelta 속성이 존재한다!!!', evt);
      delta = evt;
    }
    console.log(delta);


})(jQuery);
          