import { Client } from 'pg';
import { getOptionsFromEnvironment } from '../environment';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

(async function create() {
  try {
    const options = await getOptionsFromEnvironment() as PostgresConnectionOptions;

    const { database, host, password, port, ssl, username, url } = options
    const client = new Client({
      connectionString: url,
      database: username,
      host,
      password,
      port,
      ssl,
      user: username
    });

    await client.connect();

    const escapedDbName = (database as string).replace(/\"/g, '""');
    await client.query(`CREATE DATABASE "${escapedDbName}"`);

    await client.end();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
