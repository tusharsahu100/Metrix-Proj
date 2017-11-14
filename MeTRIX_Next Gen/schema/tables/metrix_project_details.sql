
CREATE TABLE IF NOT EXISTS metrix_project_details (
 id int(11) NOT NULL AUTO_INCREMENT,
 proj_id int(11) NOT NULL,
 start_date date DEFAULT NULL, 
 end_date date DEFAULT NULL, 
 proj_category varchar(255), 
 proj_methodology varchar(255),
 service_line varchar(255), 
 engagement_model varchar(255), 
 pricing_model varchar(255),
 proj_domain varchar(255), 
 PRIMARY KEY (id),
 FOREIGN KEY (proj_id) REFERENCES tbl_projects(proj_id)
);

