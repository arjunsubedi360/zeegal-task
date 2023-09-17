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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsWhitelist = exports.rabbitmq = exports.rabbitMq = exports.serviceName = exports.logLevel = exports.logDir = exports.environment = exports.port = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/**
 * Add required environment variables here.
 * @param {string} name - The name of the environment variable.
 * @param {string | number} value - The value of the environment variable.
 * @returns {string | number} - The value of the environment variable if it exists.
 * @throws {Error} - Throws an error if the environment variable is missing.
 */
function mustExist(name, value) {
    if (value === undefined || value === null || value === '') {
        throw new Error(`Required environment variable ${name} is missing.`);
    }
    return value;
}
exports.port = mustExist('PORT', parseInt(process.env.PORT));
exports.environment = mustExist('ENVIRONMENT', process.env.ENVIRONMENT);
exports.logDir = mustExist('LOG_DIR', process.env.LOG_DIR);
exports.logLevel = mustExist('LOG_LEVEL', process.env.LOG_LEVEL);
exports.serviceName = mustExist('SERVICE_NAME', process.env.SERVICE_NAME);
exports.rabbitMq = {
    exchangeName: process.env.RMQ_EXCHANGE_NAME,
    brokerUrl: process.env.RMQ_BROKER_URL,
    defaultQueue: process.env.RMQ_DEFAULT_QUEUE,
};
exports.rabbitmq = {
    protocol: process.env.RABBITMQ_PROTOCOL,
    hostname: process.env.RABBITMQ_HOSTNAME,
    port: +process.env.RABBITMQ_PORT,
    username: process.env.RABBITMQ_USERNAME,
    password: process.env.RABBITMQ_PASSWORD,
    exchange: process.env.RABBITMQ_EXCHANGE,
};
exports.corsWhitelist = [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:5173',
    'http://localhost:5173',
    'http://localhost:3001',
    'http://localhost:8081',
    'http://localhost:8081/socket.io/',
    '*'
];
__exportStar(require("./rabbitmq"), exports);
//# sourceMappingURL=index.js.map