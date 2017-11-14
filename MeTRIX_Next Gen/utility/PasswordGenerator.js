/*
This module can be used to generate password and random string
*/
var generator = require('generate-password');

var password = function(length, includeNumbers) {
  return generator.generate({
    length: length,
    numbers: includeNumbers
  });
}

module.exports.GeneratePassword = password;
