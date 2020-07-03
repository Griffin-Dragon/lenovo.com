let baseUrl = "http://localhost/H5-study/week5/day34/lenovo.com"; //基础路径

define(['jquery', 'HappyImage', 'lazyload'], function($, HappyImage, lazyload) {
    return {
        // 数据渲染
        render: function() {
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getall.php`,
                dataType: "json",
                success: function(res) {
                    let temp = '';
                    res.forEach(element => {
                        temp += `<li class="product-detail-card">
                    <a href="./detail.html">
                        <img src="${baseUrl}/${element.img}" alt="">
                        <b>${element.title}</b>
                        <p>${element.subtitle}</p>
                        <span>¥${element.price}</span>

                    </a>
                </li>`
                    });
                    $('.product-list-xuanran').html(temp);
                }
            });
        },
        // 轮播图
        slider: function() {
            $("#target").HappyImage({
                autoplay: 3000
            });
        },
        // 右侧导航和头部导航
        nva_right: function() {
            $(window).on('scroll resize', function() {
                // 如何判断滚动条拉到了底部
                // 滚动条已滚动的距离+窗口高度 === 文档高度
                // console.log($(window).scrollTop());
                // console.log($(document).height());
                // console.log($(window).height());
                let scrollTop = $(window).scrollTop();
                if (scrollTop > 250) {
                    $('.sort').css({ 'display': 'block' });
                } else {
                    $('.sort').css({ 'display': 'none' });
                }
                if (scrollTop > 50) {
                    $('.header_nav').css({ 'height': '50px', 'line-height': '50px' });
                    $('.search').css({ 'display': 'none' });
                    $('.shousuo').css({ 'display': 'block' });
                } else {
                    $('.header_nav').css({ 'height': '70px', 'line-height': '70px' });
                    $('.search').css({ 'display': 'block' });
                    $('.shousuo').css({ 'display': 'none' });
                }
            });
        },
        // 左侧导航
        nav_left: function() {
            $('.nav_left>ul>li>a').on('click', function() {
                let top = $('.' + $(this).attr('title')).offset().top - 100;
                $('html,body').animate({
                    scrollTop: top
                }, 500);
                $(this).addClass("nav_active");
            });
            $(window).on('scroll', function() {
                let top = $(document).scrollTop() - 500;
                let i = Math.round(top / ($('.product-list-container').height() + 30));
                $('.nav_left>ul>li>a').removeClass('nav_active');
                $('.nav_left>ul>li>a>p').css({ 'display': 'block' });
                $('.nav_left>ul>li>a>em').css({ 'display': 'none' });
                $('.nav_left>ul>li>a:eq(' + i + ')').addClass('nav_active');
                $('.nav_left>ul>li>a:eq(' + i + ')>p').css({ 'display': 'none' });
                $('.nav_left>ul>li>a:eq(' + i + ')>em').css({ 'display': 'block' });

            });
            $(window).on('scroll resize', function() {
                // 如何判断滚动条拉到了底部
                // 滚动条已滚动的距离+窗口高度 === 文档高度
                // console.log($(window).scrollTop());
                // console.log($(document).height());
                // console.log($(window).height());
                let scrollTop = $(window).scrollTop();
                if (scrollTop > 400 && scrollTop < 6300) {
                    $('.nav_left').css({ 'display': 'block' });
                } else {
                    $('.nav_left').css({ 'display': 'none' });
                }
            });
        },
        // 秒杀倒计时
        timer: function() {
            setInterval(function() {
                let now = new Date();
                let futuerTime = new Date(2020, 6, 3, 0, 0, 0);
                let time = futuerTime - now;
                let s = time / 1000; // 将毫秒换算成秒
                let hour = parseInt(s % 86400 / 3600); // 小时
                hour = hour > 9 ? hour : "0" + hour;
                let min = parseInt(s % 3600 / 60); // 分钟
                min = min > 9 ? min : "0" + min;
                let sec = parseInt(s % 60); // 秒
                sec = sec > 9 ? sec : "0" + sec;
                $('.left-countdown-wrap>i:eq(0)').html(`${hour}`);
                $('.left-countdown-wrap>i:eq(1)').html(`${min}`);
                $('.left-countdown-wrap>i:eq(2)').html(`${sec}`);
            }, 1000);
        },
        // 秒杀选项卡
        tabs: function() {
            $('.middle-top>ul>li').on('click', function() {
                console.log(11111);
                let index = $('.middle-top>ul>li').index(this);
                $(this).addClass('actived').siblings().removeClass('actived');
                $('.flash-middle>div:not(.flash-middle>div:first)').eq(index).addClass('show').siblings().removeClass('show');
            });
        },
        // 登录
        login: function() {
            $('.login').on('click', function() {
                $('.ppMask').css({ 'display': 'block' });
                $('.ppWrapper').css({ 'display': 'block' });
            });
            $('.close').on('click', function() {
                $('.ppMask').css({ 'display': 'none' });
                $('.ppWrapper').css({ 'display': 'none' });
            })
        },
        // 图片懒加载
        lazyload: function() {
            $("img.lazy").lazyload({
                effect: "fadeIn"
            });
        }
    }


});