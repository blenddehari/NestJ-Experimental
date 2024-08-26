import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import * as dotenv from 'dotenv';

dotenv.config();

import { Options } from '@mikro-orm/core';
import { Book } from './books/books.entity';


console.log('Database Config:', {
  dbName: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
});

const MikroOrmConfig: Options = {
  entities: [Book],
  driver: PostgreSqlDriver,
  dbName: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
//   host: process.env.POSTGRES_HOST,
  host: 'localhost',
  port: parseInt(process.env.POSTGRES_PORT, 10),

};

export default MikroOrmConfig;
