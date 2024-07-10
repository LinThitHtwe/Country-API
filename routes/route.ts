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
  "/isocode/numeric/:ISONumericCode",
  countryController.getCountryByISONumericCode
);
router.get("/isocode/:ISOCode", countryController.getCountryByISOCode);
router.get(
  "/currency/:currencyCode",
  countryController.getCountriesByCurrencyCode
);
router.get(
  "/topLevelDomain/:topLevelDomain",
  countryController.getCountryByTopLevelDomain
);
router.get(
  "/dialingCode/:dialingCode",
  countryController.getCountriesByDialingCode
);

export default router;
