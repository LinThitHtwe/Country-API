const router = require("express").Router();
import countryController from "../controller/countryController";

router.get("/all", countryController.getAllCountries);
router.get(
  "/continent/:continentName",
  countryController.getCountriesByContinent
);
router.get(
  "/sovereignty/:sovereignty",
  countryController.getCountriesBySovereignty
);
router.get(
  "/countryCode/:countryCode",
  countryController.getCountryByCountryCode
);
router.get(
  "/isocode/numeric/:ISONumericCode",
  countryController.getCountryByISONumericCode
);
router.get("/isocode/:ISOCode", countryController.getCountriesByISOCode);
router.get(
  "/currency/:currencyCode",
  countryController.getCountriesByCurrencyCode
);
router.get("/country/:countryName", countryController.getCountryDetail);

export default router;
