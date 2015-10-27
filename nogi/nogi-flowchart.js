$(document).ready(function () {


// Toggle SlideDown/Slideup Menu 
	$('.dropdown-menu-button').click( function() {
		$('.nogi-dropdown-menu').animate({height: 'toggle'}, 250, function () {
    });
	});


// Toggle Slider Menus and Slider Menus icon when js-section-header is clicked
   $('.js-section-header').click( function() {
      $(this).toggleClass('sub-section-header-clicked');

    var target = $( this ).data('target');
      $('.slider-wrapper[data-id="' + target + '"]').slideToggle('display');
      $('.toggle-scroll-paragraph-button[data-rotate="' + target + '"]').toggleClass('rotate');   
  });






















}); // End of doc.ready script
