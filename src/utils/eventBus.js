/*
* created by nocoolyoyo on 2017/10/19
*  在未使用到vuex之前，簡單的事件管理用該方式
*  事件命名規則：
*       全局事件自定命名
*       窗口事件以 “frm_*****”方式命名“
*               指定窗口以 “frame-窗口名_**”方式命名“
*       組件事件以 “comp_*****”方式命名“
*               指定組件以 “comp-組件名_**”方式命名“
*
* */
import Vue from 'vue';
let EventBus = new Vue();

Object.defineProperties(EventBus, {
    on: {
        get: function() {
            return this.$on;
        }
    },
    once: {
        get: function() {
            return this.$once;
        }
    },
    off: {
        get: function() {
            return this.$off;
        }
    },
    emit: {
        get: function() {
            return this.$emit;
        }
    }
});

// Vue.EventBus = EventBus;
//
// Object.defineProperty(Vue.prototype, '$bus', {
//     get: function() {
//         return EventBus;
//     }
// });
export default EventBus;