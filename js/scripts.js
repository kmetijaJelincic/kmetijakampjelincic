/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (($) => {
    "use strict";
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click( () => {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    const navbarCollapse = () => {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

$('#the-dropdown').click(function () {
    if($(this).hasClass('open')) {
        alert('it works');
    }
});


function check(){
  const x = document.getElementsByClassName('dropdown-menu');
  if (x[0].classList.length == 2){
    x[0].classList.remove('show');
  }
  else{
    x[1].classList.remove('show');
  }
}

const s_width = window.screen.width * window.devicePixelRatio;
if (s_width <= 768) {
lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
    'disableScrolling': true,
    'fitImagesInViewport': true,
    'positionFromTop': 200,
    'maxHeight': 2000
    })
}
else if (s_width > 768) {
    lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
        'wrapAround': true,
        'disableScrolling': true,
        'fitImagesInViewport': true,
    })
}

 