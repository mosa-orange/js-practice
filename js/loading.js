// jQuery対応

$(function() {
    // コンテンツを非表示にする
    $('.contentsWrapper').addClass('.is-hidden');
    // ローディング画像を表示
    $('.loading, .loading__contents').css('display','block');
    // コンテンツを表示する
    $('.contentsWrapper').removeClass('.is-hidden');
});

//画像などコンテンツ全体が読み込まれたとき
$(window).on('load', function(){
    $('.loading').delay(900).fadeOut(800);
    $('.loading__contents').delay(900).fadeOut(500);
});
