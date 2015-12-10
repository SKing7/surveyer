var express = require('express');
var router = express.Router();
var glob = require('glob');

glob("routers/*.js", function (er, files) {
  files.forEach(function (v) {
    require('./' + v).init(router);
  });
})
module.exports = router;
