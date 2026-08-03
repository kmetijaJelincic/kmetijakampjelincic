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
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo",
        );
        return false;
      }
    }
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(() => {
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

  // Activate the matching "Ponudba" tab when a menu/button link is clicked (same
  // page). Bind directly on the element: the js-scroll-trigger handler above
  // returns false (stops propagation), so a document-delegated handler would
  // never fire. Also close the dropdown on desktop.
  $(".js-tab-link").on("click", function () {
    var tabId = $(this).data("tab");
    if (tabId) $("#" + tabId).tab("show");
    $(this).closest(".dropdown-menu").removeClass("show");
  });

  // Close the parent dropdown when a scroll-trigger item inside it is clicked
  // (the js-scroll-trigger return-false above would otherwise leave it open).
  $(".dropdown-menu .js-scroll-trigger").on("click", function () {
    $(this).closest(".dropdown-menu").removeClass("show");
  });

  // If arriving with a tab hash (e.g. from the gallery pages), open that tab and
  // scroll to the offer section.
  var hashTabs = {
    "#sobe": "nav-sobe-tab",
    "#kamp": "nav-kamp-tab",
    "#sirarna": "nav-sirarna-tab",
    "#izposoja": "nav-izposoja-tab",
  };
  if (hashTabs[location.hash]) {
    $("#" + hashTabs[location.hash]).tab("show");
    var offerTarget = $("#ponudba");
    if (offerTarget.length) {
      $("html, body").animate(
        { scrollTop: offerTarget.offset().top - 72 },
        800,
      );
    }
  }
})(jQuery); // End of use strict

function check() {
  const x = document.getElementsByClassName("dropdown-menu");
  if (x[0].classList.length == 2) {
    x[0].classList.remove("show");
  } else {
    x[1].classList.remove("show");
  }
}

const s_width = window.screen.width * window.devicePixelRatio;
if (s_width <= 768) {
  lightbox.option({
    alwaysShowNavOnTouchDevices: true,
    wrapAround: true,
    disableScrolling: true,
    fitImagesInViewport: true,
    positionFromTop: 200,
    maxHeight: 2000,
  });
} else if (s_width > 768) {
  lightbox.option({
    alwaysShowNavOnTouchDevices: true,
    wrapAround: true,
    disableScrolling: true,
    fitImagesInViewport: true,
  });
}

// Reveal-on-scroll. Every section gets animated content (headers + main blocks
// + the hero, so it also plays on arrival). Hidden state is gated on
// body.reveal-ready so content stays visible if JS/IntersectionObserver is off.
(function () {
  if (!("IntersectionObserver" in window)) return;
  var targets = document.querySelectorAll(
    "header.masthead .hero-badge, header.masthead .hero-title, " +
      "header.masthead .hero-subtitle, header.masthead .hero-cta-row, header.masthead .hero-notice, " +
      ".page-section .section-eyebrow, .page-section h2, .page-section .about-border, " +
      ".on-hover, .team-member, .contact-map, #contact .list-group, .sponsor-logos img, .timeline li",
  );
  if (!targets.length) return;
  document.body.classList.add("reveal-ready");
  var io = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -10% 0px" },
  );
  targets.forEach(function (el) {
    el.classList.add("reveal");
    io.observe(el);
  });
  // Safety net: only force-reveal elements already in the viewport (so nothing
  // that's on screen can get stuck hidden). Below-the-fold elements are left to
  // the observer so they still animate as the user scrolls to them.
  setTimeout(function () {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    targets.forEach(function (el) {
      if (el.classList.contains("is-visible")) return;
      var r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) {
        el.classList.add("is-visible");
        io.unobserve(el);
      }
    });
  }, 1200);
})();

// Modal carousel ambient backdrop: paint each slide's own image behind the
// uncropped photo (CSS blurs it). Runs on modal open so lazy-loaded srcs have
// resolved; keeps the ~13 accommodation modals DRY (no duplicated markup).
(function () {
  if (!window.jQuery) return;
  jQuery(document).on("shown.bs.modal", ".modal", function () {
    this.querySelectorAll(".carousel-item img").forEach(function (img) {
      var src = img.currentSrc || img.src;
      if (src) img.parentElement.style.backgroundImage = "url('" + src + "')";
    });
  });
})();
