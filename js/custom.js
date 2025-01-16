//OwlCarousel
$(document).ready(function () {
  $("#gallery_box_slide").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1 },
        600: { items: 4 },
        1000: { items: 4 }
    }
  });
});
//OwlCarousel
$(document).ready(function () {
  $("#gallery_box_slide2").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1 },
        600: { items: 4 },
        1000: { items: 4 }
    }
  });
});
//success_stories
$(document).ready(function () {
  $("#success_stories").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1 },
        600: { items: 4 },
        1000: { items: 4 }
    }
  });
});
//Counter
$('.counter-value').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 9000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
//Counter End
// single gallery
$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
    return  false;
});
$(document).ready(function() {
var popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
    enabled : true
}
});
});




