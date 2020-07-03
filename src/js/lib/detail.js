let baseUrl = "http://localhost/H5-study/week5/day34/lenovo.com"; //基础路径

define(['jquery', 'lazyload'], function($, lazyload) {
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
        // 选项卡
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
        // 右侧导航和头部导航
        nva_right: function() {
            $(window).on('scroll resize', function() {
                // 如何判断滚动条拉到了底部
                // 滚动条已滚动的距离+窗口高度 === 文档高度
                // console.log($(window).scrollTop());
                // console.log($(document).height());
                // console.log($(window).height());
                let scrollTop = $(window).scrollTop();
                if (scrollTop > 180) {
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
        //图片懒加载
        lazyload: function() {
            $("img.lazy").lazyload({
                effect: "fadeIn"
            });
        }
    }


});