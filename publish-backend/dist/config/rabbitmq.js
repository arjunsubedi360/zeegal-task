"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQ = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
const _1 = require(".");
class RabbitMQ {
    static instance;
    constructor() { }
    connection() {
        return amqplib_1.default.connect({
            protocol: _1.rabbitmq.protocol,
            hostname: _1.rabbitmq.hostname,
            port: _1.rabbitmq.port,
            username: _1.rabbitmq.username,
            password: _1.rabbitmq.password,
        });
    }
    async createChannel() {
        const connection = await this.connection();
        return connection.createChannel();
    }
    async assertExchangeConsumer() {
        const channel = await this.createChannel();
        await channel.assertExchange(_1.rabbitmq.exchange, "direct");
        return channel;
    }
    async assertExchangeProducer({ exchange, }) {
        const channel = await this.createChannel();
        await channel.assertExchange(exchange, "direct");
        return channel;
    }
    static get() {
        if (!RabbitMQ.instance) {
            RabbitMQ.instance = new RabbitMQ();
        }
        return RabbitMQ.instance;
    }
}
const rabbitMQ = RabbitMQ.get();
exports.RabbitMQ = rabbitMQ;
//# sourceMappingURL=rabbitmq.js.map