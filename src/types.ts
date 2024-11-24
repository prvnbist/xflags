import type { z } from "zod";

import type { SelectFlag, SelectProject } from "drizzle/schema";

export type IProject = z.infer<typeof SelectProject>;
export type IFlag = z.infer<typeof SelectFlag>;