
-- Players list
CREATE TABLE `players` (
	`license` INT(11) NOT NULL,
	`name` VARCHAR(150) NOT NULL,
	`gender` CHAR(1) NOT NULL,
	`active` INT(1) NULL DEFAULT '1',
	PRIMARY KEY (`license`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;
