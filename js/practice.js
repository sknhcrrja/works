'use strict';

$(function(){
  $('#drawer').click (function(){
    $('#toggle-list').slideToggle();
  });
});

$(function() {
  let pageTop = $('#top-page');
  $(window).scroll(function() {
    if ($(this).scrollTop() > 80){
      pageTop.fadeIn(300);
    } else {
      pageTop.fadeOut(300);
    }
  });
  pageTop.click(function(){
    $('body, html').animate({scrollTop: 0},3000);
  });

  $('.modal-pic').on('click' , function(){
    let imgSrc = $(this).attr('src');
    // console.log(imgSrc);
    $('#big-img').children('img').attr('src', imgSrc);
    $('#modal').fadeIn(200);
    pageTop.hide();
    $('body, html').css('overflow-y', 'hidden');
    return false;
  });

  $('#big-img , #modal').on('click', function(){
    $('#modal').fadeOut(200);
    pageTop.fadeIn();
    $('body, html').css('overflow-y', 'visible');
    return false;
  });
});