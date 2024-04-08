import { client } from "../config/db";
import { Symbol } from "../models";

class SymbolsController {
  constructor() {
    this.symbolModel = new Symbol(client.db("tv"));
  }

  listSymbolsByUserId = () => {
    try {
      // TODO: get userId from url
      const list = this.symbolModel.listSymbolsByUserId(19343430);
      return list;
    } catch (err) {
      return err;
    }
  };

  replaceSymbol({ body }) {
    return JSON.stringify(body);
  }

  appendSymbol = async ({ body }) => {
    try {
      // TODO: get userId from url
      const symbol = body[0];
      const result = await this.symbolModel.appendSymbolToUserId(
        symbol,
        19343430,
      );
      const list = this.symbolModel.listSymbolsByUserId(19343430);
      return list;
    } catch (err) {
      return err;
    }
  };
}

const symbolsController = new SymbolsController();

export { symbolsController };
