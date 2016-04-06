var main = function() {
    var headerBarElement = $("div.bar h1 a")
    $("div.bar h1 a").hover(function() {
        $(this).animate({
            "margin-left": "-=5px",
            "margin-right": "+=5px"
        }, "fast")
    }, function() {
        $(this).animate({
            "margin-left": "+=7px",
            "margin-right": "-=7px"
        }, "fast")
        $(this).animate({
            "margin-left": "-=2px",
            "margin-right": "+=2px"
        }, "fast")
    });
    $("div.bar li a").hover(function() {
        if ($(this).hasClass("active") === false) {
            $(this).animate({
                color: "#000"
            }, "fast")
        }
    }, function() {
        if ($(this).hasClass("active") === false) {
            $(this).animate({
                color: "#ccc"
            }, "fast")
        }
    }, 50);
}

$(document).ready(main);