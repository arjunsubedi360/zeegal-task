"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const config_1 = require("./config");
// import { RabbitMQConsumer } from "./consumers";
const enums_1 = require("./enums");
class App {
    app;
    server;
    io;
    constructor() {
        this.app = (0, express_1.default)();
        this.server = new http_1.default.Server(this.app);
        this.io = new socket_io_1.default.Server(this.server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
            },
            path: "/socket.io",
            serveClient: true,
            connectTimeout: 30000,
        });
        this.io.on("connection", (socket) => {
            console.log("a user connected : " + socket.id);
            // this.io.emit("send_message", { message: "Message from subscibe" });
            socket.on("disconnect", function () {
                console.log("socket disconnected : " + socket.id);
            });
        });
        this.configuration();
    }
    configuration() {
        this.app.set("port", process.env.PORT);
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)(this.corsOptions));
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    corsOptions = {
        origin: function (origin, callback) {
            console.log("corsWhitelist.indexOf(origin) !== -1", config_1.corsWhitelist.indexOf(origin) !== -1);
            if (!origin || config_1.corsWhitelist.indexOf(origin) !== -1) {
                callback(null, true);
            }
            else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        optionsSuccessStatus: 200,
        credentials: true,
    };
    async connectDB() {
        this.consume();
    }
    async consume() {
        const channel = await config_1.RabbitMQ.assertExchangeConsumer();
        await this.consumeMessage(channel);
    }
    async consumeMessage(channel) {
        const { queue } = await channel.assertQueue(enums_1.ExchangeEnum.SubscribeMessage);
        await channel.consume(queue, async (message) => {
            if (message) {
                try {
                    const payload = message.content.toString();
                    const parse = JSON.parse(payload);
                    if (parse.data?.message?.priority >= 7)
                        this.io.emit('send_message', JSON.stringify(parse.data.message));
                    channel.ack(message);
                    return parse.data;
                }
                catch (error) {
                    channel.ack(message);
                    console.error(error);
                }
            }
        });
    }
    Start() {
        this.connectDB();
        this.server.listen(this.app.get("port"));
        console.log(`Server listening on port ${this.app.get("port")}.`);
    }
}
new App().Start();
