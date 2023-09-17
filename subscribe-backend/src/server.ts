import bodyParser from "body-parser";
import cors, { CorsOptions } from "cors";
import express, { Application } from "express";
import http from "http";
import { Channel, ConsumeMessage } from "amqplib";
import socketIO from "socket.io";

import { RabbitMQ, corsWhitelist } from "./config";
// import { RabbitMQConsumer } from "./consumers";
import { ExchangeEnum } from "./enums";

class App {
  private app: Application;
  private server: http.Server;
  private io: socketIO.Server;

  constructor() {
    this.app = express();
    this.server = new http.Server(this.app);
    this.io = new socketIO.Server(this.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
      path: "/socket.io",
      serveClient: true,
      connectTimeout: 30000,
    });

    this.io.on("connection", (socket: socketIO.Socket) => {
      console.log("a user connected : " + socket.id);

      // this.io.emit("send_message", { message: "Message from subscibe" });

      socket.on("disconnect", function () {
        console.log("socket disconnected : " + socket.id);
      });
    });

    this.configuration();
  }

  private configuration() {
    this.app.set("port", process.env.PORT);
    this.app.use(express.json());
    this.app.use(cors(this.corsOptions));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private corsOptions: CorsOptions = {
    origin: function (origin: any, callback) {
      console.log(
        "corsWhitelist.indexOf(origin) !== -1",
        corsWhitelist.indexOf(origin) !== -1
      );
      if (!origin || corsWhitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200,
    credentials: true,
  };

  private async connectDB() {
    this.consume()
  }

  public async consume(): Promise<void> {
    const channel = await RabbitMQ.assertExchangeConsumer();
    await this.consumeMessage(channel);
  }

  private async consumeMessage(channel: Channel) {
    const { queue } = await channel.assertQueue(ExchangeEnum.SubscribeMessage);

    await channel.consume(queue, async (message: ConsumeMessage | null) => {
      if (message) {
        try {
          const payload = message.content.toString() as string;
          const parse: any = JSON.parse(payload);
          if(parse.data?.message?.priority >=7)
          this.io.emit('send_message', JSON.stringify(parse.data.message))

          channel.ack(message);
          return parse.data;
        } catch (error) {
          channel.ack(message);
          console.error(error);
        }
      }
    });
  }

  public Start() {
    this.connectDB();
    this.server.listen(this.app.get("port"));
    console.log(`Server listening on port ${this.app.get("port")}.`);
  }
}

new App().Start();
