const ReseedService = {
  reseedProducts(db) {
    return db("products")
      .del()
      .then(() => {
        return db("products").insert([
          {
            product_name: "Stone Street",
            product_roast: "Dark",
            price: 15,
            picture_main:
              "https://m.media-amazon.com/images/I/61+ZAEo7T9L._AC_UL640_FMwebp_QL65_.jpg",
            details:
              "Taste Profile: Low acidity, slightly sweet, smooth, well balanced, & bold coffee flavor",
            origin: "Colombia",
            collection: "cold",
            sale: true,
            sale_price: 14,
            featured: true
          }
        ]);
      });
  }
};

module.exports = ReseedService;
