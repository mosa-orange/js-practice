// jQuery対応
var hiddenClass = "is-hidden";
var openBtn = $("#js-open");
var closeBtn = $("#js-close,#js-mask");
var modalArea = $("#js-modal");

$(function(){
    openBtn.click(modalOpen);
    closeBtn.click(modalClose);

    function modalOpen(){
        closeBtn.removeClass(hiddenClass);
        modalArea.removeClass(hiddenClass);
    }

    function modalClose(){
        closeBtn.addClass(hiddenClass);
        modalArea.addClass(hiddenClass);
    }koko
    
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