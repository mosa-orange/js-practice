// jQuery対応
$(function(){
    $("#js-open").click(modalOpen);

    $("#js-close").click(modalClose);

    $("#js-mask").click(modalClose);

    function modalOpen (){
        $("#js-mask").removeClass("is-hidden");
        $("#js-modal").removeClass("is-hidden");
    }

    function modalClose (){
        $("#js-mask").addClass("is-hidden");
        $("#js-modal").addClass("is-hidden");
    }

});

// JS対応
'use strict';
{
    const open = document.getElementById('js-open');
    const close = document.getElementById('js-close');
    const modal = document.getElementById('js-modal');
    const mask = document.getElementById('js-mask');

    open.addEventListener('click', () => {
        modal.classList.remove('is-hidden');
        mask.classList.remove('is-hidden');
    });

    close.addEventListener('click', () => {
        modal.classList.add('is-hidden');
        mask.classList.add('is-hidden');
    });

    mask.addEventListener('click', () => {
        close.click();
    });
}