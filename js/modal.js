// jQuery対応
// var hiddenClass = "is-hidden";
// var openBtn = $("#js-open");
// var closeBtn = $("#js-close,#js-mask");
// var modalArea = $("#js-modal");

// $(function(){
//     openBtn.on('click',modalOpen);
//     closeBtn.on('click',modalClose);

//     function modalOpen(){
//         closeBtn.removeClass(hiddenClass);
//         modalArea.removeClass(hiddenClass);
//     }

//     function modalClose(){
//         closeBtn.addClass(hiddenClass);
//         modalArea.addClass(hiddenClass);
//     }
// });

// JS対応
{
    const openBtn = document.getElementById('js-open');
    const closeBtn = document.getElementById('js-close');
    const modal = document.getElementById('js-modal');
    const mask = document.getElementById('js-mask');

    openBtn.addEventListener('click',function(){
        modal.classList.remove('is-hidden');
        mask.classList.remove('is-hidden');
    });

    closeBtn.addEventListener('click',function(){
        modal.classList.add('is-hidden');
        mask.classList.add('is-hidden');
    });

    mask.addEventListener('click',function(){
        closeBtn.click();
    });
}