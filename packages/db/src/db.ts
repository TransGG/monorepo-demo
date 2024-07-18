import CONFIG from "@transgg/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema.ts";

export const connection = await mysql.createConnection({
  host: CONFIG.DATABASE.HOST,
  port: CONFIG.DATABASE.PORT,
  user: CONFIG.DATABASE.USERNAME,
  password: CONFIG.DATABASE.PASSWORD,
  database: CONFIG.DATABASE.NAME,
});

export const db = drizzle(connection, { schema, mode: "default" });
