//封装eventListener
// import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

/* 封裝 window addEventListener */
export const on = (function() {
    if (!isServer && document.addEventListener) {
        return function(element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    } else {
        return function(element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        };
    }
})();

/* 封裝 window removeEventListener */
export const off = (function() {
    if (!isServer && document.removeEventListener) {
        return function(element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    } else {
        return function(element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler);
            }
        };
    }
})();


/*封裝domReady */

export const beforeRender = function(VueModal,callback) {
    let injectStr = "domReady(this.$el,$(this.$el),this);";
    let funcString = VueModal.mounted.toString();
    console.log(funcString);
    funcString.substr(0,funcString.length-1);
    funcString += injectStr;
    console.log(funcString);
    VueModal.mounted = eval(funcString);
    return VueModal;
};
