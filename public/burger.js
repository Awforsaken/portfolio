$(document).ready(function() {
    $('#mobile-menu-button').click(function() {
      $('.mobile-menu').toggleClass('open');
      $('#mobile-menu-button .cta, #mobile-menu-button .close').toggleClass("hidden")
      console.log('burger');
    });

    $(document).on('click', '.mobile-menu.open', function() {
      $('.mobile-menu').toggleClass('open');
      $('#mobile-menu-button .cta, #mobile-menu-button .close').toggleClass("hidden");
      console.log('menu clicked');
    });
  });