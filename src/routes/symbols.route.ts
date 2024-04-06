import { Elysia } from "elysia";
import { symbolsController } from "../controllers";

export const symbolsRoute = (app: Elysia) =>
  app
    .get("/", symbolsController.listSymbols)
    .post("/replace_symbol", symbolsController.replaceSymbol);
