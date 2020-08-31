// jQuery対応
var smoothScrollBtn = $("#smoothScroll");

$(function(){
    //smoothScrollの姿を消す
    smoothScrollBtn.hide();

    //ウィンドウがある程度スクロールされたら、#smoothScrollが出現、それ以外のときは非表示
    $(window).scroll(function(){
        $(this).scrollTop();
        //console.log($(this).scrollTop());
        //コンフリクト起こすために
        if($(this).scrollTop() > 650){
            smoothScrollBtn.fadeIn();
        }else{
            smoothScrollBtn.fadeOut();
        }
    });
    //クリックでページトップへもどる
    smoothScrollBtn.on('click',function(){
        $('html, body').animate({
            scrollTop:0
        },
        1500
        );
    });
});

// JS対応