(function($) {
  var aspa = $('.aspaBox');
  var bspa = $('.bspaBox');
  var cspa = $('.cspaBox');
  var spell = $('.spellFullBox');
  var sound = $('.soundFullBox');
  var val = $('.valFullBox');
  var tailor = $('.tailorFullBox');
  var footer = $('#footBox');
  var box = $('.box');
  var boxList = [];
  var boxLen = box.length;
  var j = 0;
  var fullMedia = $('.fullVideo');
  var fullVideo = fullMedia.children('video')[0];
  // video --------------------------------------------------
  var vbtn = $('.video'); 
  vbtn.on('click', function(e){
    $(this).parent().prev().children('video').fadeIn();
  });
  // --------------------------------------------------------
  var sel = [aspa,bspa,cspa,spell,sound,val,tailor, footer];
  var spaOffset = [];
  for(var l=0; l<sel.length; l++){
    spaOffset[l]=sel[l].offset().top;
  }
  sel[0].addClass('active');
  // ------------------------------------------------------


/*
.aspa{background-image:url(); transition:background-image 400ms linear;}
.aspa.videoView{background-image:none;}


*/
  var i = 0, bool = true;
// mouse scroll ----------------------------------------------------------
  $('html,body').on('mousewheel DOMMouseScroll', function(e){
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
    //console.log(delta);

    
    if(bool == true) {
      bool=false;
      if(delta <0){
        (j>= boxLen-1) ? j = boxLen-1 : j+=1;
      }else if(delta>0){           
        (j<=0) ? j=0: j-=1;
      }

  // video 설정
  if(j >= 3){ 
     fullVideo.pause();
     fullMedia.fadeOut();
  }else{ 
    fullMedia.fadeIn(
      function(){
        fullVideo.play();
      });
  }
  // ---------------------------
    var RemoveC = function(){
      $.each(sel,function(i,v){
        sel[i].removeClass('active');
      });
    };

    $('body').animate({scrollTop:spaOffset[j]},function(){
      RemoveC();   
      sel[j].addClass('active');
    });
  // ---------------------------

   $('html').stop(true, false)
            .animate({scrollTop:boxList[j]}, 600, 'easeInQuad', function(){  
              setTimeout(
                function(){
                  bool=true;
                },700); 
            });
    } //if
  });// mousewheel && DOMMouseScroll

var ww = $(window).outerWidth();
$(window).on('resize',function() {
var nw = $(window).outerWidth();
if(ww !== nw){
location.reload();

  }

 });
})(jQuery);
          