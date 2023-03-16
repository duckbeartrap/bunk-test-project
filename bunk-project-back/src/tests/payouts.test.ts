import request from "supertest";
import app from "../app";

const exampleRequest = {
    expenses: [
        { "name": "Adriana", "amount": 5.75 },
        { "name": "Adriana", "amount": 5.75 },
        { "name": "Bao", "amount": 12 }
    ]
}

const exampleResponse = {
    total: 23.5,
    equalShare: 11.75,
    payouts: [
      {
        owes: "Adriana",
        owed: "Bao",
        amount: 0.25
      }
    ]
  }

describe("POST /payouts", () => {

  describe("when expenses array is in the request body", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).post("/payouts").send(exampleRequest)
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a list of settled expenses", async () => {
        const response = await request(app).post("/payouts").send(exampleRequest)
        expect(response.body).toEqual(exampleResponse)
    })
  })

  describe("when expenses array is missing from the request body", () => {
    test("should respond with a 400 status code", async () => {
        const response = await request(app).post("/payouts").send({})
        expect(response.statusCode).toBe(400)
    });
  })

})