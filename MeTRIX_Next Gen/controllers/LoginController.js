/*
This controller is use to Login and validate the user in System
*/
var connection = include('schema/database'); //require('../schema/database');
var md5 = require('md5');

module.exports.login = function(req, res) {

  var resJson = {};
  var email = req.body.email;
  var password = md5(req.body.password);
  var queryString = 'select u.*,ur.role_id from tbl_users as u left join tbl_user_roles as ur on u.user_id=ur.user_id where u.email = ? and u.password =?';
  connection.query(queryString, [email, password], function(error, results, fields) {
    if (error) {
      console.log("error occured "+error);
      resJson = {
        "success": false,
        "error": {
          "code": 404,
          "message": "Database error occured in validating user."
        }
      };
      res.send(resJson);
      console.log("Database error occured in validating, error response sent.");
    }
    else {
      if (results.length > 0) {

        resJson = {
          "success": true,
          "payload": {
            email: results[0].email,
            user_id: results[0].user_id,
            role_id: results[0].ROLE_ID,
            full_name: results[0].full_name,
            employee_id: results[0].employee_id,
            message: "Login successful."
          }
        };
        res.send(resJson);
        console.log("Response JSON sent.");
      }
      else {
        resJson = {
          "success": false,
          "error": {
            "code": 404,
            "message": "Username and/or Password Invalid"
          }
        };
        res.send(resJson);
        console.log("Username and/or Password Invalid, error response sent.");
      }
    }
  });
}
