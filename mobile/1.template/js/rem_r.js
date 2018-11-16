/**
 * MobileWeb 页面适配助手， 该 js 应在 head 中尽早引入，减少重绘。
 *
 * 页面写死 <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">；
 * 唯一需要配置的参数为“视觉设计宽度“，于 HTML 标签的 data-design-width 值，默认 750；
 * 该方法会在 HTML 标签上设置 data-dpr=[dpr] 属性，可用于特殊适配；
 * 暴露全局方法 px2rem 用于 js 中尺寸相关调用；
 * 对应 css 开发，任何弹性尺寸均使用 rem 单位，rem 值为 视觉设计宽度 / 100;
 */
(function(win, doc) {
    var docEl = doc.documentElement,
        designWidth = docEl.dataset.designWidth || 750,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        ppr;

    // ios 下标记 dpr
    if ( /iphone|ipod|ipad/gi.test(navigator.userAgent) ) {
        docEl.classList.add('iosx' + win.devicePixelRatio);
    }

    // 更新 rem
    var updateREM = function() {
        var width = Math.min(docEl.clientWidth, designWidth);

        ppr = width / designWidth * 100;
        docEl.style.fontSize = ppr + 'px';
    };
    updateREM();

    // 全局方法，px 转 rem
    win.px2rem = function(px) {
        return parseFloat(px) / 100;
    };

    win.rem2px = function(rem) {
        return parseFloat(rem) * ppr;
    };

    win.addEventListener(resizeEvt, updateREM, false);

})(window, document);


//cookie
function setCookie(name, value, iDay){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate;
}
function getCookie(name){
    var arr = document.cookie.split('; ');
    var i = 0;
    for(i = 0;i < arr.length;i++) {
        var arr2 = arr[i].split('=');

        if(arr2[0] == name)
        {
            var getC = decodeURIComponent(arr2[1]);
            return getC;
        }
    }
    return '';
}
function removeCookie(name) {
    setCookie(name, '1', -1);
}


function ifUndefine(str){
    if(typeof(str)=="undefined"){
        return "";
    }else{
        return str;
    }
}


var browser = {
    versions : function() {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
            trident : u.indexOf('Trident') > -1, //IE内核
            presto : u.indexOf('Presto') > -1, //opera内核
            webKit : u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko : u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile : !!u.match(/AppleWebKit.*Mobile.*/)
            || !!u.match(/AppleWebKit/), //是否为移动终端
            ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone : u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp : u.indexOf('Safari') == -1,//是否web应该程序，没有头部与底部
            google:u.indexOf('Chrome')>-1
        };
    }(),
}

//document.writeln(" 是否为移动终端: "+browser.versions.mobile);


