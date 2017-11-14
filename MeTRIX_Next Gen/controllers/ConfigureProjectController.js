/*
This controller have functionality to configure project in database
*/
var connection = include('schema/database');

/*
This function fetch project configuration values database and send JSON object in response
*/
var fetchProjectCofigurationDetails = function (req, res) {
  var resJSON = {};
  //get projects from database
  var queryString = `select proj_id, project_name, display_name from tbl_projects`;
  connection.query(queryString, function(error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      projArr = [];
      for (var i = 0; i < results.length; i++) {
        var data = {};
        data["projectId"] = results[i]["proj_id"];
        data["projectName"] = results[i]["project_name"];
        data["displayName"] = results[i]["display_name"];
        projArr.push(data);
      };
      resJSON["projects"] = projArr;
      console.log("Projects added successfully in response JSON");
    }
  });

  //get all projects categories from database
  var queryString = `select * from metrix_project_category`;
  connection.query(queryString, function(error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      categoryArr = [];
      for (var i = 0; i < results.length; i++) {
        categoryArr.push(results[i]["project_category"]);
      };
      resJSON["category"] = categoryArr;
      console.log("Projects category added successfully in response JSON");
    }
  });

  //get all project methodology from database
  var queryString = `select * from metrix_project_methodology`;
  connection.query(queryString, function(error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      methodologyArr = [];
      for (var i = 0; i < results.length; i++) {
        methodologyArr.push(results[i]["project_methodology"]);
      };
      resJSON["methodology"] = methodologyArr;
      console.log("Projects methodology added successfully in response JSON");
    }
  });

  // get all serviceLines from database
  var queryString = `select * from metrix_service_line`;
  connection.query(queryString, function(error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      serviceLineArr = [];
      for (var i = 0; i < results.length; i++) {
        serviceLineArr.push(results[i]["service_line"]);
      };
      resJSON["serviceLine"] = serviceLineArr;
      console.log("Projects serviceLine added successfully in response JSON");
    }
  });

  // get all engagementModels from dtabase
  var queryString = `select * from metrix_engagement_model`;
  connection.query(queryString, function(error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      engagementModelArr = [];
      for (var i = 0; i < results.length; i++) {
        engagementModelArr.push(results[i]["engagement_model"]);
      };
      resJSON["engagementModel"] = engagementModelArr;
      console.log("Projects engagementModel added successfully in response JSON");
    }
  });

  // get all pricingModels from database
  var queryString = `select * from metrix_pricing_model`;
  connection.query(queryString, function(error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      pricingModelArr = [];
      for (var i = 0; i < results.length; i++) {
        pricingModelArr.push(results[i]["pricing_model"]);
      };
      resJSON["pricingModel"] = pricingModelArr;
      console.log("Projects pricingModel added successfully in response JSON");
      res.send(resJSON);
      console.log("Response JOSN sent.");
    }
  });
}

/*
This function add takes project configuration values from request and update in database
*/
var addProjectCofigurationDetails = function (req, res) {
  var resJson = {};
  var proj_id = req.body.proj_id;
  var start_date = req.body.start_date;
  var end_date = req.body.end_date;
  var proj_category = req.body.proj_category;
  var proj_methodology = req.body.proj_methodology;
  var service_line = req.body.service_line;
  var engagement_model = req.body.engagement_model;
  var pricing_model = req.body.pricing_model;
  var proj_domain = req.body.proj_domain;

  if (!(proj_id | start_date | end_date | proj_category | proj_methodology | service_line | engagement_model | pricing_model | proj_domain)) {
    resJson = {
      "success": false,
      "error": {
        "code": 404,
        "message": "Missing parameters found in input JSON."
      }
    };
    res.send(resJson);
    console.log("Missing parameters found in input, error response JSON sent");
  } else {
    var queryString = `INSERT INTO metrix_project_details (proj_id, start_date, end_date, proj_category, proj_methodology, service_line, engagement_model, pricing_model, proj_domain) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(queryString, [proj_id, start_date, end_date, proj_category, proj_methodology, service_line, engagement_model, pricing_model, proj_domain], function(error, results, fields) {
      if (error) {
        console.log("error occured "+error);
        resJson = {
          "success": false,
          "error": {
            "code": 404,
            "message": "Database error occured in updating project configuration."
          }
        };
        res.send(resJson);
        console.log("Database error occured, error response JSON sent.");
      } else {
        resJson = {
          "success": true,
          "payload": {
            message: "Project configuration added successfully."
          }
        };
        res.send(resJson);
        console.log("Project configuration added successfully, response JSON sent.");
      }
    });
  }
}//end configureProject

//export the fetch and add project config functions
module.exports.FetchProjectConfig = fetchProjectCofigurationDetails;
module.exports.ConfigureProject =  addProjectCofigurationDetails;
