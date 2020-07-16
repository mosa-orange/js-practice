// jQuery対応
$(function(){
    var menuCategoryWrap = $('.dropdownMenu__listItemWrap');

    $(function(){
        menuCategoryWrap
        .on('mouseover',function(){
            $(this).children('ul').addClass('is-active');
        })

        .on('mouseout',function(){
            $(this).children('ul').removeClass('is-active');
        });
    });
});

// JS対応