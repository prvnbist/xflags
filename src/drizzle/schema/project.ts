import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const project = pgTable("project", {
	id: uuid().primaryKey().notNull().defaultRandom(),
	title: varchar({ length: 80 }).notNull(),
	created_at: timestamp().notNull().defaultNow(),
});

export const CreateProject = createInsertSchema(project);
export const SelectProject = createSelectSchema(project);
