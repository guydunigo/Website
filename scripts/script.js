var main = function() {
    // Bounce effect on website name
    var headerBarElement = $("div.bar h1 a")
    $("div.bar h1 a").hover(function() {
        $(this).animate({
            "margin-left": "-=10px",
            "margin-right": "+=10px"
        }, "fast")
    }, function() {
        $(this).animate({
            "margin-left": "+=15px",
            "margin-right": "-=15px"
        }, "fast")
        $(this).animate({
            "margin-left": "-=5px",
            "margin-right": "+=5px"
        }, "fast")
    });
    $("div.bar li a").hover(function() {
        $(this).animate({ color: "#000" }, "fast");
    }, function() {
        $(this).animate({ color: "#ccc" }, "fast");
    });

    // Scroll to element :
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