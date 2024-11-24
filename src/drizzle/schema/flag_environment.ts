import { relations } from "drizzle-orm";
import { boolean, pgTable, timestamp, unique, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { flag } from "./flag";

export const flag_environment = pgTable(
	"flag_environment",
	{
		id: uuid().primaryKey().notNull().defaultRandom(),
		environment: varchar({ length: 80 }).notNull(),
		value: boolean().notNull().default(false),
		flag_id: uuid()
			.notNull()
			.references(() => flag.id, { onDelete: "cascade" }),
		created_at: timestamp().notNull().defaultNow(),
	},
	(table) => ({
		uniqueEnvironment: unique().on(table.flag_id, table.environment),
	}),
);

export const flag_environmentRelations = relations(flag_environment, ({ one }) => ({
	flag: one(flag, {
		fields: [flag_environment.flag_id],
		references: [flag.id],
		relationName: "flag",
	}),
}));

export const CreateFlagEnvironment = createInsertSchema(flag_environment);
export const SelectFlagEnvironment = createSelectSchema(flag_environment);
