const request = require("supertest");
const app = require("../src/app");

describe("Patients API", () => {
  test("GET /api/patients should return 200", async () => {
    const response = await request(app).get("/api/patients");
    expect(response.statusCode).toBe(200);
  });

  test("POST /api/patients should return 400 if required fields are missing", async () => {
    const response = await request(app)
      .post("/api/patients")
      .send({ fullName: "" });

    expect(response.statusCode).toBe(400);
  });

  test("POST /api/patients should create patient with valid data", async () => {
    const response = await request(app)
      .post("/api/patients")
      .send({
        fullName: "Иванов Иван Иванович",
        birthDate: "2000-01-01",
        phone: "+79990000000"
      });

    expect([200, 201]).toContain(response.statusCode);
  });
});
