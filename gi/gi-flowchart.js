$(document).ready(function () {


// Toggle SlideDown/Slideup Menu 
	$('.menu-stripes-container').click( function() {
		$('.nogi-dropdown-menu').animate({height: 'toggle'}, 250, function () {
    });
	});


// Toggle Slider Menus
// Need to figure out data attribute to make it cleaner!
   $('.js-section-header').click( function() {
  		$( this ).toggleClass( 'sub-section-header-clicked' );

    var target = $( this ).data('target');
      $('.slider-wrapper[data-id="' + target + '"]').slideToggle('display');
  });


// Stand-up Left Panel slide 
  $('.sidenotes-slider-button').click(function () {
    $( this ).toggleClass( 'standup-slider-clicked' );
    $('.standup-sidenote-panel').animate({width: 'toggle'}, 500);
  });


// Stand-up Right Panel slide 
  $('.stats-slider-button').click(function () {
    $( this ).toggleClass( 'standup-slider-clicked' )
    $('.standup-right-panel').animate({width: 'toggle'}, 500);
  });























}); // End of doc.ready script
