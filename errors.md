14:25 $ psql -d pizza_dev -f ./db/seed.sql
You are now connected to database "pizza_dev" as user "triviso".
psql:./db/seed.sql:3: ERROR:  relation "pizza" does not exist
LINE 1: DELETE FROM pizza;

psql:./db/seed.sql:40: ERROR:  relation "pizza" does not exist
LINE 1: INSERT INTO pizza (flavor, description, location) VALUES

ERROR: there is no parameter $1

/Users/triviso/Desktop/code/wdi/unit02/hw/Express-MODELS-homework/pizza-express/models/pizza.js:20
    makeOne(pizzaData){

TypeError: db.many is not a function
    at Object.findAll (/Users/triviso/Desktop/code/wdi/unit02/hw/Express-MODELS-homework/pizza-express/models/pizza.js:6:19)
