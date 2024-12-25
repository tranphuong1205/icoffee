// this is the Database interface we defined earlier
import { createPool } from 'mysql2'; // do not use 'mysql2/promises'!
import { Kysely, MysqlDialect } from 'kysely';
import { Database } from './type';

const dialect = new MysqlDialect({
  pool: createPool({
    database: 'itss',
    host: 'battle-ship-phuongxxx971022-4df8.c.aivencloud.com',
    user: 'avnadmin',
    password:'',
    port: 16578,
    connectionLimit: 10,
  }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
});
