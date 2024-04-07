import { client } from "../config/db";
import { Symbol } from "../models";

class SymbolsController {
  constructor() {
    this.symbolModel = new Symbol(client.db("tv"));
    this.listSymbolsByUserId = this.listSymbolsByUserId.bind(this);
  }

  async listSymbolsByUserId() {
    try {
      // TODO: get userId from url
      const list = this.symbolModel.listSymbolsByUserId(19343430);
      return list;
    } catch (err) {
      return err;
    }
  }

  replaceSymbol({ body }) {
    return JSON.stringify(body);
  }
}

const symbolsController = new SymbolsController();

export { symbolsController };
