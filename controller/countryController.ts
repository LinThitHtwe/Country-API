import { Request, Response } from "express";
import { Country } from "../types/country";
const countries = require("../data/countries.json");

const getAllCountries = (req: Request, res: Response) => {
  res.json(countries);
};

const getCountriesByContinent = (req: Request, res: Response) => {
  let continent = req.params.continentName.toLowerCase();

  switch (continent) {
    case "northamerica":
      continent = "north america";
      break;
    case "southamerica":
      continent = "south america";
      break;
    default:
  }

  const countriesByContinent = countries.filter((country: Country) => {
    if (Array.isArray(country.continent)) {
      return country.continent.some((c) => c.toLowerCase() === continent);
    }
  });

  res.json(countriesByContinent);
};

const getCountryDetail = async (req: Request, res: Response) => {
  try {
    const countryName = req.params.countryName;
    const countryDetail = await import(`../data/countries/${countryName}`);
    console.log("Imported country detail:", countryDetail);
    if (countryDetail) {
      return res.json(countryDetail.default);
    }

    return res.status(404).json({ error: "Country not found" });
  } catch (error) {
    console.error("Error fetching country detail:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  getAllCountries,
  getCountriesByContinent,
  getCountryDetail,
};
