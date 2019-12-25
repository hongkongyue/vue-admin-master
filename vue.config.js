module.exports = {
    publicPath: '/',
    assetsDir: 'static',

    productionSourceMap: false,
    devServer: {
        open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}