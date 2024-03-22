const router = require("express").Router();
import countryController from "../controller/countryController";

router.get("/all", countryController.getAllCountries);
router.get(
  "/continent/:continentName",
  countryController.getCountriesByContinent
);
router.get("/country/:countryName", countryController.getCountryDetail);

export default router;
