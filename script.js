$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); 

            var target = $(this).attr("href"); 
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
                }, 600, function() {
                    location.hash = target; 
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.main-nav a.active').removeClass('active');
                    $('.main-nav a').eq(i).addClass('active');
            }
    });
}).scroll();


function readmore1() {
var x = document.getElementById("more1");
if (x.style.display === "none") {
    x.style.display = "flex";
} else {
    x.style.display = "none";
}
}

function readmore2() {
var x = document.getElementById("more2");
if (x.style.display === "none") {
    x.style.display = "flex";
} else {
    x.style.display = "none";
}
}
