class Symbol {
  constructor(db) {
    this.collection = db.collection("symbolsList");
  }

  async findAll() {
    return await this.collection.find().toArray();
  }

  async listSymbolsByUserId(userId) {
    const query = { id: userId };
    return await this.collection.findOne(query);
  }
}

module.exports = Symbol;
