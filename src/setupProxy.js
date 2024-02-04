const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        ['/login', '/get-session', '/signup', '/friend', '/logout'],
        createProxyMiddleware({
            target: 'http://13.125.40.120:5001',
            changeOrigin: true,
        })
    )
}