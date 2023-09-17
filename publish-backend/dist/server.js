"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const errorHandler = __importStar(require("./middlewares/errorHandler"));
const logger_1 = __importDefault(require("./utils/logger"));
const controllers_1 = require("./controllers");
class Server {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
    }
    configuration() {
        this.app.set("port", config_1.port);
        this.app.use((0, cors_1.default)(this.corsOptions));
        this.app.use(express_1.default.json());
        //Error Handler
        this.app.use(errorHandler.genericErrorHandler);
        this.app.use(errorHandler.methodNotAllowed);
        this.app.use(errorHandler.notFound);
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
    start() {
        // this.connectDB();
        controllers_1.MessageController.sendMessage();
        this.app.listen(this.app.get("port"), () => logger_1.default.info(`App running on PORT ${this.app.get("port")}`));
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=server.js.map