// Add this to your React app's setup, like in setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/api', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true }));
};
