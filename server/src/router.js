const controller = require("./controller.js");

exports.router = function (app) {
  app.get("/mapList/:query", controller.crawling); // list
  app.get("/mapDetail/:query", controller.crawlingDetail); // detail
};
