import db from "drizzle";
import { and, eq } from "drizzle-orm";

import { flag, flag_environment } from "drizzle/schema";

export async function GET(request: Request, { params }: { params: { flag: string } }) {
	const { flag: title } = params;

	const project_id = request.headers.get("Project-Id");
	const environment = request.headers.get("Environment");

	if (!project_id || !environment) {
		return new Response(JSON.stringify({ error: "Missing required headers." }), { status: 400 });
	}

	const [row] = await db
		.select({
			title: flag.title,
			value: flag_environment.value,
		})
		.from(flag)
		.leftJoin(flag_environment, eq(flag_environment.flag_id, flag.id))
		.where(and(eq(flag.title, title), eq(flag.project_id, project_id)));

	if (!row)
		return new Response(JSON.stringify({ error: "No such flag exists." }), {
			status: 400,
		});

	return new Response(JSON.stringify(row), { status: 200 });
}
