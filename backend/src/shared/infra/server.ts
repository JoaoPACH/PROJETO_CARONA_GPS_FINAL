import 'express-async-errors';
import { createTunnel } from "@mondaydotcomorg/tunnel";
import { db } from "./db/database";
import express, {Request, Response, NextFunction} from "express";
import AppError from "../errors/AppError";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser'
import routes from "./routes/index";

const subdomain = "projetocarona";

export const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use(cookieParser())
app.get("/", (req, res) => {
  res.send("👍👍👍👍👍👍");
});
app.use("/api", routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
);

(async () => {
  // DB Management method
  await db.sync({force: true});

  // API Method
  app.listen(3000);

  // Deployment method: mondaydotcomorg clone of localtunnel
  const tunnel = await createTunnel({ port: 3000, subdomain: subdomain });
  console.log("Opened Tunnel:", tunnel.url);
  tunnel.$close.subscribe(() => console.error("Closed Tunnel!"));
})();
