
CREATE TABLE IF NOT EXISTS `metrix_project_category` (
 `id` int(3) NOT NULL AUTO_INCREMENT,
 `project_category` varchar(255) NOT NULL,
 PRIMARY KEY (`id`));
 
INSERT INTO metrix_project_category
(project_category)
VALUES
('QA ONLY'),
('SDLC'),
('Staff Augmentation');