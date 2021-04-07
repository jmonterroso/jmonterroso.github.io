import $ from 'jquery';

$(function () {
    // Hide Header on on scroll down
    let didScroll;
    let lastScrollTop = 0;
    const delta = 5;
    const $navBar = $('.navigation');
    const navbarHeight = $navBar.outerHeight();

    $(window).on('scroll', function () {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        const st = $(window).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $navBar.removeClass('nav-down').addClass('nav-up');
            $navBar.find('.navbar-collapse').removeClass('show');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $navBar.removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
});
