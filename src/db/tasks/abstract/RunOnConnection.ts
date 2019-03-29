/* tslint:disable no-console */
import { Connection } from "typeorm";
import { connect } from "../..";

export enum AvailableOperations {
  MIGRATE = "runMigrations",
  ROLLBACK = "undoLastMigration",
}

export default async function runOnConnection(operation: AvailableOperations) {
  let connection: Maybe<Connection>;

  try {
    connection = await connect();
    await connection[operation]({ transaction: true });
    await connection.close();

    process.exit(0);
  } catch (err) {
    if (connection) { await (connection as Connection).close(); }

    console.error(err);
    process.exit(1);
  }
}
