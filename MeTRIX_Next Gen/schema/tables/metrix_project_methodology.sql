
CREATE TABLE  IF NOT EXISTS `metrix_project_methodology` (
 `id` int(3) NOT NULL AUTO_INCREMENT,
 `project_methodology` varchar(255) NOT NULL,
 PRIMARY KEY (`id`));
 
 
INSERT INTO metrix_project_methodology
(project_methodology)
VALUES
('Iterative'),
('Kanban'),
('Scrum'),
('Waterfall');
 