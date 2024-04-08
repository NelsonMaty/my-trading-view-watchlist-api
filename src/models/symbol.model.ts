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

  async appendSymbolToUserId(userId) {
    const selector = { id: userId };
    const update = {
      $push: {
        symbols: "NYSE:BA",
      },
    };
    return await this.collection.updateOne(selector);
  }
}

export { Symbol };
