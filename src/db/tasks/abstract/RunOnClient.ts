/* tslint:disable no-console */
import { Client } from "pg";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { getOptionsForEnvironment } from "../../environment";

export enum AvailableOperations {
  CREATE_DB = "CREATE",
  DROP_DB = "DROP",
}

export default async function runOnClient(operation: AvailableOperations) {
  try {
    const options = await getOptionsForEnvironment() as PostgresConnectionOptions;

    const { database, host, password, port, ssl, username, url } = options;
    const client = new Client({
      connectionString: url,
      database: username,
      host,
      password,
      port,
      ssl,
      user: username,
    });

    await client.connect();

    const escapedDbName = (database as string).replace(/\"/g, "\"\"");
    await client.query(`${operation} DATABASE "${escapedDbName}"`);

    await client.end();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
