/**
 * Created by nocoolyoyo on 2017/10/16.
 * 原生对象函数拓展
 */
//删除数组元素
Array.prototype.remove = function(val) {
    let index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};



//判断字符串是否是其中之一