import { defineConfig } from "drizzle-kit";

import env from "env";

export default defineConfig({
	out: "./src/drizzle/migration",
	schema: "./src/drizzle/schema/index.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
});
