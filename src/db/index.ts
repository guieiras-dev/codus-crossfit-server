import { Connection, ConnectionOptions, createConnection } from "typeorm";
import environment, { getOptionsFromEnvironment } from "./environment"

export async function connect(options: ConnectionOptions | Promise<ConnectionOptions> = getOptionsFromEnvironment()): Promise<Connection> {
  const connectionOptions = await options;
  return createConnection(connectionOptions);
}

export const environments = environment;
