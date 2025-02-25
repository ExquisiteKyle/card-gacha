const Card = require("../models/card");
const { handleError } = require("../utils/helper");

exports.getAllCards = (req, res, next) => {
  Card.findAll()
    .then((cards) => {
      res.status(200).json(cards);
    })
    .catch((err) => console.error(err));
};

exports.getCard = (req, res, next) => {
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
      res.status(200).json({
        message: "Success",
      });
    })
    .catch((err) => handleError(res, 500, err));
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

exports.deleteCards = (req, res, next) => {
  const ids = req.body.ids;
  Card.destroy({ where: { id: ids } })
    .then((result) => res.status(200).send())
    .catch((err) => console.error(err));
};

exports.addTestData = (req, res, next) => {
  const testData = [
    {
      name: "Raichu",
      description: "Rat Pokemon",
      rarity: 2,
      attack: 400,
      defense: 100,
      image_url: "https://i.imgur.com/HYRmyOs.png",
    },
    {
      name: "Mew",
      description: "Mythical Pokemon",
      rarity: 5,
      attack: 500,
      defense: 1000,
      image_url: "https://i.imgur.com/mT0JnTo.png",
    },
    {
      name: "Rayquaza",
      description: "Legendary Pokemon",
      rarity: 4,
      attack: 800,
      defense: 500,
      image_url: "https://i.imgur.com/1oWFebb.png",
    },
  ];
  Card.bulkCreate(testData)
    .then(() => res.status(200).send())
    .catch((err) => handleError(res, 500, err));
};
