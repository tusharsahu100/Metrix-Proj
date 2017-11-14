
CREATE TABLE IF NOT EXISTS `metrix_engagement_model` (
 `id` int(3) NOT NULL AUTO_INCREMENT,
 `engagement_model` varchar(255) NOT NULL,
 PRIMARY KEY (`id`));
 
INSERT INTO metrix_engagement_model
(engagement_model)
VALUES
('Co-Sourced'),
('Managed'),
('Staffing'),
('UST-Engagement');