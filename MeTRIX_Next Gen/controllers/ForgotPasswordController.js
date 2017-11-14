/*
This controller handles forgot Password functionality
*/

var md5 = require('md5');
var path = require('path');
var nodemailer = require('nodemailer');
var connection = include('schema/database');
var PropertiesReader = require('properties-reader');
var generator = include('utility/PasswordGenerator');

module.exports.sendEmail = function(req, res) {
  try {
    //validate email id before generating password and send email
    var queryString = `select * from tbl_users where email=?`;
    connection.query(queryString, req.body.email, function(error, results, fields) {
      if (error) {
        console.log('Error occurred in validating Email Id:' + email);
        res.render('forgotPassword', {
          Message: 'Error occured in validating Email Id, please try later. '
        });
      } else {
        if (results.length > 0) {
          console.log('Email Validated Successfully for ' + results[0].full_name);
          //Generate the random password
          var password = generator.GeneratePassword(7, true);
          //use smtp settings from email.properties
          var properties = PropertiesReader(path.join(__dirname +'../../../conf', 'email.properties'));

          var transporter = nodemailer.createTransport({
            host: properties.get('host'),
            port: properties.get('port'),
            secure: properties.get('secure'), // true for 465, false for other ports
            auth: {
              user: properties.get('user'),
              pass: properties.get('pass'),
            },
            connectionTimeout: 10 * 60 * 1000, // 5 min
          });

          var htmlTemplate = `<p style="font-family: ‘Arial’, Georgia, sans-serif; font-weight: 400;">Dear ${results[0].full_name}, <br /><br />
          Your new password is: <strong> ${password} </strong> <br />
          You can change your password after login at Profile -> settings. <br /><br />
          Regards: <br />
          MeTRIX-Support <br />
          MeTRIX-Support@xpanxion.co.in
          </p>`

          var mailOptions = {
            from: properties.get('user'),
            to: req.body.email,
            subject: 'MeTRIX- New Password',
            html: htmlTemplate
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log('Unable to send email: ' + error);
              res.render('forgotPassword', {
                Message: 'Unable to send email.'
              });
            } else {
              var encryptPassword = md5(password);
              var queryString = `update tbl_users set password='${encryptpassword}' where email='${req.body.email}'`;
              connection.query(queryString, function(error, results, fields) {
                if (error) {
                  console.log('Database error occured while updating password: ' + error);
                  res.render('forgotPassword', {
                    Message: 'Error occured while updating password, please try later. '
                  });
                }
                else {
                  console.log('Password reset Successful');
                  console.log('Email sent: ' + info.response);
                  res.render('home', {
                    Message: 'The new password has been sent to your Email Id.'
                  });
                }
              });
            }
          });
        }//end if(results.length > 0)
        else {
          res.render('forgotPassword', {
            Message: 'Please enter a valid email address.'
          });
        }
      }
    });//end validate email
  } //try end
  catch (e) {
    console.log(e);
  }
} //end function sendEmail
