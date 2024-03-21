import { Response } from "express";
const countries = require("../data/countries.json");

const getAllCountries = (req: Request, res: Response) => {
  res.json(countries);
};

export default {
  getAllCountries,
};
