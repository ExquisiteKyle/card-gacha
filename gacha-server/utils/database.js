const Sequelize = require("sequelize");

const sequalize = new Sequelize("card-gacha", "root", "pumpkineater69", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequalize;
