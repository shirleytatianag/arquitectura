CREATE TABLE users (user_id serial, user_name varchar(30), user_password varchar(30), 
	constraint pk_user_id primary key (user_id));
	
INSERT INTO users (user_name,user_password ) values ('admin', 'admin')
