import { migrate } from "drizzle-orm/mysql2/migrator"
import { connection, db } from "./db.ts"

await migrate(db, { migrationsFolder: "./drizzle" });
await connection.end();
