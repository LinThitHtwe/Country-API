const router = require("express").Router();
import countryController from "../controller/countryController";

router.get("/all", countryController.getAllCountries);

export default router;
