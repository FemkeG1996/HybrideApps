DROP TABLE IF EXISTS `landen`;

CREATE TABLE `landen` (
  `id` INTEGER PRIMARY KEY,
  `naam` varchar(125) DEFAULT NULL
);

INSERT INTO `landen`(`id`, `naam`)
VALUES
	(1,'Nederland'),
	(2,'Duitsland'),
	(3,'Zweden'),
	(4,'Rusland'),
	(5,'Italië');

DROP TABLE IF EXISTS `merken`;
CREATE TABLE `merken` (
  `id` INTEGER PRIMARY KEY,
  `naam` varchar(125),
  `land_id` INTEGER,
  `kleur` varchar(125) DEFAULT NULL,
  CONSTRAINT `merken_ibfk_1` FOREIGN KEY (`land_id`) REFERENCES `landen` (`id`)
);

INSERT INTO `merken` (`id`, `naam`, `land_id`, `kleur`)
VALUES
	(1,'BMW',2,'#f69'),
	(2,'Volkswagen',2,'#f9f'),
	(3,'Opel',2,'#69f'),
	(4,'Lada',4,'#f96'),
	(5,'Volvo',3,'#9f9'),
	(6,'Fiat',5,'#ff6');

DROP TABLE IF EXISTS `types`;

CREATE TABLE `types` (
  `id` INTEGER PRIMARY KEY,
  `merk_id` INTEGER NOT NULL,
  `naam` varchar(125) DEFAULT NULL,
  `kleur` varchar(25) DEFAULT '',
  `prijs` int(12) DEFAULT NULL,
  CONSTRAINT `types_ibfk_1` FOREIGN KEY (`merk_id`) REFERENCES `merken` (`id`)
);

INSERT INTO `types` (`id`, `merk_id`, `naam`, `kleur`, `prijs`)
VALUES
	(1,2,'Polo','rood',12000),
	(2,2,'Golf','geel',21000),
	(3,1,'Z3','rood',21005),
	(4,3,'Corsa','paars',9000),
	(5,2,'M3','rood',32000),
	(6,3,'Golf Plus','zwart',28000),
	(10,5,'V40','zwart',65000),
	(11,5,'XC90','wit',95000);

