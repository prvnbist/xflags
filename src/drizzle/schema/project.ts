import { relations } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { flag } from "./flag";

export const project = pgTable("project", {
	id: uuid().primaryKey().notNull().defaultRandom(),
	title: varchar({ length: 80 }).notNull(),
	created_at: timestamp().notNull().defaultNow(),
});

export const projectRelations = relations(project, ({ many }) => ({
	flags: many(flag),
}));

export const CreateProject = createInsertSchema(project);
export const SelectProject = createSelectSchema(project);
