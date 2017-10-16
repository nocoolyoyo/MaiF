/*
* created by nocoolyoyo on 2017/10/16
*
*
* page静态页面注册列表
*
*
* 页面的url组织方式遵循restful设计，动词名词化依次简化为C(CREATE),R(READ),U(UPDATE),D(DELETE)，动词统一加在请求头
* 页面可以通过page的KEY值方式打开，但此时需要闯入对应的参数
* 只有当存在restful动词形式时候该页面才不唯一
*
* 所有类型的页面，同一个页面的下面name应该改成同一个
* objType：类型id，用于与服务端一一对应及接收推送的响应（通过helper.OBJ调用，程序将自动化生成此属性）
* name：helper.PAGE.XXX的具体注入名称
* label：类型名称
*
* */
const page = {
    "tab":                             {title: "标签页",             url: "tab"},
    "tab-detail":                 {title: "标签详情页面",  url: "tab-detail/:id"},
    "tab-detail-approve": {title: "新增标签详情",  url: "tab-detail-approve/:id"},
};



