import db from "drizzle";

export async function GET(
	request: Request,
	{ params }: { params: { flag: string } },
) {
	const { flag: title } = params;

	const project_id = request.headers.get("Project-Id");
	const environment = request.headers.get("Environment");

	if (!project_id || !environment) {
		return new Response(
			JSON.stringify({ error: "Missing required headers." }),
			{ status: 400 },
		);
	}

	const flag = await db.query.flag.findFirst({
		columns: { title: true, value: true },
		where: (f, { and, eq }) =>
			and(
				eq(f.title, title),
				eq(f.project_id, project_id),
				eq(f.environment, environment),
			),
	});

	if (!flag)
		return new Response(JSON.stringify({ error: "No such flag exists." }), {
			status: 400,
		});

	return new Response(JSON.stringify(flag), { status: 200 });
}
