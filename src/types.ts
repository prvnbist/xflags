import type { z } from "zod";

import type {
	SelectFlag,
	SelectFlagEnvironment,
	SelectProject,
} from "drizzle/schema";

export type IProject = z.infer<typeof SelectProject>;
export type IEnvironment = z.infer<typeof SelectFlagEnvironment>;
export type IFlag = z.infer<typeof SelectFlag> & {
	environments: Array<IEnvironment>;
};
