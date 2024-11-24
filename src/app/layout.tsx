import "@mantine/core/styles.css";

import type { Metadata } from "next";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
	title: "xFlags",
	description: "A feature flags hosting platform",
};

export default function RootLayout({
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
				<MantineProvider defaultColorScheme="dark">
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
