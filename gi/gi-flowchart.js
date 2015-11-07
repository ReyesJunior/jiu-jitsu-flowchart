$(document).ready(function () {
/*
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

  */

//For Toggling Tap Text cards 

$('.toggle-read-text').toggle(function() {
  $(this).text('Read Less').siblings('.complete-text').show();
}, function () {
  $(this).text('Read More').siblings('.complete-text').hide();
});

// For paired media Query > 1050px

if (screen.width >=1050) {

  // limit toggling scroll-sub-section-paragraphs so only 1 can be active at a time
     $('.js-section-header').click( function() {
        // default behavior on click event:
        var $this = $(this);
        var target = $(this).data('target');
        var $other = $('.js-section-header').not($this)
        // hide all dropdown scroll-paragraphs
        $('.slider-wrapper').hide();
        // reset all dropdown arrow's to face up (remove 'rotate' class)
        $('.toggle-scroll-paragraph-button').removeClass('rotate');
        // remove all other 'sub-section-header-clicked' classes  *********** 
        $other.removeClass('sub-section-header-clicked');

        // For current selected js-section-header:
        // if it has already been clicked once:
        if ($this.hasClass('sub-section-header-clicked')) {
            // hide selected dropdown scroll-paragraph
            // reset selected dropdown arrow to face up (remove 'rotate' class)
            $('.toggle-scroll-paragraph-button[data-rotate="' + target + '"]').removeClass('rotate');
            $('.slider-wrapper[data-id="' + target + '"]').hide();
            $this.removeClass('sub-section-header-clicked');
            // remove all other 'sub-section-header-clicked' classes  *********** 
              $('.js-section-header').not$this.removeClass('sub-section-header-clicked');
        }
        // if this is the first time js-section-header is clicked:
          else {
              // mark with 'sub-section-header-clicked' Class
              $this.addClass('sub-section-header-clicked');
              // switch dropdown arrow to face down (add 'rotate' class)
              $('.toggle-scroll-paragraph-button[data-rotate="' + target + '"]').addClass('rotate');
              // Display scroll-paragraph
              $('.slider-wrapper[data-id="' + target + '"]').slideToggle('display');
          }
   });

} //End of if (screen.width >= 1050)


}); // End of Doc.ready line

