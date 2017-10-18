/*
* 页面辅助方法类
*
* created by nocoolyoyo on 2017/10/16
*
* */


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



