const filters = {};
const contextObj = require.context('.', false, /^(?!.*(index.js$)).*\.js$/);
contextObj.keys().forEach(fileName => {
    const config = contextObj(fileName);
    const name = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '');
    filters[name] = config.default || config;
});

export default {
    install(Vue) {
        Object.keys(filters).forEach(key => {
            Vue.filter(key, filters[key])
        });
    }
}
