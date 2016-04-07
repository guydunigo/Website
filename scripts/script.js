var main = function() {
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
        if ($(this).hasClass("active") === false) {
            $(this).animate({ color: "#000" }, "fast");
        }
    }, function() {
        if ($(this).hasClass("active") === false) {
            $(this).animate({ color: "#ccc" }, "fast");
        }
    });
}

$(document).ready(main);