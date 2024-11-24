import { IconCircleCheckFilled, IconCircleX, IconTrash } from "@tabler/icons-react";

import { ActionIcon, Button, Card, Group, Title } from "@mantine/core";

import type { IFlag } from "types";

const Status = ({ active, label }: { active: boolean; label: string }) => (
	<Button
		radius={0}
		size="xs"
		color={active ? "green" : "dark"}
		variant={active ? "filled" : "default"}
		leftSection={active ? <IconCircleCheckFilled size={16} /> : <IconCircleX size={16} />}
	>
		{label}
	</Button>
);

export default function Flag({ flag, onDelete }: { flag: IFlag; onDelete: () => void }) {
	return (
		<Card key={flag.id}>
			<Group justify="space-between">
				<Title order={5}>{flag.title}</Title>
				<Group>
					<Group gap="xs">
						{flag.environments.map((e) => (
							<Status key={e.id} active={e.value} label={e.environment} />
						))}
					</Group>
					<Group>
						<ActionIcon title="Delete Flag" variant="subtle" color="red.5" onClick={onDelete}>
							<IconTrash size={16} />
						</ActionIcon>
					</Group>
				</Group>
			</Group>
		</Card>
	);
}
