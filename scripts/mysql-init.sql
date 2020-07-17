CREATE DATABASE IF NOT EXISTS tm_appsec_demo;

SET GLOBAL validate_password_length = 1;
SET GLOBAL validate_password_mixed_case_count = 0;
SET GLOBAL validate_password_number_count = 0;
SET GLOBAL validate_password_special_char_count = 0;

CREATE USER IF NOT EXISTS 'tm_db_user'@'localhost' IDENTIFIED BY 'tm_db_pass';

CREATE USER IF NOT EXISTS 'tm_db_user'@'%' IDENTIFIED BY 'tm_db_pass';

GRANT ALL ON tm_appsec_demo.* TO 'tm_db_user'@'localhost';

GRANT ALL ON tm_appsec_demo.* TO 'tm_db_user'@'%';

GRANT ALL ON tm_appsec_demo.* TO 'tm_db_user'@'localhost';

GRANT ALL ON tm_appsec_demo.* TO 'tm_db_user'@'%';