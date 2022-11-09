const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://xn--910b35kqzb51p93w.com",
      // target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/",
      },
    })
  );
};
