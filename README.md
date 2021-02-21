I have tried to do all the validations that i could by Sun, 21 Feb 2020 12pm.

Modified sequelize config.json
Committed .env file for demo purpose only must not commit it
One .env file per environment i.e for Dev, Prod, Staging

Please enter mysql database credentials in .env file before run migrations

to run the migrations do the following steps
1. cd database
2. sequelize db:migrate
3. sequelize db:seed:all

In the seeds there are 2 users intialized
1. username "john" password "12345678"
2. username "joe" password "12345678"

please create a folder uploads/photos in the root folder of the project for photo uploads

Users "john" and "joe" have no photos so please create a new user to check photo upload.