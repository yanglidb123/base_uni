/**
 *
 * 路由跳转
 * url 只能传递字符串
 * 注意: 本方法没有对跳转的回调函数进行封装
 */
const Router = {
    push(url) {
        (url[0] !== '/') && (url = '/' + url);
        uni.navigateTo({
            url,
        });
    },

    replace(url) {
        if (url[0] !== '/') url = '/' + url;
        uni.redirectTo({
            url,
        });
    },

    replaceAll(url) {
        if (url[0] !== '/') url = '/' + url;
        uni.reLaunch({
            url,
        });
    },

    pushTab(url) {
        if (/.*\/.*\?.*=.*/.test(url)) {
            throw new Error('uni.switchTab 跳转不能带参数');
        }
        if (url[0] !== '/') url = '/' + url;
        uni.switchTab({
            url,
        });
    },

    back(delta = 1) {
        uni.navigateBack({
            delta: delta,
        });
    }
};

export default Router;
