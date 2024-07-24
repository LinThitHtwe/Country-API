import request from "supertest";
import express from "express";
import countryController from "../controller/countryController";
import { availableContinents } from "../constants/constant";

const app = express();
app.use(express.json());
app.get("/countries", countryController.getAllCountries);
app.get(
  "/countries/continent/:continentName",
  countryController.getCountriesByContinent
);
app.get(
  "/countries/sovereignty/:sovereignty",
  countryController.getCountriesBySovereignty
);
app.get(
  "/countries/isocode/numeric/:ISONumericCode",
  countryController.getCountryByISONumericCode
);
app.get("/countries/isocode/:ISOCode", countryController.getCountryByISOCode);
app.get(
  "/countries/currency/:currencyCode",
  countryController.getCountriesByCurrencyCode
);
app.get(
  "/countries/tld/:topLevelDomain",
  countryController.getCountryByTopLevelDomain
);
app.get(
  "/countries/dialingCode/:dialingCode",
  countryController.getCountriesByDialingCode
);

describe("Country Controller", () => {
  it("should return all countries", async () => {
    const response = await request(app).get("/countries");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should return countries by continent", async () => {
    const response = await request(app).get("/countries/continent/Europe");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should return available continents if no countries found by continent", async () => {
    const response = await request(app).get(
      "/countries/continent/InvalidContinent"
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Continent Should be one of these",
      availableContinents,
    });
  });

  it("should return countries by sovereignty", async () => {
    const response = await request(app).get("/countries/sovereignty/France");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should return a country by ISO numeric code", async () => {
    const response = await request(app).get("/countries/isocode/numeric/104");
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should return 400 for invalid ISO numeric code length", async () => {
    const response = await request(app).get("/countries/isocode/numeric/25");
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid ISOCode Numeric length");
  });

  it("should return a country by ISO code", async () => {
    const response = await request(app).get("/countries/isocode/MM");
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should return 400 for invalid ISO code length", async () => {
    const response = await request(app).get("/countries/isocode/FRAA");
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid ISOCode length");
  });

  it("should return countries by currency code", async () => {
    const response = await request(app).get("/countries/currency/EUR");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should return a country by top-level domain", async () => {
    const response = await request(app).get("/countries/tld/.fr");
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should return 400 for invalid top-level domain length", async () => {
    const response = await request(app).get("/countries/tld/.f");
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid topLevelDomain length");
  });

  it("should return countries by dialing code", async () => {
    const response = await request(app).get("/countries/dialingCode/+33");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
