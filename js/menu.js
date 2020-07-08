// jQuery対応

$(function() {
    $("#js-hamburger").click(function () {
        $(this).toggleClass("active");
        $(this).prevAll().toggleClass("active");
        $('.header__navItem').hide();
        $('.header__navItem').each(function(i) {
            $(this).delay(50 * i).fadeIn(450);
        });
    });
});

// JS対応
