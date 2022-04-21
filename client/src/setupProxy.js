const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
        ['/user', '/auth/*', '/logout', '/auth/github'],
        createProxyMiddleware({
            target: 'http://localhost:5555'
        })
    )
}