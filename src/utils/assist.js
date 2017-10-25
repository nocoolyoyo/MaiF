/*
* 页面辅助方法类
*
* created by nocoolyoyo on 2017/10/16
*
* */


// 判断参数是否是其中之一
export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

//判断是否是url
export function isUrl  (url = false) {
    if(typeof url !== "string")
        return false;
    return /[a-zA-z]+:\/\/[^\s]*/.test(url);
}

//获取url中的url参数
export function getUrlParams(url = "") {
    let obj = url.split("?");
    let params = {};
    if(obj[1])
        obj[1].split("&").forEach((value)=> {
            let tempObj = value.split("=");
            params[tempObj[0]] = tempObj[1];
        });

    console.log(params);
    return params;
}

// For Modal scrollBar hidden
let cached;
export function getScrollBarSize (fresh) {
    if (isServer) return 0;
    if (fresh || cached === undefined) {
        const inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        const outer = document.createElement('div');
        const outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        const widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cached = widthContained - widthScroll;
    }
    return cached;
}


/*
* scrollTop滚动
*
* @params element {Object}    //滚动容器
* @params from {Number}    //滚动起始位置
* @params to {Number}    //滚动结束位置
* @params to {duration}    //滚动过度时间
* */
export function scrollTop(element, from = 0, to, duration = 500) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000/60);
            }
        );
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) return;

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        if (element === window) {
            window.scrollTo(d, d);
        } else {
            element.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}

//对象深度克隆
export function deepCopy(data) {
    const t = typeof data;
    console.log(typeof data);
    console.log(typeOf(data));
    let o;

    if (t === 'array') {
        o = [];
    } else if ( t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if ( t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}

//将传入的属性名转为驼峰
function camelCase(name) {
    let SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
    let MOZ_HACK_REGEXP = /^moz([A-Z])/;
    return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}


/*
* 获取节点的某个属性的值
* @params element {Object}    //节点
* @params styleName {String}    //属性名字
* */

export function getStyle (element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch(e) {
        return element.style[styleName];
    }
}

/*
* 根据传入的文件名获取文件的类型
* @param fileInfo {String}  传入的文件信息，可以是文件全名也可以是文件拓展名也可以是文件的二进制流文件
*
* */
export function getFileType(fileInfo) {
    let result = null;
    /*
    *   fixMe:这里的文件名字匹配可能不全，会慢慢完善
    *   toDo:补充二进制文件判断
    * */
    //二进制文件头信息的匹配组
    const bitMatchGroup = {
        image: "image",
        audio: "audio",
        video: "video",
        word: "application/msword",
        excel: "application/vnd.ms-excel",
        archive:	"application/zip",
    };

    //文件名的匹配组
    const nameMatchGroup = {
        image: /[jpeg|jpg|png|gif]/,    //图片
        audio: /[mp[0-9]|wav]/,         //音频
        video: /[3gp]/,                 //视频
        word: /[doc|docx]/,                   //word
        excel: /[xls|xlt|xlm|xlw|xlsx]/,        //excel
        ppt: /[ppt|pps|pot|pptx]/,           //ppt
        archive: /[tar|rar|zip]/,           //压缩文件
    };

    /*
     * 流文件判断处理
     * @prama bitHead {String} //文件信息头
     * @return fileType {String}
     * */
    const bitWorkFlow = function (bitHead) {

    };

    /*
     * 文件名处理
     * @prama fileExt {String} //文件后缀名
     * @return fileType {String}
     * */
    const nameWorkFlow = function (fileExt) {

    };

    /*主程
    * */
    function run () {
        fileInfo = fileInfo.toLowerCase();
        let ext = /\./.test(fileInfo) === true ?
                    fileInfo.split["."][1] :
                    fileInfo;

        for(let k in nameMatchGroup){
            if(ext.match(nameMatchGroup[k])){
                result = k;
                break;
            }
        }


        return result;
    }

    return run();
}



