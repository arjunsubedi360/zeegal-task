import amqpClient, { Channel, Connection } from "amqplib";
import { rabbitmq } from ".";
import { ExchangeEnum } from "../enums";
import { rabbitMq } from "../config";


class RabbitMQ {
  private static instance: RabbitMQ;

  private constructor() {}

  private connection(): Promise<Connection> {
    return amqpClient.connect(rabbitMq.brokerUrl);
  }

  private async createChannel(): Promise<Channel> {
    const connection = await this.connection();
    return connection.createChannel();
  }

  public async assertExchangeConsumer(): Promise<Channel> {
    const channel = await this.createChannel();
    await channel.assertExchange(rabbitmq.exchange, "direct");
    return channel;
  }

  public async assertExchangeProducer({
    exchange,
  }: {
    exchange: ExchangeEnum;
  }): Promise<Channel> {
    const channel = await this.createChannel();
    await channel.assertExchange(exchange, "direct");
    return channel;
  }

  static get(): RabbitMQ {
    if (!RabbitMQ.instance) {
      RabbitMQ.instance = new RabbitMQ();
    }
    return RabbitMQ.instance;
  }
}

const rabbitMQ = RabbitMQ.get();

export { rabbitMQ as RabbitMQ };
