import express from "express";
import configExpress from "./config/express.js";
import routes from "./routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

configExpress(app);
routes(app);

app.listen(port, () => {
  console.log(`Server running on port: ${port}!`);
});
