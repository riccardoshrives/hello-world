$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  $('#bg1').css({
    'transform' : 'translate(0px, '+ wScroll /32 +'%)'
  })

  $('#showcase-text').css({
    'transform' : 'translate(0px, '+ wScroll /16 +'%)'
  })

});
