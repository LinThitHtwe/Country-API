import { Request, Response } from "express";
import { Country } from "../types/country";
import { availableContinents, sovereigntyMapping } from "../constants/constant";
const countries = require("../data/countries.json");

const getAllCountries = (_req: Request, res: Response) => {
  res.json(countries);
};

const getCountriesByContinent = (req: Request, res: Response) => {
  const continentInput = req.params.continentName
    .toLowerCase()
    .replace(/\s+/g, "");

  const countriesByContinent = countries.filter((country: Country) => {
    if (Array.isArray(country.continent)) {
      return country.continent.some((c) => {
        const standardizedContinent = c.toLowerCase().replace(/\s+/g, "");
        return standardizedContinent === continentInput;
      });
    }
    return false;
  });

  if (countriesByContinent.length == 0) {
    const apiContinentGuide = {
      message: "Continent Should be one of these",
      availableContinents,
    };
    res.json(apiContinentGuide);
  }

  res.json(countriesByContinent);
};

const getCountriesBySovereignty = (req: Request, res: Response) => {
  let sovereigntyInput = req.params.sovereignty
    .toLowerCase()
    .replace(/\s+/g, "");

  sovereigntyInput = sovereigntyMapping[sovereigntyInput] || sovereigntyInput;

  const countriesBySovereignty = countries.filter((country: Country) => {
    const standardizedSovereignty = country.sovereignty
      .toLowerCase()
      .replace(/\s+/g, "");
    return standardizedSovereignty === sovereigntyInput;
  });

  return res.json(countriesBySovereignty);
};

const getCountryByISONumericCode = (req: Request, res: Response) => {
  const ISONumericCode = req.params.ISONumericCode;
  if (ISONumericCode.length != 3) {
    res.status(400).json({ message: "Invalid ISOCode Numeric length" });
  }

  const countryByISONumericCode = countries.find(
    (country: Country) => country.ISOCodes.numeric === ISONumericCode
  );
  return res.json(countryByISONumericCode);
};

const getCountryByISOCode = (req: Request, res: Response) => {
  const ISOCode = req.params.ISOCode.toUpperCase();

  if (ISOCode.length !== 2 && ISOCode.length !== 3) {
    return res.status(400).json({ message: "Invalid ISOCode length" });
  }

  const responseCountry = countries.find(
    (country: Country) =>
      country.ISOCodes.alpha2Code?.toUpperCase() === ISOCode ||
      country.ISOCodes.alpha3Code?.toUpperCase() === ISOCode
  );

  if (!responseCountry) {
    return res.status(404).json({ message: "Country not found" });
  }

  return res.json(responseCountry);
};

const getCountriesByCurrencyCode = (req: Request, res: Response) => {
  const currencyCode = req.params.currencyCode.toUpperCase();
  const countriesByCurrencyCode = countries.filter(
    (country: Country) => country.currency.ISOCode === currencyCode
  );
  return res.json(countriesByCurrencyCode);
};

const getCountryByTopLevelDomain = (req: Request, res: Response) => {
  let topLevelDomain = req.params.topLevelDomain;

  if (!topLevelDomain.startsWith(".")) {
    topLevelDomain = "." + topLevelDomain;
  }

  if (topLevelDomain.length != 3) {
    return res.status(400).json({ message: "Invalid topLevelDomain length" });
  }

  const countryByTopLevelDomain = countries.find(
    (country: Country) =>
      country.topLevelDomain.toLowerCase() === topLevelDomain.toLowerCase()
  );

  if (!countryByTopLevelDomain) {
    return res.status(404).json({ message: "Country not found" });
  }

  return res.json(countryByTopLevelDomain);
};

const getCountriesByDialingCode = (req: Request, res: Response) => {
  let dialingCode = req.params.dialingCode;

  if (!dialingCode.startsWith("+")) {
    dialingCode = "+" + dialingCode;
  }

  const countriesByDialingCode = countries.filter(
    (country: Country) => country.dialingCode == dialingCode
  );

  return res.json(countriesByDialingCode);
};

export default {
  getAllCountries,
  getCountriesBySovereignty,
  getCountriesByContinent,
  getCountryByISONumericCode,
  getCountryByISOCode,
  getCountriesByCurrencyCode,
  getCountryByTopLevelDomain,
  getCountriesByDialingCode,
};
