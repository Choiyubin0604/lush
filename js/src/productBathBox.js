(function($) {
  var listBox = $('.list');
  var proText = $('.pro_text');
  var proBox = $('.pro_box');



var w = $(window).outerWidth();
var rwd = function(){

  if(w > 768){
    var listBoxH = listBox.css('height');
    $('.pro').css({height:listBoxH});
    proText.css({height:listBoxH});
    
  }

};

rwd();


$(window).on('resize',function(){
var nW = $(window).outerWidth();
  if(w !== nW){
    location.reload();
  }
});


})(jQuery);