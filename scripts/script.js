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
};

$(document).ready(main);