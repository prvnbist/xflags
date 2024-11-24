import { relations } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { flag_environment } from "./flag_environment";
import { project } from "./project";

export const flag = pgTable("flag", {
	id: uuid().primaryKey().notNull().defaultRandom(),
	title: varchar({ length: 80 }).notNull(),
	project_id: uuid()
		.notNull()
		.references(() => project.id, { onDelete: "cascade" }),
	created_at: timestamp().notNull().defaultNow(),
});

export const flagRelations = relations(flag, ({ one, many }) => ({
	project: one(project, {
		fields: [flag.project_id],
		references: [project.id],
	}),
	environments: many(flag_environment, {
		relationName: "flag",
	}),
}));

export const CreateFlag = createInsertSchema(flag);
export const SelectFlag = createSelectSchema(flag);
