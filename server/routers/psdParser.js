var request = require('request');
var path = require('path');
module.exports = {
  init: function (router) {
    router.get('/get/psd', this.psdGetter);
  },
  psdGetter: function (req, res) {
    var query = req.query;
    var fileAbsUrl = path.join('/Users/liuzhe/dev/res', query.url);
    var PSD = require('psd');
    var psd = PSD.fromFile(fileAbsUrl);
    psd.parse();
    res.send(psd.tree().export());
  }
};
