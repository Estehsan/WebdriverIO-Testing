const { config: BaseConfig } = require("./wdio.conf");
exports.config = {
  ...BaseConfig,
  hostname: "localhost",
  port: 4444,
  path: "/wd/hub",
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--disable-dev-shm-usage", "--disable-gpu"],
      },
    },
    {
      maxInstances: 1,
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["--disable-gpu", "--disable-gpu"],
      },
    },
  ],
  services: [],
};
