import { connect } from '../..';
import { Connection } from 'typeorm';

export enum AvailableOperations {
  RUN_MIGRATIONS = "runMigrations",
  UNDO_LAST_MIGRATION = "undoLastMigration",
};

export default async function runOnConnection(operation: AvailableOperations) {
  let connection: Connection | undefined = undefined;

  try {
    connection = await connect();
    await connection[operation]({ transaction: true });
    await connection.close();

    process.exit(0);
  } catch (err) {
    if (connection) await (connection as Connection).close();

    console.error(err);
    process.exit(1);
  }
};
