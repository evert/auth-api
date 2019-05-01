SET NAMES utf8mb4;
START TRANSACTION;

INSERT INTO changelog VALUES (23, UNIX_TIMESTAMP());

CREATE TABLE server_settings (
  setting VARCHAR(200) NOT NULL PRIMARY KEY,
  value VARCHAR(2000)
); 

COMMIT;
