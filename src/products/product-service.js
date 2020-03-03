const xss = require("xss");

const ProductService = {
  getAllProducts(db) {
    return db.from("products").select("*");
  },
  getSaleProducts(db) {
    return db
      .from("products")
      .select("*")
      .where({ sale: true });
  },
  getById(db, id) {
    return db
      .from("products")
      .select("*")
      .where({ id: id })
      .first();
  }
};

module.exports = ProductService;
