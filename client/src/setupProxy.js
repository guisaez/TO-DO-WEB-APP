const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
        ['/user', '/auth/google', '/logout'],
        createProxyMiddleware({
            target: 'http://localhost:5555'
        })
    )
}