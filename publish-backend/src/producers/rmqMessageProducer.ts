import { rabbitMq } from "../config";
import amqpClient, { Connection, Channel, ConsumeMessage } from "amqplib";

class RmqMessageProducer {
  private static instance: RmqMessageProducer;

  static get(): RmqMessageProducer {
    if (!RmqMessageProducer.instance) {
      RmqMessageProducer.instance = new RmqMessageProducer();
    }
    return RmqMessageProducer.instance;
  }

  public async createChannel(): Promise<any> {
    try {
      const connection: Connection = await amqpClient.connect(
        rabbitMq.brokerUrl
      );
      return connection.createChannel();
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }

  public async publishMessage(
    bindingKey: string,
    message: { event: string; data: any }
  ): Promise<void> {
    try {
      const channel: Channel = await this.createChannel();

      const appQueue = await channel.assertQueue(bindingKey);
      channel.sendToQueue(appQueue.queue, Buffer.from(JSON.stringify(message)));
      console.log(`MESSAGE SENT TO QUEUE: ${appQueue.queue}`);
    } catch (error) {
      throw error;
    }
  }
}

const rmqMessageProducer = RmqMessageProducer.get();

export { rmqMessageProducer as RmqMessageProducer };
