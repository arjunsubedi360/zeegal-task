import { generateRandomMessage, generateRandomPriority } from "../utils";
import { ExchangeEnum, HttpStatusEnum, QueueEnum } from "../enums";
import { RmqMessageProducer } from "../producers";

export class MessageController {
  constructor() {}

  static async sendMessage(): Promise<void> {
    setInterval(async() => {
      await RmqMessageProducer.publishMessage(ExchangeEnum.SubscribeMessage, {
        event: "send-message",
        data: {
          timestamp: new Date().toISOString(),
          message: generateRandomMessage(),
          priority: generateRandomPriority(),
        },
      });
    }, 50); // Adjust the interval to publish 20 messages per second
  }
}
