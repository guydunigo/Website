var main = function() {
    var headerBarElement = $("div.bar li")
    $("div.bar h1").hover(function() {
        if ($("div.bar h1").hasClass("active") === false) {
            $("div.bar h1").animate({
                "left" : "-=2px",
                "top" : "-=2px",
            })
        }
    }, function() {
        if ($("div.bar h1").hasClass("active") === false) {
            $("div.bar h1").animate({
                "left" : "+=2px",
                "top" : "+=2px",
                "text-shadow": "5px 5px 3px rgba(0,0,0,0.4)"
            })
        }
    }, 100)
}

$(document).ready(main);