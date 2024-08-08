import { Request, Response } from "express";
import {
  availableContinents,
  availableSovereignties,
} from "../constants/constant";
import generateGuideResponse from "../helper/generateGuideResponse";

const index = (req: Request, res: Response) => {
  const fullUrl = req.fullUrl;

  const apiIndexGuide = {
    allCountriesUrl: `${fullUrl}/countries/all`,
    countriesByContinent: `${fullUrl}/countries/continent/{continentName}`,
    countriesBySovereignty: `${fullUrl}/countries/sovereignty/{sovereigntyName}`,
    countryByISONumericCode: `${fullUrl}/countries/isocode/numeric/{ISONumericCode}`,
    countryByISOCode: `${fullUrl}/countries/isocode/{ISOCode}`,
    countriesByCurrencyCode: `${fullUrl}/countries/currency/{currencyCode}`,
    countryByTopLevelDomain: `${fullUrl}/countries/topLevelDomain/{topLevelDomain}`,
    countriesByDialingCode: `${fullUrl}/countries/dialingCode/{dialingCode}`,
  };

  res.json(apiIndexGuide);
};

const continent = (req: Request, res: Response) => {
  generateGuideResponse(req, res, "continent", "continentName", "Continent");
};

const sovereignty = (req: Request, res: Response) => {
  generateGuideResponse(
    req,
    res,
    "sovereignty",
    "sovereigntyName",
    "Sovereignty"
  );
};

const ISONumericCode = (req: Request, res: Response) => {
  generateGuideResponse(
    req,
    res,
    "isocode/numeric",
    "ISONumericCode",
    "ISO Numeric Code"
  );
};

const ISOCode = (req: Request, res: Response) => {
  generateGuideResponse(req, res, "isocode", "ISOCode", "ISOCode");
};

const currencyCode = (req: Request, res: Response) => {
  generateGuideResponse(req, res, "currency", "ISOCode", "Currency Code");
};

const topLevelDomain = (req: Request, res: Response) => {
  generateGuideResponse(
    req,
    res,
    "topLevelDomain",
    "topLevelDomain",
    "Top Level Domain"
  );
};

const dialingCode = (req: Request, res: Response) => {
  generateGuideResponse(req, res, "dialingCode", "dialingCode", "Dialing Code");
};

export default {
  index,
  continent,
  sovereignty,
  ISONumericCode,
  ISOCode,
  currencyCode,
  topLevelDomain,
  dialingCode,
};
