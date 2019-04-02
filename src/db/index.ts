import "reflect-metadata";
import { Connection, ConnectionOptions, createConnection } from "typeorm";

import { getOptionsForEnvironment } from "./environment";

export async function connect(
  options: ConnectionOptions | Promise<ConnectionOptions> = getOptionsForEnvironment(),
): Promise<Connection> {
  const connectionOptions = await options;
  return createConnection(connectionOptions);
}
