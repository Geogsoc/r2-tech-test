const supertest = require("supertest");
const server = require("../server");
const seed = require("../seeds/seed");
const data = require("../data/data.json");
const request = supertest(server);
const db = require("../db/index");
const app = require("../app");

beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  if (db.end) db.end();
});

test("/api", async () => {
  const { body } = await request.get("/api").expect(200);
  expect(body.message).toBe("ok");
});

test("request to /api/recipes returns all recipes", () => {
  return supertest(app)
    .get("/api/recipes")
    .expect(200)
    .then((res) => {
      expect(res.body.recipes).toBeInstanceOf(Array);
      expect(res.body.recipes).toHaveLength(100);
      res.body.recipes.forEach((recipe) => {
        expect(recipe).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            recipe_id: expect.any(String),
            imageurl: expect.any(String),
            instructions: expect.any(String),
            ingredients: expect.any(Array),
          })
        );
      });
    });
});

test("request to /api/recipes returns query of based on ingredients", () => {
  return supertest(app)
    .get("/api/recipes?ingredients=apples")
    .expect(200)
    .then((res) => {
      console.log(res.body.recipes);
      expect(res.body.recipes).toBeInstanceOf(Array);
    });
});
