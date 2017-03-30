mvn install:install-file -DgroupId=com.ibm.db2 -DartifactId=db2jcc_license_cisuz -Dversion=8.1.1 -Dpackaging=jar "-Dfile=C:\Users\20597\Downloads\Db2JdbcDriver\db2jcc4.jar"


create table test.employee2(id int NOT NUll Primary KEY, name varchar(50),jobrole varchar(30),joindate date,salary double)

insert into test.employee2(id,name) values (1,'kk')

ALTER TABLE test.employee ADD CONSTRAINT NOT NULL ADD PRIMARY KEY (ID)
db2 list applications for database test show detail
insert into test.employee2(id,name)values(221,'gg')



/usr/local/tomcat7/webapps
./catalina.sh jpda start
This conversation is being saved in your Outlook Inbox folder./home/zeas/zeas/databridge-0.0.1-SNAPSHOT
nohup ./start_zeas.sh  &


zeas/Zeas@2016
./usr/local/tomcat7/webapps
./catalina.sh jpda start
./home/zeas/zeas/databridge-0.0.1-SNAPSHOT
nohup ./start_zeas.sh  &



sqoop import --connect jdbc:db2://10.6.186.5/test --username db2inst1 -P --table EMPLOYEE --hive-import --hive-table test.productinfo -m 1

sqoop import --driver com.ibm.db2.jcc.DB2Jcc --connect jdbc:db2://10.6.186.5:50000/test --username db2inst1 -password db2inst1  --table test.EMPLOYEE --target-dir /tmp/test1/ -m 1
sqoop import --connect jdbc:db2://10.6.186.5:50000/test --username db2inst1 -password db2inst1  --table test.EMPLOYEE --target-dir /tmp/test2/ -m 1


use dbname while creating sqoop statment line 136 in sqoopimport


sqoop import  --driver com.ibm.db2.jcc.DB2Jcc --connect jdbc:db2://10.6.186.5:50000/test --username db2inst1 --password db2inst1 --table test.EMPLOYEE2 --columns ID,NAME --split-by ID --target-dir /user/zeas/admin/qq//qq/test/EMPLOYEE2/$(date +%Y_%m_%dT%H_%M_%S)




####ITC-TMD#####
scraper D:\deploymentFinal\scripts\..\ D:\deploymentFinal\scripts\..\logs\url_scraper_log_manual_run.txt


Rajendra Manjunath
12:36 PM
db2inst1
50k
10.6.186.5

mvn clean install -s dev-settings.xml -P Local

select * from test.employee

how to add external jar from local to maven

select TABNAME from syscat.tables where tabschema = 'test'

select name from syscat.tables where creator='test'

select name from syscat.tables where tabschema='test'
select * from syscat.tables where  type = 'T' AND tabschema='test'

		String QUERY4="select tabname from syscat.tables where owner = 'DB2INST1' and tabschema='test'";
select tabname from syscat.tables where tabschema='test'






CREATE TABLE IF NOT EXISTS txns ( eid int, name String,salary String, destination String) ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' STORED AS TEXTFILE;
LOAD DATA INPATH '/user/20597/hive/txns' INTO TABLE txns;

Load data moves file from that location
create external table ext_sample(myfields string) location '/user/20597/hive/txns';

Location:               hdfs://zlab-physrv1:8020/apps/hive/warehouse/test.db/ext_sample2





############ SQOOP IMPORT.sh
select PERSON_ID, GIVEN_NAME, FAMILY_NAME, TITLE, BIRTH_DATE from people WHERE rownum < 10001

source ~/.bash_profile
sqlplus / as sysdba
conn ZEAS/ZEAS


don't allow in between

sqoop import  --driver oracle.jdbc.driver.oracledriver --connect jdbc:oracle:thin:@10.6.186.5:1521:zeas --username ZEAS --password ZEAS --table people --columns PERSON_ID,GIVEN_NAME,FAMILY_NAME,TITLE,BIRTH_DATE -m 1 
 --target-dir /user/zeas/admin/oracle_12

 
 
sqoop import  --driver oracle.jdbc.driver.oracledriver --connect jdbc:oracle:thin:@//10.6.186.5:1521/ZEAS --username ZEAS --password ZEAS --query 'select * from  ZEAS.people where $CONDITIONS' --target-dir /tmp/ora1 --split-by PERSON_ID -m 1
 
sqoop import  --driver oracle.jdbc.driver.oracledriver --connect jdbc:oracle:thin:@10.6.186.5:1521:ZEAS --username ZEAS --password ZEAS --table PEOPLE --columns PERSON_ID,GIVEN_NAME,FAMILY_NAME,TITLE,BIRTH_DATE -m 1 --target-dir /user/zeas/admin/oracle1//oracle1/ZEAS/PEOPLE/
 
 sqoop import  --connect jdbc:oracle:thin:@10.6.186.5:1521:ZEAS --username ZEAS --password ZEAS  --table PEOPLE --columns PERSON_ID,GIVEN_NAME --target-dir /tmp/ora15 --split-by PERSON_ID -m 1