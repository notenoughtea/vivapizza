const express = require('express');

const router = express.Router();
const { Card, Reference } = require('../db/models');

router
  .route('/cards')
  .get(async (req, res, next) => {
    try {
      const cards = await Card.findAll();
      res.status(200).json(cards);
    } catch (err) {
      res.status(500);
    }
  }
  .post(async (req, res, next) => {
      try {
          if (req.body) {
              const newRoute = await Card.create({
                  title: req.body.title,
                  price: req.body.price,
                  text: req.body.text,
                  // url: url + "/img/" + req.file.filename,
              });
              res.status(200).json(newRoute);
          }
      } catch (err) {
          res.status(500);
      }
  }

);

module.exports = router;
