$(document).ready(function () {


// Toggle SlideDown/Slideup Menu when dropdown-menu-button
  $('.dropdown-menu-button').click( function() {
    $('.gi-dropdown-menu').animate({height: 'toggle'}, 250, function () {
    });
  });


// Toggle SlideDown/Slideup Menu when gi-dropdown-menu-item is clicked
  $('.gi-dropdown-menu-item').click( function() {
    $('.gi-dropdown-menu').animate({height: 'toggle'}, 250, function () {
    });
  });


// Toggle Slider Menus and Slider Menus icon when js-section-header is clicked
   $('.js-section-header').click( function() {
      $(this).toggleClass('sub-section-header-clicked');

    var target = $( this ).data('target');
      $('.slider-wrapper[data-id="' + target + '"]').slideToggle('display');
      $('.toggle-scroll-paragraph-button[data-rotate="' + target + '"]').toggleClass('rotate');   
  });




});