// console.log("Hello");

// const test = async (name: string): Promise<void> => {
//   const data = await import(`./data/asia/${name}`);
//   console.log("myanmar---", data);
// };

// test("myanmar");

import express, { Application } from "express";

import http from "http";
import router from "./routes/route";

const port = process.env.PORT || 3000;
const app: Application = express();
app.use("/", router);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}`);
});
