import dotenv from 'dotenv';
import { EnvironmentEnum } from '../enums';

dotenv.config();

/**
 * Add required environment variables here.
 * @param {string} name - The name of the environment variable.
 * @param {string | number} value - The value of the environment variable.
 * @returns {string | number} - The value of the environment variable if it exists.
 * @throws {Error} - Throws an error if the environment variable is missing.
 */
function mustExist(name: string, value: any) {
  if (value === undefined || value === null || value === '') {
    throw new Error(`Required environment variable ${name} is missing.`);
  }
  return value;
}

export const port = mustExist('PORT', parseInt(process.env.PORT!)) as number;
export const environment = mustExist('ENVIRONMENT', process.env.ENVIRONMENT!) as EnvironmentEnum;
export const logDir = mustExist('LOG_DIR', process.env.LOG_DIR!) as string;
export const logLevel = mustExist('LOG_LEVEL', process.env.LOG_LEVEL!) as string;
export const serviceName = mustExist('SERVICE_NAME', process.env.SERVICE_NAME!) as string;
export const rabbitMq = {
  exchangeName: process.env.RMQ_EXCHANGE_NAME!,
  brokerUrl: process.env.RMQ_BROKER_URL!,
  defaultQueue: process.env.RMQ_DEFAULT_QUEUE!,
};

export const rabbitmq = {
  protocol: process.env.RABBITMQ_PROTOCOL!,
  hostname: process.env.RABBITMQ_HOSTNAME!,
  port: +process.env.RABBITMQ_PORT!,
  username: process.env.RABBITMQ_USERNAME!,
  password: process.env.RABBITMQ_PASSWORD!,
  exchange: process.env.RABBITMQ_EXCHANGE!,
} as {
  protocol: string;
  hostname: string;
  port: number;
  username: string;
  password: string;
  exchange: string;
};

export const corsWhitelist = [
  'http://127.0.0.1:3000',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://127.0.0.1:5173',
  'http://localhost:5173',
  'http://localhost:3001',
  'http://localhost:8081',
  'http://localhost:8081/socket.io/',
  '*'
] as string[];

export * from './rabbitmq';