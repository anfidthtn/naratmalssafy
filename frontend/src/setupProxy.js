const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://나랏말싸피.com",
      changeOrigin: true,
      // pathRewrite: {
      //   "^/api": "/",
      // },
    })
  );
};
