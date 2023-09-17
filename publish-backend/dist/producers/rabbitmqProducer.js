"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RmqMessageProducer = void 0;
const config_1 = require("../config");
const amqplib_1 = __importDefault(require("amqplib"));
class RmqMessageProducer {
    static instance;
    static get() {
        if (!RmqMessageProducer.instance) {
            RmqMessageProducer.instance = new RmqMessageProducer();
        }
        return RmqMessageProducer.instance;
    }
    async createChannel() {
        const connection = await amqplib_1.default.connect(config_1.rabbitMq.brokerUrl);
        return connection.createChannel();
    }
    // publish message to message broker
    async publishMessage(bindingKey, message) {
        try {
            const channel = await this.createChannel();
            // channel.publish(EXCHANGE_NAME, bindingKey, Buffer.from(message));
            const appQueue = await channel.assertQueue(bindingKey);
            channel.sendToQueue(appQueue.queue, Buffer.from(JSON.stringify(message)));
            console.log(`MESSAGE SENT TO QUEUE: ${appQueue.queue}`);
        }
        catch (error) {
            throw error;
        }
    }
    ;
}
const rmqMessageProducer = RmqMessageProducer.get();
exports.RmqMessageProducer = rmqMessageProducer;
