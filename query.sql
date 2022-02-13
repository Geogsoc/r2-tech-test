\c recipes

SELECT * FROM recipes;
\c ingredients;


SELECT * FROM ingredients;

-- DROP DATABASE IF EXISTS testjj;
-- DROP DATABASE IF EXISTS testjj;


-- create table testjj
-- ( content jsonb);

-- insert into testjj values(
-- '[{
--  "id": "recipe-88",
--  "image": "http//www.images.com/12",
--  "instructions": "blend with oat milk and ice, sprinkle with salt",
--  "ingredients": [
--    { "name": "blueberries", "grams": 114 },
--    { "name": "coffee", "grams": 20 },
--    { "name": "kale", "grams": 48 }
--  ]
-- }, 
-- {
--  "id": "recipe-74",
--  "image": "http//www.images.com/2",
--  "instructions": "crush ingredients with mortar and pestle, mix  with whole milk, serve in bowl",
--  "ingredients": [
--    { "name": "coffee", "grams": 25 },
--    { "name": "lime", "grams": 140 },
--    { "name": "strawberries", "grams": 3 },
--    { "name": "apricots", "grams": 24 },
--    { "name": "kale", "grams": 50 }
--  ]
-- },
-- {
--  "id": "recipe-77",
--  "image": "http//www.images.com/25",
--  "instructions": "blend with oat milk and ice, sprinkle with   salt",
--  "ingredients": [
--    { "name": "coconut", "grams": 14 },
--    { "name": "coconut", "grams": 57 },
--    { "name": "lime", "grams": 153 },
--    { "name": "oat milk", "grams": 31 }
--  ]
-- }]');

-- select * from testjj;

-- create table parsedjj
-- (id serial primary key,
--  recipe_id varchar(10) unique,
--  imageurl varchar(50),
--  instructions text,
--  ingredients jsonb
--  );

--  INSERT INTO parsedjj
--             (
--                         recipe_id,
--                         imageurl,
--                         instructions,
--                         ingredients
--             )
-- SELECT id,
--        image,
--        instructions,
--        ingredients
-- FROM   testjj,
--        jsonb_to_recordset(content) AS x(id text,image text,instructions text,ingredients jsonb);
       
-- select * from parsedjj;
