

$(function() {


    // Fixed header

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH) { 
            header.addClass("fixed");

        } else {
            header.removeClass("fixed");

        }


    });




    // SCROLL//

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top;

        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 80

        }, 750);

    });



    // NavToggle

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");

    });


})