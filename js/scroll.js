$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 30) {
        $("header").addClass("scrolled");
        $("body").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
        $("body").removeClass("scrolled");
    }
});