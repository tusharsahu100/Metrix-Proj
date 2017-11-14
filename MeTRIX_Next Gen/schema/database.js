/*
This module fetch the connection details from database.properties and create
database connection object
*/

var mysql = require('mysql');
var PropertiesReader = require('properties-reader');
var path = require('path');

var properties = PropertiesReader(path.join(__dirname +'/../../conf', 'database.properties'));

var connection = mysql.createConnection({
  host  : properties.get('host'),
  user  : properties.get('user'),
  password  : properties.get('password'),
  database  : properties.get('database')
});

connection.connect(function(err){
  if(!err){
    console.log("Database is connected");
  }
  else {
    console.log("Error while connecting the database");
  }
});

module.exports = connection;
