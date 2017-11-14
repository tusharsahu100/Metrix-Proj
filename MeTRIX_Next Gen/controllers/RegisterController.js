var connection = include('schema/database');
var md5 = require('md5');

module.exports.register = function(req, res) {
  var today = new Date();
  var users = {
    "name": req.body.name,
    "email": req.body.email,
    "password": md5(req.body.password),
    "created_at": today,
    "updated_at": today
  }

  connection.query('INSERT INTO TBL_USERS SET ?', users, function(error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'User registration not successful'
      });
    } else {
      res.json({
        status: true,
        data: results,
        message: 'user registration completed successfully'
      });
    }
  });

}
