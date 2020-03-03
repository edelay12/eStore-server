const CartService = {
  checkCart(db, userId) {
    return db("carts")
      .where({ userId })
      .first()
      .then(user => !!user);
  },
  retrieveCart(db, userId) {
    return db("carts")
      .select("cart")
      .where({ userId })
      .first();
  },
  addCart(db, cart, userId) {
    return db
      .insert(cart, userId)
      .into("carts")
      .returning("*")
      .then(rows => {
        return rows[0];
      });
  },
  updateCart(db, userId, cart) {
    return db("carts")
      .where({ userId })
      .update(cart);
  },
  deleteCart(db, userId) {
    return db("carts")
      .where({ userId })
      .delete();
  }
};

module.exports = CartService;
