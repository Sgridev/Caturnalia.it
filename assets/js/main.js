"use strict";
$(window).on("load", function() {
    AOS.init();
    $(".navbar").css({ "display": "block" });
    $(".loader-wrapper").fadeOut("slow");
});
$(document).ready(function() {
    $("main").fadeIn(1000);
    $('.header').height($(window).height());
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-content').stop(true, true).delay(200).fadeIn();
    }, function() {
        $(this).find('.dropdown-content').stop(true, true).delay(200).fadeOut();
    });

    window.onscroll = function() { scrollFunction() };
    smoothScroll();

    $('.btnTop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

});

function scrollFunction() {
    let btn = $('.btnTop');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#navbar").css({ 'height': '65px' });
        $("#logo").css({ 'height': '55px' });
        $("#logo").css({ 'width': '55px' });
        $('.navbar-toggler').css({ 'margin-top': '10%' });
    } else {
        $("#navbar").css({ 'height': '100px' });
        $("#logo").css({ 'height': '90px' });
        $("#logo").css({ 'width': '90px' });
        $('.navbar-toggler').css({ 'margin-top': '40%' });
    }
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }

}

function smoothScroll() {
    document.querySelectorAll('a[href^="/"]').forEach(anchor => {
        if (anchor.id.includes("nav") && (location.pathname == "/" || location.pathname.includes("index.html"))) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                //id of <a> in nav must be "nav+idsection"
                $("#" + this.id.substring(3))[0].scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    });
}