import dynamic from "next/dynamic";

import { Center, Space, Title } from "@mantine/core";

import db from "drizzle";

const Flags = dynamic(() => import("./components/flags"));

export default async function Project({ params }: { params: { id: string } }) {
	const { id } = params;

	const project = await db.query.project.findFirst({
		with: {
			flags: {
				with: {
					environments: {
						orderBy: (e, { asc }) => [asc(e.environment)],
					},
				},
			},
		},
		where: (p, { eq }) => eq(p.id, id),
	});

	if (!project)
		return (
			<Center h="100%">
				<Title order={2}>No such project exists.</Title>
			</Center>
		);
	return (
		<>
			<Title order={3}>{project.title}</Title>
			<Space h="md" />
			<Flags flags={project.flags} />
		</>
	);
}
