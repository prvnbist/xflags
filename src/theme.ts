"use client";

import { IBM_Plex_Mono, Inter, Unbounded } from "next/font/google";

import { Table, createTheme } from "@mantine/core";
import type { MantineThemeOverride } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });

const theme: MantineThemeOverride = createTheme({
	primaryShade: 4,
	autoContrast: true,
	primaryColor: "yellow",
	fontFamily: inter.style.fontFamily,
	defaultRadius: 0,
	headings: {
		fontWeight: "400",
		fontFamily: unbounded.style.fontFamily,
	},
});

export default theme;