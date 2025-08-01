

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests.

lets take a look inside the 'src' folder

`config` --> In this folder anything and everything regarding any configurations or setup of a library will be done. for example: setting up 'dotenv' so that we can use the environment variables anywhere in a cleaner fashion. This is done in the 'server-config.js'. One more example can be to setup your logging library that can be prepare meaningful logs.

`routes` --> In the routes folder we will define all the routes of our application. Middlewares and controllers will be defined here. This is the core of our application. This is where we will define how our application will behave.

`middlewares` --> They are just going to intercept the incoming requests where we can write validators and authenticators.

`controllers` --> They are kind of last middleware as post them you call your business layer to execute the actual logic. And it will interact with services only.

`respositories` --> This folder is used to interact with the database. This is where we will define all the database operations. All the raw SQL queries will be written here including the ORM logic.

`services` --> Containes the business logic and interacts with repositories for database operations.

`utils` --> Contains helper methods error classes etc.

## setup the project

Go inside src folder and execute the command:
```
npx sequelize init

```

By executing this command you will get migrations and seeder folder along with a 'config.json' file. 

If you are setting up your development environment then weite the username of your db, password of your db and dialect mention whatever db you are using.

for example: If you are setting up test environment then you will write the username of your test db, password of your test db and dialect mention similarly for production environment also