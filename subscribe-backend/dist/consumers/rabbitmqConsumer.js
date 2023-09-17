"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQConsumer = void 0;
const config_1 = require("../config");
const enums_1 = require("../enums");
class RabbitMQConsumer {
    static instance;
    constructor() { }
    static get() {
        if (!RabbitMQConsumer.instance) {
            RabbitMQConsumer.instance = new RabbitMQConsumer();
        }
        return RabbitMQConsumer.instance;
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
                    channel.ack(message);
                }
                catch (error) {
                    channel.ack(message);
                    console.error(error);
                }
            }
        });
    }
}
const rabbitMQConsumer = RabbitMQConsumer.get();
exports.RabbitMQConsumer = rabbitMQConsumer;
