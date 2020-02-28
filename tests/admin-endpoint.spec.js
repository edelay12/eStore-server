const knex = require("knex");
const app = require("../src/app");
const helpers = require("./test-helpers");

describe("Articles Endpoints", function() {
  let db;

  const { testProducts } = helpers.makeEstoreFixtures();

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DATABASE_URL
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("cleanup", () => helpers.cleanTables(db));

  afterEach("cleanup", () => helpers.cleanTables(db));

  describe(`GET /api/admin`, () => {
    context("Given there are products in the database", () => {
      beforeEach("insert products", () =>
        helpers.seedProductsTable(db, testProducts)
      );

      it("responds with 200 and all of the products", () => {
        const expectedProducts = testProducts;
        return supertest(app)
          .get("/api/admin")
          .expect(200, expectedProducts);
      });
    });
  });
});
