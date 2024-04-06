import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { routes } from "./src/routes";

const PORT = process.env.PORT || 8081;

const app = new Elysia();
app.use(cors()).use(routes).listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
