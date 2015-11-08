$(document).ready(function () {

// Toggle SlideDown/Slideup Menu when clicking dropdown-menu-button
  $('.dropdown-menu-button').click( function() {
    $('.gi-dropdown-menu').animate({height: 'toggle'}, 250, function () {
    });
  });


// Toggle SlideDown/Slideup Menu when clicking gi-dropdown-menu-item
  $('.gi-dropdown-menu-item').click( function() {
    $('.gi-dropdown-menu').animate({height: 'toggle'}, 250, function () {
    });
  });

// Toggle Tap Text cards (Read More/Read Less)
$('.toggle-read-text').toggle(function() {
  // Read more/ Read less button toggle function should act independently from one another when clicked
  var $this = $(this);

  $this.text('Read Less').siblings('.complete-text').slideToggle();
  }, function () {
    $this.text('Read More').siblings('.complete-text').slideToggle();
});

// limit toggle of scroll-sub-section-paragraphs so only 1 can be active at a time
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


}); // End of Doc.ready line

