import {
	boolean,
	pgTable,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { project } from "./project";

export const flag = pgTable("flag", {
	id: uuid().primaryKey().notNull().defaultRandom(),
	title: varchar({ length: 80 }).notNull(),
	value: boolean().notNull().default(false),
	environment: varchar({ length: 80 }).notNull(),
	project_id: uuid()
		.notNull()
		.references(() => project.id, { onDelete: "cascade" }),
	created_at: timestamp().notNull().defaultNow(),
});

export const CreateFlag = createInsertSchema(flag);
export const SelectFlag = createSelectSchema(flag);
