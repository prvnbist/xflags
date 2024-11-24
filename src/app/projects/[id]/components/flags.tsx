"use client";

import { Fragment } from "react";

import { Divider, Stack } from "@mantine/core";

import type { IFlag } from "types";

import { deleteFlag } from "../action";
import Flag from "./flag";

export default function Flags({ flags }: { flags: Array<IFlag> }) {
	const onDelete = (id: string) => deleteFlag(id);
	return (
		<Stack gap={0}>
			<Divider />
			{flags.map((f, index) => (
				<Fragment key={f.id}>
					<Flag flag={f} onDelete={() => onDelete(f.id)} />
					{index !== flags.length - 1 && <Divider />}
				</Fragment>
			))}
			<Divider />
		</Stack>
	);
}
