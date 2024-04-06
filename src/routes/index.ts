import { Elysia } from "elysia";
import { symbolsRoute } from "./symbols.route";

export const routes = (app: Elysia) => {
  app.group("/symbols_list", symbolsRoute);

  return Promise.resolve(app);
};
