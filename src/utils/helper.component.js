/**
 * Created by nocoolyoyo on 2017/10/16.
 * vue组件调度包
 */


import Vue from "vue";
import FRAME from "../page/frame/maif"
import COMPONENT from "../page/frame/maif"
define(["Vue", "helper", "src/component/_component", "component/commonComp"], function (Vue, helper, config) {
    var v = {
        _useList: {}
    };

    var component = {};
    component.USING_LOADING = config.USING_LOADING;

    /**
     * 初始化组件配置
     */
    component.config = (function () {
        var comp, k, i, conf = {};
        for(k in config.COMPONENT){
            comp = config.COMPONENT[k];
            if(!(comp instanceof Array)){
                conf[comp] = k;
                continue;
            }

            for(i = 0; i < comp.length; i++){
                conf[comp[i]] = k;
            }
        }

        return conf;
    })();


    /**
     * 组件调度注册【注意：动态组件加载是异步，如果是一个列表页面中重复使用的动态组件，请务必使用require先将该包引入再构建界面，此时组件加载将变成同步的】
     * 加载顺序：
     * 1、未指定包名：
     * 1.1、默认从通用组件包加载
     * 1.2、通用组件包加载不到的，从CONST.COMPONENT配置中加载
     * 2、指定包名的：按照指定包名进行加载
     * @param componentName 组件名
     * @param packageName 组件所在的包名（可选，不传则使用CONST的配置
     */
    component.use = function (componentName, packageName) {
        if(!componentName || component.checkUsing(componentName, packageName)){
            return;
        }

        //未指定包名
        if(!packageName){
            v._useList[componentName] = true;
            var commonComp = require("component/commonComp");
            var comp = commonComp[componentName];
            if(comp){
                //默认从通用的组件包中加载
                Vue.component(componentName, comp);
                return;
            }

            //通用组件包中找不到组件，从CONST.COMPONENT配置中加载包名
            packageName = component.config[componentName];

            if(!packageName){
                //未找到指定包名
                if(!packageName){
                    helper.handler.triggerError(new helper.handler.Error({
                        handler: "component.use",
                        message: componentName + "加载错误"
                    }));

                    //组件不存在，加载错误的提示组件
                    Vue.component(componentName, commonComp["error-comm"]);
                    return;
                }
            }
        }

        //从指定包名加载组件
        Vue.component(componentName, function () {
            var comp = {
                component: new helper.Promise(function (resolve, reject) {
                    require([packageName], function (package) {
                        var comp = package[componentName];
                        if(component.USING_LOADING[componentName] && comp.template){
                            comp.template = '<transition enter-active-class="animated fadeIn">' + comp.template + '</transition>';
                        }
                        resolve(comp);
                    });
                }),
                error: commonComp["error-comm"]
            };

            if(component.USING_LOADING[componentName]){
                comp.loading = commonComp["loading-comm"];
            }

            return comp;
        });
    };

    /**
     * 检查组件是否已注册过
     * @param componentName
     * @param packageName
     * @return {boolean}
     */
    component.checkUsing = function (componentName, packageName) {
        var key = componentName;
        if(packageName){
            key = packageName + "." + componentName;
        }

        return !!v._useList[key];
    };

    return component;
});