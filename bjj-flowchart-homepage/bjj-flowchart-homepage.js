// When Document Loads

$(document).ready(function () {

// Global JS

// Toggle Mobile menu when clicking mobile-menu-button

  $('.mobile-menu-button').click( function() {
    $('.bjj-mobile-menu').animate({height: 'toggle'}, 250, function () {
    });
  });

// Toggle Mobile menu when clicking gi-mobile-menu-item

  $('.bjj-mobile-menu-item').click( function() {
    $('.bjj-mobile-menu').animate({height: 'toggle'}, 250, function () {
    });
  });

// Hide gi-mobile-menu when any anchor is clicked 

$('a').click(function() {
  $('.bjj-mobile-menu').hide();
});

// On window resize 
  $(window).resize(function(){
     var width = $(window).width();
     if(width >= x){
   
     }
     else{
         
     }
  }).resize() // Trigger resize function on page load




}); // End of $(document).ready function

