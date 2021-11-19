import PostgressConnectionStringParser from "pg-connection-string";
import dotenv from "dotenv";
dotenv.config();

function getProdOptions() {
  const databaseUrl = process.env.DATABASE_URL;
  if (databaseUrl !== undefined) {
    const connectionOptions =
      PostgressConnectionStringParser.parse(databaseUrl);
    const typeOrmOptions = {
      host: connectionOptions.host,
      port: connectionOptions.port,
      username: connectionOptions.user,
      password: connectionOptions.password,
      database: connectionOptions.database,
    };

    return typeOrmOptions;
  }
}
function envString<T>(prodString: T, devString: T): T {
  return process.env.NODE_ENV === "production" ? prodString : devString;
}

module.exports = {
  name: "default",
  type: "postgres",
  host: envString(getProdOptions()?.host, process.env.DB_HOST),
  port: envString(getProdOptions()?.port, process.env.DB_PORT),
  username: envString(getProdOptions()?.username, process.env.DB_USER),
  password: envString(getProdOptions()?.password, process.env.DB_PASSWORD),
  database: envString(getProdOptions()?.database, process.env.DB_NAME),
  synchronize: true,
  logging: false,
  entities: ["src/database/entity/**/*.ts"],
  migrations: ["src/database/migration/**/*.ts"],
  subscribers: ["src/database/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/database/entity",
    migrationsDir: "src/database/migration",
    subscribersDir: "src/database/subscriber",
  },
};
