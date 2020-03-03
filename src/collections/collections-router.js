const express = require("express");
const collectionsService = require("./collections-service");

const CollectionsRouter = express.Router();

CollectionsRouter.route("/hot").get((req, res, next) => {
  collectionsService
    .hot(req.app.get("db"))
    .then(products => {
      res.json(products);
    })
    .catch(next);
});

CollectionsRouter.route("/cold").get((req, res, next) => {
  collectionsService
    .cold(req.app.get("db"))
    .then(products => {
      res.json(products);
    })
    .catch(next);
});

module.exports = CollectionsRouter;
