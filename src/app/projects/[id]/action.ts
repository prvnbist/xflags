"use server";

import db from "drizzle";
import { eq } from "drizzle-orm";

import { flag } from "drizzle/schema";
import { revalidatePath } from "next/cache";

export const deleteFlag = async (id: string) => {
	const [row] = await db
		.delete(flag)
		.where(eq(flag.id, id))
		.returning({ id: flag.id });

	revalidatePath(`/projects/${row.id}`);

	return row;
};
