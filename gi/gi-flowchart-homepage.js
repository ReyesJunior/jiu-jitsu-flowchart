// When Document Loads

$(document).ready(function () {

// Toggle SlideDown/Slideup Menu when clicking dropdown-menu-button
  $('.mobile-menu-button').click( function() {
    $('.gi-mobile-menu').animate({height: 'toggle'}, 250, function () {
    });
  });


// Toggle SlideDown/Slideup Menu when clicking gi-dropdown-menu-item
  $('.gi-mobile-menu-item').click( function() {
    $('.gi-mobile-menu').animate({height: 'toggle'}, 250, function () {
    });
  });

});