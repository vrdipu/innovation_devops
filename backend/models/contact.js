module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    },
    number: {
      type: DataTypes.STRING
    }
  });
};
