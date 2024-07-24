import { Request, Response, NextFunction } from "express";

const getFullUrl = (req: Request, _res: Response, next: NextFunction) => {
  const protocol = req.protocol;
  const host = req.get("host");
  req.fullUrl = `${protocol}://${host}`;
  next();
};

declare global {
  namespace Express {
    interface Request {
      fullUrl?: string;
    }
  }
}

export default getFullUrl;
