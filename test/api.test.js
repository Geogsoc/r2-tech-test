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
      console.log(res.body.recipes);
      // expect(res.body.recipes).toBeInstanceOf(Array);
    });
});
