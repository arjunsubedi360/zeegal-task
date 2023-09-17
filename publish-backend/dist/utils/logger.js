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
exports.logStream = void 0;
const fs_1 = __importDefault(require("fs"));
const winston_1 = __importStar(require("winston"));
require("winston-daily-rotate-file");
const config_1 = require("../config");
// Create log directory if it does not exist
if (!fs_1.default.existsSync(config_1.logDir)) {
    fs_1.default.mkdirSync(config_1.logDir);
}
/**
 * Create a new winston logger.
 */
const logger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.Console({
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
            level: "info",
        }),
        new winston_1.default.transports.DailyRotateFile({
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
            maxFiles: "14d",
            level: config_1.logLevel,
            dirname: config_1.logDir,
            datePattern: "YYYY-MM-DD",
            filename: "%DATE%-debug.log",
        }),
    ],
});
exports.logStream = {
    /**
     * A writable stream for winston logger.
     */
    write(message) {
        logger.info(message.toString());
    },
};
exports.default = logger;
//# sourceMappingURL=logger.js.map