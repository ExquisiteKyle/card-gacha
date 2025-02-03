const Card = require("../models/card");

exports.getAllCards = (req, res, next) => {
  Card.findAll()
    .then((cards) => {
      res.status(200).json(cards);
    })
    .catch((err) => console.error(err));
};

exports.getCard = (res, res, next) => {
  const id = req.params.cardId;
  Card.findAll({ where: { id } })
    .then(([card]) => {
      res.status(200).json(card);
    })
    .catch((err) => console.error(err));
};

exports.addCard = (req, res, next) => {
  const { name, description, rarity, attack, defense, image_url } = req.body;
  Card.create({
    name,
    description,
    rarity,
    attack,
    defense,
    image_url,
  })
    .then((result) => {
      res.status(200).send();
    })
    .catch((err) => console.error(err));
};

exports.updateCard = (req, res, next) => {
  const { id, name, description, rarity, attack, defense, image_url } =
    req.body;
  Card.findById(id)
    .then((card) => {
      card.name = name;
      card.description = description;
      card.rarity = rarity;
      card.attack = attack;
      card.defense = defense;
      card.image_url = image_url;
      return card.save();
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.error(err));
};

exports.deleteCard = (req, res, next) => {
  const id = req.body.id;
  Card.findById(id)
    .then((card) => card.destroy())
    .then((result) => res.status(200).send())
    .catch((err) => console.error(err));
};
