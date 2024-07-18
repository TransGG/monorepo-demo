import { db } from "@transgg/db";

console.log((await db.query.test.findMany()).map((entry) => entry.id));
process.exit(0);
