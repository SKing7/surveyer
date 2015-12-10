var request = require('request');
function fetch(url) {
    return new Promise(function (resolve, reject) {
      request(url, function (error, response, body) {
        if (!error && (response.statusCode >= 200 && response.statusCode < 300)) {
          resolve(body);
        } else {
          reject(error);
        }
      });
    });
}
module.exports = fetch;
