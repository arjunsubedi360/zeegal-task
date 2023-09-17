import { ExchangeEnum, QueueEnum } from "../enums/rabbitmqEnum";

export interface RabbitMQPublishInterface<T> {
  exchange: ExchangeEnum;
  queue: QueueEnum;
  data: T;
}

