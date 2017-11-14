
CREATE TABLE IF NOT EXISTS `metrix_service_line` (
 `id` int(3) NOT NULL AUTO_INCREMENT,
 `service_line` varchar(255) NOT NULL,
 PRIMARY KEY (`id`));
 
INSERT INTO metrix_service_line
(service_line)
VALUES
('Assurance Service'),
('Concept Designing and Prototyping'),
('Digital Solution'),
('Product and Software Engineering');