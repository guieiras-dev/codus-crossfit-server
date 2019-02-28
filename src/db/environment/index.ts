import { ConnectionOptions, getConnectionOptions } from "typeorm";
import development from "./development.json";
import test from "./test.json";

export function getOptionsForEnvironment(): Promise <ConnectionOptions> {
  switch(process.env.NODE_ENV) {
    case 'production': return getConnectionOptions();
    case 'test': return Promise.resolve(test as ConnectionOptions);
    default: return Promise.resolve(development as ConnectionOptions);
  }
};

export default ({ development, test });
