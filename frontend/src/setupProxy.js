const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // target: "http://xn--910b35kqzb51p93w.com",
      target: "http://localhost:8081",
      changeOrigin: true,
    })
  );
};

