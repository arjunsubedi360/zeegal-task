import amqplib from "amqplib";
import { rabbitmq } from ".";
import { ExchangeEnum } from "../enums";

class RabbitMQ {
  private static instance: RabbitMQ;

  private constructor() {}

  private connection(): Promise<amqplib.Connection> {
    return amqplib.connect({
      protocol: rabbitmq.protocol,
      hostname: rabbitmq.hostname,
      port: rabbitmq.port,
      username: rabbitmq.username,
      password: rabbitmq.password,
    });
  }

  private async createChannel(): Promise<amqplib.Channel> {
    const connection = await this.connection();
    return connection.createChannel();
  }

  public async assertExchangeConsumer(): Promise<amqplib.Channel> {
    const channel = await this.createChannel();
    await channel.assertExchange(rabbitmq.exchange, "direct");
    return channel;
  }

  public async assertExchangeProducer({
    exchange,
  }: {
    exchange: ExchangeEnum;
  }): Promise<amqplib.Channel> {
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
