import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/flags", (c) => {
  return c.json({
    flags: {},
  });
});

export const GET = handle(app);
