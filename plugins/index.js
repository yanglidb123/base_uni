const $utilsArr = {};
const utilsArr = {};
const attr = { configurable: false, writable: true, enumerable: false };

const utils = require.context('./', false, /^(?!.*(index.js$)).*\.js$/);
utils.keys().forEach(fileName => {
    const config = utils(fileName);
    const name = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '');
    $utilsArr['$' + name] = {...attr, value: config.default || config};
    utilsArr[name] = {...attr, value: config.default || config};
});

export default {
    /**
     * 自定义方法
     * 组件内使用： this.$validator, this.$http
     * 全局使用： Vue.validator, Vue.http
     */
    install(Vue) {
        Object.defineProperties(Vue.prototype, {
            ...$utilsArr
        });

        Object.defineProperties(Vue, {
            ...utilsArr
        })
    }
}
