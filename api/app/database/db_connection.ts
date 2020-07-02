import { Database, config } from '../../deps.ts';
import { Type, Career } from '../models/model.ts';

export const client = new Database({
    dialect: "postgres",
    debug: true
  }, {
  database: config().DB_DATABASE,
  host: config().DB_HOST,
  username: config().DB_USERNAME,
  password: config().DB_PASSWORD,
  port: 5432, // optional
});

client.link([Type])