/*
* 页面辅助方法类
*
* created by nocoolyoyo on 2017/10/16
*
* */

let Sup = {};


//打开窗口方法
Sup.openFrame = (obj)=>{
    if(typeof obj === "undefined"){
        return ;
    }
    //如果传入参数为字符串，则是默认用url方式打开页面
    if(typeof obj === "string"){
        if(/[a-zA-z]+:\/\/[^\s]*/.test(obj)) {
            //打开iframe外链,
            return
        }
        obj = obj.split("?");
        //根据url头是否带/，则表明是详情页，取出详情页D的ID
        if(/\//.test(obj)){
            if（）



        }else{

        }
        // let obj = Sup.deserializeUrl(obj);
        return ;
    }
    //如果传入参数为对象，则默认是以name , id方式打开一个新页面
    if(typeof obj === "object"){
        //如果name中带/，则表明是详情页，取出详情页D的ID
        if(/\//.test(obj)){

        }else{

        }
    }
};
//反序列化url返回参数
Sup.deserializeUrl = (url="")=>{
    let obj = url.split("?");
    let params = (()=>{
        let tempPramas = {};
        obj[1].split("&").forEach((value)=> {
            let tempObj = value.split("=");
            tempPramas[tempObj[0]] = tempObj[1];
        });
        return tempPramas;
    })();

    return {
        params: params
    }
};


export default Sup;