import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { Card, Flex, Stack, Title } from "@mantine/core";

import db from "drizzle";

const Project = dynamic(() => import("./component/project"));

export const metadata: Metadata = {
	title: "Dashboard | xFlags",
	description: "A feature flags hosting platform",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const projects = await db.query.project.findMany({
		orderBy: (project, { asc }) => [asc(project.title)],
	});
	return (
		<Flex h="100%" w="100%" gap="sm" p="sm">
			<Card component="aside" w={380} p={0}>
				<Title order={3} ml="md" my="md">
					Projects
				</Title>
				<Stack gap={0} p={0}>
					{projects.map((project, index) => (
						<Project key={project.id} project={project} />
					))}
				</Stack>
			</Card>
			<Card component="main" w="100%">
				{children}
			</Card>
		</Flex>
	);
}
