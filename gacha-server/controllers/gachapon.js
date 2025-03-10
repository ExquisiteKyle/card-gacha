const Card = require("../models/card");

exports.gachaponDrawSingle = (req, res, next) => {
  Card.findAll()
    .then((cards) => {
      const randomCard = cards[Math.floor(Math.random() * cards.length)];
      res.status(200).json(randomCard);
    })
    .catch((err) => console.error(err));
};

exports.gachaponDrawMulti = (req, res, next) => {
  Card.findAll()
    .then((cards) => {
      // Fixed at 10.
      const draws = 10;
      const stack = [];
      while (stack.length < draws) {
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        console.log(randomCard);
        stack.push(randomCard);
      }
      res.status(200).json(stack);
    })
    .catch((err) => console.error(err));
};
