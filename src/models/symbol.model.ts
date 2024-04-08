class Symbol {
  constructor(db) {
    this.collection = db.collection("symbolsList");
  }

  async findAll() {
    return await this.collection.find().toArray();
  }

  async listSymbolsByUserId(userId) {
    const selector = { id: userId };
    return await this.collection.findOne(selector);
  }

  async appendSymbolToUserId(symbol, userId) {
    const selector = { id: userId };
    const update = {
      $push: {
        symbols: symbol,
      },
    };
    return await this.collection.updateOne(selector, update);
  }

  async replaceListForUserId(newList, userId) {
    const selector = { id: userId };
    const update = {
      $set: {
        symbols: newList,
      },
    };
    return await this.collection.updateOne(selector, update);
  }

  async removeSymbolToUserId(symbol, userId) {
    const selector = { id: userId };
    const update = {
      $pull: {
        symbols: symbol,
      },
    };
    return await this.collection.updateOne(selector, update);
  }
}

export { Symbol };
