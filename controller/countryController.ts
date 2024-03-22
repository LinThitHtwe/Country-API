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

const getCountriesBySovereignty = (req: Request, res: Response) => {
  let sovereignty = req.params.sovereignty.toLowerCase();
  switch (sovereignty) {
    case "un":
      sovereignty = "un member";
      break;
    default:
  }
  const countriesBySovereignty = countries.filter(
    (country: Country) => country.sovereignty.toLowerCase() === sovereignty
  );
  return res.json(countriesBySovereignty);
};

const getCountryByISONumericCode = (req: Request, res: Response) => {
  const ISONumericCode = req.params.ISONumericCode;
  const countryByISONumericCode = countries.find(
    (country: Country) => country.ISOCodes.numeric === ISONumericCode
  );
  return res.json(countryByISONumericCode);
};

const getCountriesByISOCode = (req: Request, res: Response) => {
  const ISOCode = req.params.ISOCode.toUpperCase();
  let countriesByISOCode;
  if (ISOCode.length == 2) {
    countriesByISOCode = countries.find(
      (country: Country) =>
        country.ISOCodes.alpha2Code.toUpperCase() === ISOCode
    );
  }
  if (ISOCode.length == 3) {
    countriesByISOCode = countries.find(
      (country: Country) => country.ISOCodes.alpha3Code === ISOCode
    );
  }
  return res.json(countriesByISOCode);
};

const getCountriesByCurrencyCode = (req: Request, res: Response) => {
  const currencyCode = req.params.currencyCode.toUpperCase();
  const countriesByCurrencyCode = countries.filter(
    (country: Country) => country.currency.ISOCode === currencyCode
  );
  return res.json(countriesByCurrencyCode);
};

const getCountryDetail = async (req: Request, res: Response) => {
  try {
    const countryName = req.params.countryName;
    const countryDetail = await import(`../data/countries/${countryName}`);
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
  getCountriesBySovereignty,
  getCountriesByContinent,
  getCountryByISONumericCode,
  getCountriesByISOCode,
  getCountriesByCurrencyCode,
  getCountryDetail,
};
