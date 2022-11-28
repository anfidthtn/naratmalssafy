const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://xn--910b35kqzb51p93w.com",
      changeOrigin: true,
    })
  );
};
