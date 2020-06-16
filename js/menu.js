$(document).ready(function() {
    $("#js-hamburger").click(function () {
        $(this).toggleClass("active");
        $(this).prev().toggleClass("active");
        $('.header__navItem').hide();
        $('.header__navItem').each(function(i) {
            $(this).delay(80 * i).fadeIn(500);
        });
    });
});