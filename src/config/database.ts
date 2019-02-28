import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
  database: "crossfit_development",
  entities: [
    "dist/entities/**/*.js",
  ],
  host: "localhost",
  logging: false,
  migrations: [
    "dist/migrations/**/*.js",
  ],
  password: "",
  port: 5432,
  subscribers: [
    "dist/subscribers/**/*.js",
  ],
  synchronize: true,
  type: "postgres",
  username: "postgres",
};

export default config;
