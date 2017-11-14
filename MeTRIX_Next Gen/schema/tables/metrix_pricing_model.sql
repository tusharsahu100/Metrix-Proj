
CREATE TABLE IF NOT EXISTS `metrix_pricing_model` (
 `id` int(3) NOT NULL AUTO_INCREMENT,
 `pricing_model` varchar(255) NOT NULL,
 PRIMARY KEY (`id`));
 
INSERT INTO metrix_pricing_model
(pricing_model)
VALUES
('Fixed Cost'),
('T&M');

