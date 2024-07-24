import { Request, Response } from "express";
import {
  availableContinents,
  availableSovereignties,
} from "../constants/constant";

const index = (req: Request, res: Response) => {
  const fullUrl = req.fullUrl;

  const apiIndexGuide = {
    allCountriesUrl: `${fullUrl}/all`,
    countriesByContinent: `${fullUrl}/continent/{continentName}`,
    countriesBySovereignty: `${fullUrl}/sovereignty/{sovereigntyName}`,
    countryByISONumericCode: `${fullUrl}/isocode/numeric/{ISONumericCode}`,
    countryByISOCode: `${fullUrl}/isocode/{ISOCode}`,
    countriesByCurrencyCode: `${fullUrl}/currency/{currencyCode}`,
    countryByTopLevelDomain: `${fullUrl}/topLevelDomain/{topLevelDomain}`,
    countriesByDialingCode: `${fullUrl}/dialingCode/{dialingCode}`,
  };

  res.json(apiIndexGuide);
};

const continent = (_req: Request, res: Response) => {
  const apiContinentGuide = {
    message: "Continent should be one of the following",
    availableContinents,
  };
  res.status(404).json(apiContinentGuide);
};

const sovereignty = (_req: Request, res: Response) => {
  const apiSovereigntyGuide = {
    message: "Sovereignty should be one of the following",
    availableSovereignties,
  };
  res.status(404).json(apiSovereigntyGuide);
};

export default {
  index,
  continent,
  sovereignty,
};
