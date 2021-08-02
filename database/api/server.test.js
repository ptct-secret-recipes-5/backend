const supertest = require("supertest");
const server = require("./server");

const db = require("../db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeAll(async () => {
  await db("recipes").truncate();
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("recipes endpoints", () => {
  describe("[GET]/api/recipes", () => {
    it("returns all recipes", async () => {
      const res = await supertest(server).get("/api/recipes");
      expect(res.body).toHaveLength(5);
    });
    it("responses with a 200 OK", async () => {
      const res = await supertest(server).get("./api/recipes");
      expect(res.status).toBe(200);
    });
  });
});
