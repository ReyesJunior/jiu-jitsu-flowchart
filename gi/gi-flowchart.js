$(document).ready(function () {


// Toggle SlideDown/Slideup Menu when dropdown-menu-button
  $('.dropdown-menu-button').click( function() {
    $('.gi-dropdown-menu').animate({height: 'toggle'}, 250, function () {
    });
  });


// Toggle SlideDOwn/Slideup Menu when gi-dropdown-menu-item is clicked
  $('.gi-dropdown-menu-item').click( function() {
    $('.gi-dropdown-menu').animate({height: 'toggle'}, 250, function () {
    });
  });


// Toggle Slider Menus
   $('.js-section-header').click( function() {
      $(this).toggleClass( 'sub-section-header-clicked' );

    var target = $( this ).data('target');
      $('.slider-wrapper[data-id="' + target + '"]').slideToggle('display');
  });


});