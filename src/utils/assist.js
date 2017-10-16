/*
* 页面辅助方法类
*
* created by nocoolyoyo on 2017/10/16
*
* */

//反序列化url返回参数
function deserializeUrl  (url = ""){
    let obj = url.split("?");
    let params = ()=>{
        let tempPramas = {};
        obj[1].split("&").forEach((value)=> {
            let tempObj = value.split("=");
            tempPramas[tempObj[0]] = tempObj[1];
        });
        return tempPramas;
    };

    return params();
}

//判断是否是url
export function isUrl  (url = false) {
    if(typeof url !== "string")
        return false;
    return /[a-zA-z]+:\/\/[^\s]*/.test(url);
}


