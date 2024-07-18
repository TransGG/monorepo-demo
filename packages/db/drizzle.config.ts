import CONFIG from "@transgg/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    host: CONFIG.DATABASE.HOST,
    port: CONFIG.DATABASE.PORT,
    user: CONFIG.DATABASE.USERNAME,
    password: CONFIG.DATABASE.PASSWORD,
    database: CONFIG.DATABASE.NAME,
  },
});
