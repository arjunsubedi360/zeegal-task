import cors, { CorsOptions } from "cors";
import express from "express";

import { corsWhitelist, port } from "./config";
import * as errorHandler from './middlewares/errorHandler';
import logger from "./utils/logger";
import { MessageController } from "./controllers";

class Server {
  app: express.Application;
  constructor() {
    this.app = express();
    this.configuration();
  }

  private configuration() {
    this.app.set("port", port);
    this.app.use(cors(this.corsOptions));
    this.app.use(express.json());

    //Error Handler
    this.app.use(errorHandler.genericErrorHandler)
    this.app.use(errorHandler.methodNotAllowed)
    this.app.use(errorHandler.notFound)
  }

  private corsOptions: CorsOptions = {
    origin: function (origin: any, callback) {
      console.log("corsWhitelist.indexOf(origin) !== -1", corsWhitelist.indexOf(origin) !== -1)
      if (!origin || corsWhitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200,
    credentials: true,
  };


  public start() {
    MessageController.sendMessage()
    this.app.listen(this.app.get("port"), () =>
      logger.info(`App running on PORT ${this.app.get("port")}`)
    );
  }
}

const server = new Server();
server.start();
