import { Request, Response } from "express";

const generateGuideResponse = (
  req: Request,
  res: Response,
  path: string,
  paramName: string,
  urlName: string
) => {
  const fullUrl = req.fullUrl;
  const guide = {
    message: `Invalid. ${paramName} url should be like down below`,
    url: `${fullUrl}/countries/${path}/{${paramName}}`,
  };
  res.status(404).json(guide);
};

export default generateGuideResponse;
