(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // -- hero slider -- //
        $('.homepage_slides').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        });

        $(".homepage_slides").on("translate.owl.carousel", function(){
            $(".single_slide_item h2").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single_slide_item p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".single_slide_item a").removeClass("animated fadeInDown").css("opacity", "0");
            $(".single_slide_item iframe").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".homepage_slides").on("translated.owl.carousel", function(){
            $(".single_slide_item h2").addClass("animated fadeInUp").css("opacity", "1");
            $(".single_slide_item p").addClass("animated fadeInDown").css("opacity", "1");
            $(".single_slide_item a").addClass("animated fadeInDown").css("opacity", "1");
            $(".single_slide_item iframe").addClass("animated fadeInUp").css("opacity", "1");
        });

        // -- counter -- //   
        $(".counter_number span").counterUp({
            delay: 10,
            time: 1000,
        });

        // -- modal video -- //
        $(".play_icon").modalVideo();
        $(".play_icon").on('click', function () {
            return false;
        });

        // -- live class video -- //
        $('.live_class_carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            autoplay: false,
            navText: ["<i class='fa fa-angle-double-left'></i>", "<i class='fa fa-angle-double-right'></i>"],
        });

        // -- Gallery grid -- //
        $(".gallery_list").masonry();

        // -- magnific gallery -- //
        $(".big_image").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        // -- search triggers -- //
        $(".search_triggers").on('click', function () {
            $(".search_bar_wrap").addClass("active");
        });

        $(".search_close").on('click', function () {
            $(".search_bar_wrap").removeClass("active");
        });
        // -- search triggers input keyup & down -- //
        $(".search_bar_tablecell input[type=search]").keyup(function () {
            if ($(this).val() != "") {
                $(".search_bar_tablecell button").css("opacity", 1);
                $(".search_bar_tablecell button").css("transform", "rotate(0deg)");
            } else {
                $(".search_bar_tablecell button").css("opacity", 0);
                $(".search_bar_tablecell button").css("transform", "rotate(45deg)");
            }
        });
        // -- back to top trigger -- //
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $(".back_to_top").fadeIn('slow');
            } else {
                $(".back_to_top").fadeOut('slow');
            }
        });
        $(".back_to_top").click(function(){
            $('html, body').animate({
                scrollTop:0
            }, 1500, 'easeInOutExpo');
            return false;
        });
        // -- wow -- //
        var wow = new WOW({
            mobile:false
        });
        wow.init();

    });

    jQuery(window).load(function () {
        // -- body preloader -- //
        $(".spinner").fadeOut();
        $(".body_preloader_wrap").delay(450).fadeOut('slow');
    });

}(jQuery));	