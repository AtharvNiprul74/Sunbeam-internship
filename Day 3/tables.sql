create database sunbeam_db;

use sunbeam_db;

Create table users (email varchar(50) PRIMARY KEY NOT NULL,password varchar(12) NOT NULL,role ENUM('admin','student') NOT NULL);
Create table courses(course_id INT PRIMARY KEY,course_name varchar(15),description varchar(50),fees INT,start_date date,end_date date,video_expire_days INT);
create table students(reg_no INT PRIMARY KEY,name varchar(15) NOT NULL,email varchar(50),course_id INT ,mobile_no INT NOT NULL,profile_pic BLOB , FOREIGN KEY(email) REFERENCES users(email),FOREIGN KEY(course_id) REFERENCES courses(course_id));
create table videos(video_id INT PRIMARY KEY,course_id INT,title varchar(20),description varchar(50),youtube_url varchar(50),added_at date,FOREIGN KEY (course_id) REFERENCES courses(course_id));

Insert into users values("atharv@gmail.com","atharv123",'student');
Insert into users values("kaushal@gmail.com","kaushal@123",'student');
Insert into users values("abc@gmail.com","abc@2075",'student');

Insert into courses values(1,'MERN Stack','Web Dev with Mern',30000,'2025-12-20','2026-1-20',30);
Insert into courses values(2,'Gen AI','Gen AI',40000,'2025-12-24','2026-1-24',20);
Insert into courses values(3,'Android','Android Dev',35000,'2025-12-20','2026-1-15',31);
Insert into courses values(4,'D.Science','DS with Pandas',38000,'2025-12-5','2026-1-5',31);
Insert into courses values(5,'Arduino','IoT using RP',32000,'2025-12-1','2026-1-5',35);


Insert into students(reg_no,name,email,course_id,mobile_no) values (1,'Atharv','atharv@gmail.com',1,934797394);
Insert into students(reg_no,name,email,course_id,mobile_no) values (2,'Kaushal','kaushal@gmail.com',2,928489294);
Insert into students(reg_no,name,email,course_id,mobile_no) values (3,'abc','abc@gmail.com',2,983909424);

Insert into videos values(1,1,'web dev using mern','begining with mern stack','https://youtube.com/mern',CURDATE());
Insert into videos values(2,2,'Start with Gen Ai','begining with Gen AI','https://youtube.com/genai',CURDATE());
Insert into videos values(3,3,'app dev','begining with android','https://youtube.com/app-dev',CURDATE());
Insert into videos values(4,1,'intro to JS','starting with java script','https://youtube.com/mern-js','2025-5-5');
Insert into videos values(5,2,'intro to basic math','starting with maths for AI','https://youtube.com/genai-math','2025-3-1');

--1.
Select * from courses where start_date > CURDATE();

--2.
Select s.reg_no,s.name,s.email,s.mobile_no,c.course_id,c.course_name from students s INNER JOIN courses c ON s.course_id=c.course_id;

--3.
Select s.reg_no,s.name,s.email,s.mobile_no,c.course_id,c.course_name,c.description,c.fees,c.start_date,c.end_date,c.video_expire_days
from students s INNER JOIN courses c ON s.course_id=c.course_id WHERE s.email = 'atharv@gmail.com';

--4.
Select c.course_id,c.course_name,c.start_date,c.end_date,c.video_expire_days,
v.video_id,v.title,v.added_at from students s INNER JOIN courses c on s.course_id = c.course_id 
LEFT JOIN videos v on c.course_id = v.course_id and DATE_ADD(v.added_at, INTERVAL c.video_expire_days DAY) >= CURDATE()
where s.email = 'atharv@gmail.com';