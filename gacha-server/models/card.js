const Sequelize = require("sequelize");
const sequalize = require("../utils/database");

const Card = sequalize.define("card", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rarity: Sequelize.INTEGER,
  attack: Sequelize.INTEGER,
  defense: Sequelize.INTEGER,
  image_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Card;
