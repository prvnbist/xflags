import "./layout.css";
import "@mantine/core/styles.css";

import type { Metadata } from "next";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import theme from "theme";

export const metadata: Metadata = {
	title: "Dashboard | xFlags",
	description: "A feature flags hosting platform",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript defaultColorScheme="dark" />
			</head>
			<body>
				<MantineProvider defaultColorScheme="dark" theme={theme}>
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
