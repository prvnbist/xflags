"use client";

import Link from "next/link";

import { Box, Text } from "@mantine/core";

import type { IProject } from "types";

import styles from "./project.module.css";

export default function Project({ project }: { project: IProject }) {
	return (
		<Box h={40} pl="md" component={Link} className={styles.project} href={`/projects/${project.id}`}>
			<Text size="sm">{project.title}</Text>
		</Box>
	);
}
