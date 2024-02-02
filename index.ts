import { OrderType, RestTradeTypes, Side, Spot, TimeInForce } from '@binance/connector-typescript';
import { createOrder } from "./functions/createOrder";
import { closeOrder } from "./functions/closeOrder";
import { getPrice } from "./functions/getPrice";
import { bot } from "./src/bot";
import 'dotenv/config';
import axios from 'axios';

export const api_key = process.env.BINANCE_API_KEY;
export const secret_key = process.env.BINANCE_SECRET_KEY;
export let id = 1;
export { createOrder };
export { closeOrder };
export { getPrice };

bot()