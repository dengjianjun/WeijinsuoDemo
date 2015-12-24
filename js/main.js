$(function () {
    //导航按钮点击事件
    $('#btn_menu').on('click', function () {
        //切换导航菜单显示/隐藏
       $('.menu-content').slideToggle();
    });

    //浏览器窗口改变事件
    $(window).on('resize', function () {
        //浏览器宽度
        var windowWidth=$(window).width();
        var imgSrc=windowWidth>768?'lg-src':'sm-src';
        var imgs= $('#web_banner .carousel-inner .item>img');
        $(imgs).each(function () {
            var src=$(this).data(imgSrc);
            $(this).attr('src',src);
            $(this).parent().css('backgroundImage',windowWidth>768?'url('+src+')':'');
        })
    }).trigger('resize');

    // 获取界面上的轮播图容器
    var $carousels = $('#web_banner.carousel');
    var startX, endX;
    var offset = 50;
    // 注册滑动事件
    $carousels.on('touchstart', function(e) {
        // 手指触摸开始时记录一下手指所在的坐标X
        startX = e.originalEvent.touches[0].clientX;
    });

    $carousels.on('touchmove', function(e) {
        // 变量重复赋值
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend', function(e) {
        // 结束触摸一瞬间记录最后的手指所在坐标X
        // 比大小
        // 控制精度
        // 获取每次运动的距离，当距离大于一定值时认为是有方向变化
        var distance = Math.abs(startX - endX);
        if (distance > offset) {
            // 有方向变化
            // 2. 根据获得到的方向选择上一张或者下一张
            //     - $('a').click();
            //     - 原生的carousel方法实现 http://v3.bootcss.com/javascript/#carousel-methods
            $(this).carousel(startX > endX ? 'next' : 'prev');
        }
    });
});