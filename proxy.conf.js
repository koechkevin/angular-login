
const PROXY_CONFIG = {
  "/api/*": {
    "target": "https://manage-sms.herokuapp.com",
    "secure": false,
    "logLevel": "debug",
    "pathRewrite": {},
    "changeOrigin": true,
    "bypass": function (req, res, proxyOptions) {
      req.headers["origin"] = 'https://manage-sms.herokuapp.com';
    },
  }
};

module.exports = PROXY_CONFIG;
