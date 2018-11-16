var winH = $(window).height();
hot = {
    fixLocation: [],//图片定位
    // preloadImg:[],//预加载
    swiperArr: [],//swiper 数组

};
// crollEle = '.hot',
scrollObj = hot;
//获取图片
getPics()

function getPics() {
    var obj = {
        pics: [
            {
                img: 'http://static.1sight.cn/web/mobile/large/image/1.png'
            }, {
                img: 'http://static.1sight.cn/web/mobile/large/image/2.jpg'
            },
            {
                img: 'http://static.1sight.cn/web/mobile/large/image/2.jpg'
            }, {
                img: 'http://static.1sight.cn/web/mobile/large/image/2.jpg'
            }, {
                img: 'http://static.1sight.cn/web/mobile/large/image/2.jpg'
            }, {
                img: 'http://static.1sight.cn/web/mobile/large/image/2.jpg'
            }, {
                img: 'http://static.1sight.cn/web/mobile/large/image/2.jpg'
            }, {
                img: 'http://static.1sight.cn/web/mobile/large/image/2.jpg'
            }, {
                img: 'http://static.1sight.cn/web/mobile/large/image/2.jpg'
            }, {
                img: 'http://static.1sight.cn/web/mobile/large/image/2.jpg'
            }, {
                img: 'http://static.1sight.cn/web/mobile/large/image/2.jpg'
            }, {
                img: 'http://static.1sight.cn/web/mobile/large/image/2.jpg'
            },
            {
                img: ' http://static.1sight.cn/web/mobile/large/image/align-items.png'
            }],
    };
    for (var i = 0; i < obj.pics.length; i++) {
        var pic_ = obj.pics[i];
        var src_ = pic_.img;
        var dom = '<div class="picItem" style="background-image: url(' + src_ + ');" data-src="' + src_ + '"></div>'
        $('#picContainer').append(dom)
        scrollObj.fixLocation.push(pic_.img); //用于图片定位的数组
    }
    // scrollObj.preloadImg = scrollObj.preloadImg.concat(obj.pics);
    scrollObj.swiperArr = scrollObj.swiperArr.concat(obj.pics);
}

function loadOnePic(ele) {
    var imgSrc_ = $(ele).attr('src');
    var img_ = new Image();
    img_.src = imgSrc_;
    img_.onload = function () {
        $(ele).parents('.swiper-slide').css('background', 'transparent');
        $(ele).attr('src', imgSrc_);
    }
}

$('.picItem').on('click', function () {
    //开启触摸
    $('.wrapper').on('touchmove', touchModal);
    var $this = $(this);
    var thisSrc = $this.attr('data-src') || $this.attr('src');
    var showIndex = scrollObj.fixLocation.indexOf(thisSrc);//判断首次出现的位置
    var showNum = scrollObj.fixLocation.length; //展示数量
    var add = showIndex, reduce = showIndex, oneOrTwo = 0, dom = '';
    dom = '<div class="swiper-slide">' +
        '<div class="slide_zoom_container" style="height: ' + winH + 'px">' +
        '<img class="swiper-lazy big_img_slide" data-src="' + scrollObj.swiperArr[showIndex].img + '" onload=loadOnePic(this)>' +
        '</div>' +
        '</div>';
    $('.imgShowSwiper .swiper-wrapper').append(dom);
    picShowSwiper = new Swiper('.imgShowSwiper', {
        centeredSlides: true,
        preloadImages: false,
        lazyLoading: true,
        observer: true,
        initialSlide: oneOrTwo,
        //初始化显示第一张
        onInit: function () {
            var father = $('.imgShowSwiper');
            var thisBigImg = $('.imgShowSwiper .swiper-slide-active .big_img_slide');
            touchImg(thisBigImg, father); //下拉或上拉  关闭预览
        },
        //过渡
        onSlideChangeStart: function () {
            var father = $('.imgShowSwiper');
            var thisBigImg = $('.imgShowSwiper .swiper-slide-active .big_img_slide');
            touchImg(thisBigImg, father); //下拉或上拉  关闭预览
        },
        //向左
        onSlidePrevEnd: function (swiper) {
            reduce--;
            if (reduce >= 0) {
                var dom = '<div class="swiper-slide">' +
                    '<div class="slide_zoom_container" style="height: ' + winH + 'px">' +
                    '<img class="swiper-lazy big_img_slide" data-src="' + scrollObj.swiperArr[reduce].img + '" onload=loadOnePic(this)>' +
                    '</div>' +
                    '</div>';
                picShowSwiper.prependSlide(dom);
                picShowSwiper.update(true);

            }
            var $this = $('.imgShowSwiper .swiper-slide-prev .slide_zoom_container');
            new RTP.PinchZoom($this, {});
        },
        //向右
        onSlideNextStart: function () {
            add++;
            if (add < showNum) {
                var dom =
                    '<div class="swiper-slide">' +
                    '<div class="slide_zoom_container" style="height: ' + winH + 'px">' +
                    '<img class="swiper-lazy big_img_slide" data-src="' + scrollObj.swiperArr[add].img + '" onload=loadOnePic(this)>' +
                    '</div>' +
                    '</div>';
                picShowSwiper.appendSlide(dom);
                picShowSwiper.update(true);

            }
            var $this = $('.imgShowSwiper .swiper-slide-next .slide_zoom_container');
            new RTP.PinchZoom($this, {});
        }

    });

    if (showIndex == 0 && showNum > 1) {
        add++;
        var dom = '<div class="swiper-slide">' +
            '<div class="slide_zoom_container" style="height: ' + winH + 'px">' +
            '<img class="swiper-lazy big_img_slide" data-src="' + scrollObj.swiperArr[add].img + '" onload=loadOnePic(this)>' +
            '</div>' +
            '</div>';
        picShowSwiper.appendSlide(dom);
        picShowSwiper.update(true);
    } else if (showIndex == showNum - 1 && showNum > 1) {
        reduce--;
        var dom = '<div class="swiper-slide">' +
            '<div class="slide_zoom_container" style="height: ' + winH + 'px">' +
            '<img class="swiper-lazy big_img_slide" data-src="' + scrollObj.swiperArr[reduce].img + '" onload=loadOnePic(this)>' +
            '</div>' +
            '</div>';
        picShowSwiper.prependSlide(dom);
        picShowSwiper.update(true);
    } else if (showIndex != 0 && showIndex != showNum - 1 && showNum > 2) {
        add++;
        reduce--;
        var domPrev = '<div class="swiper-slide">' +
            '<div class="slide_zoom_container" style="height: ' + winH + 'px">' +
            '<img class="swiper-lazy big_img_slide" data-src="' + scrollObj.swiperArr[reduce].img + '" onload=loadOnePic(this)>' +
            '</div>' +
            '</div>';
        picShowSwiper.prependSlide(domPrev);
        picShowSwiper.update(true);

        var domNext = '<div class="swiper-slide">' +
            '<div class="slide_zoom_container" style="height: ' + winH + 'px">' +
            '<img class="swiper-lazy big_img_slide" data-src="' + scrollObj.swiperArr[add].img + '" onload=loadOnePic(this)>' +
            '</div>' +
            '</div>';
        picShowSwiper.appendSlide(domNext);
        picShowSwiper.update(true);
    }

    $('#imgShowModal').fadeIn().find('.imgShowSwiper').fadeIn();

    $('.slide_zoom_container').each(function () {
        new RTP.PinchZoom($(this), {});
    })
})
