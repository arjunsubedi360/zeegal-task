"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const utils_1 = require("../utils");
const enums_1 = require("../enums");
const producers_1 = require("../producers");
class MessageController {
    constructor() { }
    static async sendMessage() {
        setInterval(async () => {
            await producers_1.RmqMessageProducer.publishMessage(enums_1.ExchangeEnum.SubscribeMessage, {
                event: "send-message",
                data: {
                    timestamp: new Date().toISOString(),
                    message: (0, utils_1.generateRandomMessage)(),
                    priority: (0, utils_1.generateRandomPriority)(),
                },
            });
        }, 10000); // Adjust the interval to publish 20 messages per second
    }
}
exports.MessageController = MessageController;
//# sourceMappingURL=messageControllers.js.map