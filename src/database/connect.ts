import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import config from "config";

class Database {
  public connection: Connection | null = null;

  public async connectToDB(): Promise<Connection> {
    try {
      const response = await createConnection();
      this.connection = response;
      console.log("Connected to db!!");
      return response;
    } catch (e) {
      console.error("error connecting to db: ", e);
      process.exit(1);
    }
  }
}

export const db = new Database();
