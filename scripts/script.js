/*
var slideTitleLeft = function() {
    $("#webTitle").animate({
        "margin-left": "-=10px",
        "margin-right": "+=10px"
    }, "fast")
}
var slideTitleRight = function() {
    $("#webTitle").animate({
        "margin-left": "+=15px",
        "margin-right": "-=15px"
    }, "fast")
    $("#webTitle").animate({
        "margin-left": "-=5px",
        "margin-right": "+=5px"
    }, "fast")
}
*/

var main = function() {
    // Scroll to top button :
    $("a.top").click(function() {
        $("html, body").animate({
            'scrollTop': 0
        }, 500);
    });
    // Scroll to elements smoothly :
    $("a#aboutButton").click(function() {
        $('html, body').animate({
            'scrollTop': $("#aboutMe").offset().top
        }, 500);
    });
    $("a#portfolioButton").click(function() {
        $('html, body').animate({
            'scrollTop': $("#portfolio").offset().top
        }, 500);
    });
    $("a#contactButton").click(function() {
        $('html, body').animate({
            'scrollTop': $("#contact").offset().top
        }, 500);
    });
    /*
    $(window).on("scroll",function() {
        if ($(document).scrollTop() < $("main").position().top - $("nav").height())
            $("nav").animate({"background-color": "rgba(256,256,256,0.9)"}, 100)
        else
            $("nav").animate({"background-color": "rgba(256,256,256,1)"}, 100)
    })
    */
};

// Hide everything until everything (mostly for the bg pic) is loaded.
$("header, main, footer").hide();
$(window).load(function() {
  $("header, main, footer").show();
})

$(document).ready(main);