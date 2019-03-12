const request = require("supertest");
const app = require("./app");
describe("Name of the group", () => {
  test("should return Allo", () => {
    request(app)
      .get("/")
      .expect("Allo")
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });
  });
  test("should return 'Thie is a watermelon'", async () => {
    await request(app)
      .get("/watermelon")
      .expect(200)
      .expect("Thie is a watermelon");
  });
});
