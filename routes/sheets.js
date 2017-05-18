var hatchet = require("hatchet");
var request = require("request");
var signup = require("./signup.js");

var petitionRoutes = function(url, formData, callback) {
  callback = callback || function() {};

  var promises = [];

  promises.push(new Promise((resolve, reject) => {
    hatchet.send("send_post_request", {
      url: url,
      json: true,
      form: formData
    }, function(err) {
      resolve(err);
    });
  }));

  if (transaction.signup) {
    promises.push(new Promise((resolve, reject) => {
      // Need to make sure this has the right URL
      signup(transaction, function(err) {
        resolve(err);
      });
    }));
  }

  Promise.all(promises).then((errors) => {
    var err = errors[0] || errors[1];
    callback(err);
  });
};

module.exports = petitionRoutes;
