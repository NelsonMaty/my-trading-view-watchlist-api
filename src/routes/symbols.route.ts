import { Elysia } from "elysia";
import { symbolsController } from "../controllers";

export const symbolsRoute = (app: Elysia) =>
  app
    .get("/", symbolsController.listSymbolsByUserId)
    .post("/replace_symbol", symbolsController.replaceSymbol)
    .post("/replace", symbolsController.replace)
    .post("/remove", symbolsController.removeSymbol)
    .post("/append", symbolsController.appendSymbol);
