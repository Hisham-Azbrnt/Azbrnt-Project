$(function () {
  'use strict';

// Change The Navbar BackgrundColor When The Window Scroll
  $(window).scroll(function () {

    if( $(this).scrollTop() >= 100 ) {
      $('.header').css('backgroundColor', 'rgba(0,0,0,0.9)');
    }else {
      $('.header').css('backgroundColor', 'transparent');
    }

  });

  // Change The Color When The Mouse On the btn
var btnHeader     = $('.img-back .header .btn'),
    btnBox        = $('.img-back .box .box-btn'),
    btnSecret     = $('.secret .left .secret-btn'),
    btnAdditional = $('.additional .additional-btn'),
    btnContact    = $('.contact-us .right .btn-contact');

  $(btnHeader).on({
    mouseenter: function() { $(this).css({ color: '#fff', backgroundColor: '#f47721' }) },
    mouseleave: function() { $(this).css({ color: '#555353', backgroundColor: '#fff' }) }
  });

  $(btnBox).on({
    mouseenter: function() { $(this).css({ color: '#555353', backgroundColor: '#fff' }) },
    mouseleave: function() { $(this).css({ color: '#fff', backgroundColor: '#f47721' }) }
  });

  $(btnSecret).on({
    mouseenter: function() { $(this).css({color: '#fff', backgroundColor: '#555353'}) },
    mouseleave: function() { $(this).css({color: '#fff', backgroundColor: '#f47721'}) }
  });

  $(btnAdditional).on({
    mouseenter: function() { $(this).css({color: '#fff', backgroundColor: '#555353'}) },
    mouseleave: function() { $(this).css({color: '#fff', backgroundColor: '#f47721'}) }
  });

  $(btnContact).on({
    mouseenter: function() { $(this).css({ color: '#fff', backgroundColor: '#555353' }) },
    mouseleave: function() { $(this).css({ color: '#555353', backgroundColor: '#fff' }) }
  });

});





