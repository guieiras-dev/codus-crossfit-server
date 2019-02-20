import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "crossfit_development",
  synchronize: true,
  logging: false,
  entities: [
    "dist/entities/**/*.js"
  ],
  migrations: [
    "dist/migrations/**/*.js"
  ],
  subscribers: [
    "dist/subscribers/**/*.js"
  ]
}

export default config;
