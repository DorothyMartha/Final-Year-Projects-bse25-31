// models/space.js

module.exports = (sequelize, Sequelize) => {
  const Space = sequelize.define('space', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      spaceName: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      type: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      spaceDescription: {
          type: Sequelize.TEXT,
          allowNull: true,
      },
      createDate: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
      },
  },
  {
      defaultScope: {
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      }
  });

  return Space;
};
