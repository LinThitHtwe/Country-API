import express, { Application, Request, Response, NextFunction } from "express";
import http from "http";
import router from "./routes/route";
import rateLimiterMiddleware from "./middleware/rateLimiterMiddleware";
import getFullUrl from "./middleware/getFullUrl";

const port = process.env.PORT || 3000;
const app: Application = express();

app.use(getFullUrl);
app.use(rateLimiterMiddleware);
app.use("/", router);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}`);
});
