const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'contactdb',
  process.env.DB_USER || 'contactuser',
  process.env.DB_PASS || 'contactpass',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.contact = require('./contact')(sequelize, DataTypes);

module.exports = db;
