// 本地运行配置代理
const Env = require('./env.js');

module.exports = {
    devServer: {
        proxy: {
            '/test_api': {
                target: Env.base_url,
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/test_api': '/'
                }
            },
        }
    },
};
