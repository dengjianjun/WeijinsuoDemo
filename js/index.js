$(function () {

    reSetImage();

    //导航按钮点击事件
    $('#btn_menu').on('click', function () {
        $('body').toggleClass('mobile-nav-show');
    });

    //窗口改变时的事件
    $(window).resize(function () {
        reSetImage();
    });

    //定一个变量，保存当前的新闻类型标题
    //当前选中的新闻类型标题
    var currentNewsTitle = $('#news_type .nav.nav-tabs li.active>a').attr('data-title');

    //新闻类型选中点击事件
    //将当前点击的新闻类型选项的data-title赋值给currentNewsTitle
    $('#news_type .nav.nav-tabs li>a').on('click', function () {
        currentNewsTitle = $(this).attr('data-title');
        $('#news_title').text(currentNewsTitle);
        //新闻类型选项鼠标移入事件
        //将当前移动到的新闻类型选项的data-title显示到新闻标题
    }).on('mouseover', function () {
        $('#news_title').text($(this).attr('data-title'));
        //新闻类型选项鼠标移出事件
        //将新闻标还原成，原来的新闻标题currentNewsTitle
    }).on('mouseleave', function () {
        $('#news_title').text(currentNewsTitle);
    });

    var OFFSET = 50;
    // 轮播图触摸
    $('.carousel').each(function(i, item) {
        var startX, endX;
        item.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            e.preventDefault();
        });
        item.addEventListener('touchmove', function(e) {
            endX = e.touches[0].clientX;
            e.preventDefault();
        });
        item.addEventListener('touchend', function(e) {
            var offsetX = endX - startX;
            if (offsetX > OFFSET) {
                // 上一张
                $(this).carousel('prev');
            } else if (offsetX < -OFFSET) {
                // 上一张
                $(this).carousel('next');
            }
            e.preventDefault();
        });
    });

    $(function () { $("[data-toggle='tooltip']").tooltip(); });
});

//重置轮播图片
function reSetImage() {
    //浏览器窗口的宽度
    var width = $(window).width();
    var imgs = $('#myCarousel .carousel-inner .item img');
    var srcType = width > 768 ? 'lg-src' : 'sm-src'
    $(imgs).each(function () {
        var src=$(this).attr(srcType);
        $(this).attr('src', src);
        //$(this).parent().css('backgroundImage','url(' + src + ')');
    });
}