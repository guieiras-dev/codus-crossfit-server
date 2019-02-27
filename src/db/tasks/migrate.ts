import { connect } from '..';
import { Connection } from 'typeorm';

(async function migrate() {
  let connection: Connection | undefined = undefined;

  try {
    connection = await connect();
    await connection.runMigrations({ transaction: true });
    await connection.close();

    process.exit(0);
  } catch (err) {
    if (connection) await (connection as Connection).close();

    console.error(err);
    process.exit(1);
  }
})();
