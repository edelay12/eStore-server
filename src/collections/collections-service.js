const ProductService = {
  hot(db) {
    return db
      .from("products")
      .select("*")
      .where({ collection: "hot" });
  },
  cold(db) {
    return db
      .from("products")
      .select("*")
      .where({ collection: "cold" });
  }
};

module.exports = ProductService;
