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

var main = function() {
    // Bounce effect on website name when the page loads and when hovered :
    slideTitleLeft();
    slideTitleRight();
    $("#webTitle").hover(slideTitleLeft, slideTitleRight);
    // Darken sections titles when hovered :
    $("div.bar li a").hover(function() {
        $(this).animate({ color: "#000" }, "fast");
    }, function() {
        $(this).animate({ color: "#ccc" }, "fast");
    });

    // Scroll to elements :
    $("a#aboutButton").click(function() {
        $('html, body').animate({
            'scrollTop': $("div#aboutMe").offset().top
        }, 500);
    });
    $("a#portfolioButton").click(function() {
        $('html, body').animate({
            'scrollTop': $("div#portfolio").offset().top
        }, 500);
    });
    $("a#contactButton").click(function() {
        $('html, body').animate({
            'scrollTop': $("div#contact").offset().top
        }, 500);
    });
};

$(document).ready(main);