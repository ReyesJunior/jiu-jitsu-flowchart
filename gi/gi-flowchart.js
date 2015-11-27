// When Document Loads

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

// Make local anchors scroll to href smoothly when clicked
$('a[href*=#]:not([href=#])').click(function() {

  var target = $(this.hash);

   target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
           scrollTop: target.offset().top
        }, 900);
        return false;
      }
});

// Hide gi-dropdown-menu when anchor is clicked 
$('a').click(function() {
  $('.gi-dropdown-menu').hide();
});

// Toggle Tap Text cards (Read More/Read Less)
$('.toggle-read-text').toggle(function() {
  // Read more/ Read less button toggle function should act independently from one another when clicked
  var $this = $(this);

  $this.text('Read Less').siblings('.complete-text').slideToggle();
  }, function () {
    $(this).text('Read More').siblings('.complete-text').slideToggle();
});

// limit toggle of scroll-sub-section-paragraphs so only 1 can be active at a time
   $('.js-section-header').click( function() {
// default behavior on click event:
      var $this = $(this);
      var target = $(this).data('target');
      var $other = $('.js-section-header').not($this)
      // hide all dropdown scroll-paragraphs
      $('.slider-wrapper').slideUp();
      // make all js-section headers same background-color (to correct for .hover() method)
       $('.js-section-header').css({"background-color": "#035082"});
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
          $('.slider-wrapper[data-id="' + target + '"]').slideUp();
          $this.removeClass('sub-section-header-clicked');
          // remove all other 'sub-section-header-clicked' classes  *********** 
          $('.js-section-header'.not$this).removeClass('sub-section-header-clicked');
      }
      // if this is the first time js-section-header is clicked:
        else {
            // mark with 'sub-section-header-clicked' Class
            $this.addClass('sub-section-header-clicked');
            // make this js-section-header have correct backgroun-color (to correct for .hover() method)
            $this.css({"background-color": "#FF1450"});
            // switch dropdown arrow to face down (add 'rotate' class)
            $('.toggle-scroll-paragraph-button[data-rotate="' + target + '"]').addClass('rotate');
            // Display scroll-paragraph
            $('.slider-wrapper[data-id="' + target + '"]').slideDown('display');
        }
    });

// Hover feature for un-selected js-section header 
  $('.js-section-header').hover(function() {

// HandlerIn
    if($(this).hasClass('sub-section-header-clicked')) {
      $(this).css({"background-color": "#FF1450"});
    } else {
      $(this).css({"background-color": "#0074BF"});
    }
  }, 
//HandlerOut
  function () {
    if($(this).hasClass('sub-section-header-clicked')) {
      $(this).css({"background-color": "#FF1450"});
    } else {
      $(this).css({"background-color": "#035082"});
    }
  });

// On window Resizes //
// >= 800px
// On window resize > 800px, move 'Read More/Read Less' button to 2nd paragraph
  $(window).resize(function(){
     var width = $(window).width();
     if(width >= 800){
        $('.section-description-paragraph:nth-child(2)').removeClass('complete-text');
     }
     else {
        $('.section-description-paragraph:nth-child(2)').addClass('complete-text');
     }
  }).resize() // Trigger resize function on page load

// >= 1050px
// On window resize > 1050px, move 'Read More/Read Less' button to 3rd paragraph and hide it
  $(window).resize(function(){
     var width = $(window).width();
     if(width >= 1050){
         $('.section-description-paragraph:nth-child(3)').removeClass('complete-text');
         $('.toggle-read-text').hide();
     }
     else{
         $('.section-description-paragraph:nth-child(3)').addClass('complete-text');
         $('.toggle-read-text').show();
     }
  }).resize() // Trigger resize function on page load


// Move the 'slider-wrapper' content to it's specified section 'dropdown-slider-panel'
$(window).resize(function(){

      var width = $(window).width();


      if(width >= 1050){
        // homepage
        $('.homepage.dropdown-slider-panel').show();
        $('.homepage.slider-wrapper').appendTo('.homepage.dropdown-slider-panel');
        // stand-up
        $('.stand-up.dropdown-slider-panel').show();
        $('.stand-up.slider-wrapper').appendTo('.stand-up.dropdown-slider-panel');
        // guard-play
        $('.guard-play.dropdown-slider-panel').show();
        $('.guard-play.slider-wrapper').appendTo('.guard-play.dropdown-slider-panel');
        // guard-passing
        $('.guard-passing.dropdown-slider-panel').show();
        $('.guard-passing.slider-wrapper').appendTo('.guard-passing.dropdown-slider-panel');
        // dominated
        $('.dominating.dropdown-slider-panel').show();
        $('.dominating.slider-wrapper').appendTo('.dominating.dropdown-slider-panel');
        // dominated
        $('.dominated.dropdown-slider-panel').show();
        $('.dominated.slider-wrapper').appendTo('.dominated.dropdown-slider-panel');
        } else {
          // homepage sliders
          $('.homepage.dropdown-slider-panel').hide();
          $('.movement.slider-wrapper').detach('.homepage.dropdown-slider-panel').appendTo('.movement.slider-wrapper-container');
          $('.strategy.slider-wrapper').detach('.homepage.dropdown-slider-panel').appendTo('.strategy.slider-wrapper-container');
          $('.technique.slider-wrapper').detach('.homepage.dropdown-slider-panel').appendTo('.technique.slider-wrapper-container');
          // stand-up
          $('.stand-up.dropdown-slider-panel').hide();
          $('.clinch-control.slider-wrapper').detach('.stand-up.dropdown-slider-panel').appendTo('.clinch-control.slider-wrapper-container');
          $('.takedown.slider-wrapper').detach('.stand-up.dropdown-slider-panel').appendTo('.takedown.slider-wrapper-container');
          // guard-play
          $('.guard-play.dropdown-slider-panel').hide();
          $('.full-guard-play.slider-wrapper').detach('.guard-play.dropdown-slider-panel').appendTo('.full-guard-play.slider-wrapper-container');
          $('.half-guard-play.slider-wrapper').detach('.guard-play.dropdown-slider-panel').appendTo('.half-guard-play.slider-wrapper-container');
          $('.open-guard-play.slider-wrapper').detach('.guard-play.dropdown-slider-panel').appendTo('.open-guard-play.slider-wrapper-container');
          // guard-passing
          $('.guard-passing.dropdown-slider-panel').hide();
          $('.pass-full-guard.slider-wrapper').detach('.guard-passing.dropdown-slider-panel').appendTo('.pass-full-guard.slider-wrapper-container');
          $('.pass-half-guard.slider-wrapper').detach('.guard-passing.dropdown-slider-panel').appendTo('.pass-half-guard.slider-wrapper-container');
          $('.pass-open-guard.slider-wrapper').detach('.guard-passing.dropdown-slider-panel').appendTo('.pass-open-guard.slider-wrapper-container');
          // dominating
          $('.dominating.dropdown-slider-panel').hide();
          $('.dominating-mount.slider-wrapper').detach('.dominating.dropdown-slider-panel').appendTo('.dominating-mount.slider-wrapper-container');
          $('.dominating-sidecontrol.slider-wrapper').detach('.dominating.dropdown-slider-panel').appendTo('.dominating-sidecontrol.slider-wrapper-container');
          $('.dominating-north-south.slider-wrapper').detach('.dominating.dropdown-slider-panel').appendTo('.dominating-north-south.slider-wrapper-container');
          $('.dominating-backmount.slider-wrapper').detach('.dominating.dropdown-slider-panel').appendTo('.dominating-backmount.slider-wrapper-container');
          // dominated
          $('.dominated.dropdown-slider-panel').hide();
          $('.dominated-mount.slider-wrapper').detach('.dominated.dropdown-slider-panel').appendTo('.dominated-mount.slider-wrapper-container');
          $('.dominated-sidecontrol.slider-wrapper').detach('.dominated.dropdown-slider-panel').appendTo('.dominated-sidecontrol.slider-wrapper-container');
          $('.dominated-north-south.slider-wrapper').detach('.dominated.dropdown-slider-panel').appendTo('.dominated-north-south.slider-wrapper-container');
          $('.dominated-backmount.slider-wrapper').detach('.dominated.dropdown-slider-panel').appendTo('.dominated-backmount.slider-wrapper-container');
      }

  }).resize() // Trigger resize function on page load

// Highlight menu item (on click/scroll/or page location)
// Cache selectors
var lastId,
    topMenu = $(".alternate.gi-menu"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("location")
         .end().filter("[href=#"+id+"]").parent().addClass("location");
   }                   
});

}); // End of $(document).ready function

