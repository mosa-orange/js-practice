// jQuery対応
$(function(){
    $('.tab__list li').on('click',function(){
        //index()でliセレクタの順番を取得する 引数thisで番号を格納できる
        var index = $('.tab__list li').index(this);

        //タブを選択しない状態をつくる
        $('.tab__list li').removeClass('is-active');
        
        //クリックされたタブにcss適用
        $(this).addClass('is-active');

        //クリックされたタブの中身を出す .tab divの番号をeq(数字)指定する。
        $('.tab div').removeClass('is-active').eq(index).addClass('is-active');
    });
});

// JS対応