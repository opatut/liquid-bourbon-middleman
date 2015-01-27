$('.js-menu-trigger').on('click touchstart', function(e){
  $('.js-menu').toggleClass('is-visible');
  $('.js-menu-screen').toggleClass('is-visible');
  e.preventDefault();
});

$('.js-menu-screen').on('click touchstart', function(e){
  $('.js-menu').toggleClass('is-visible');
  $('.js-menu-screen').toggleClass('is-visible');
  e.preventDefault();
});

$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});
