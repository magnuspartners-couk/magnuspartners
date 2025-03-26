$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $(".main-header").addClass("sticky-header");
    } else {
        $(".main-header").removeClass("sticky-header");
    }
});

$('.banner-slide').owlCarousel({
    autoplay: false,
    loop: true,
    margin: 0,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    active: true,
    smartSpeed: 1000,
    autoplay: 6000,
    nav: true,
    navText: ['<span class="fal fa-chevron-left"></span>', '<span class="fal fa-chevron-right"></span>'],
    items: 1
});
AOS.init();

// Initialize AOS only if the screen width is above a certain threshold (e.g., 768px)
if (window.innerWidth > 991) {
  AOS.init({
    // Your AOS options here
  });
} else {
  // Optionally, disable AOS by not initializing it or calling AOS.destroy()
  AOS.init({
    disable: true  // Disables AOS animations on small screens
  });
}