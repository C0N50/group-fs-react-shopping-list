-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


-- DATABASE NAME : shopping_db

CREATE TABLE "shopping_table" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" DECIMAL (4,2),
    "unit" VARCHAR(20),
    "ispurchased" BOOLEAN DEFAULT FALSE
);


INSERT INTO "shopping_table" ("name", "quantity", "unit")
VALUES ('applesauce', '5', 'jars');