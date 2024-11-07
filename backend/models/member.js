// models/member.js

module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define('member', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
       
    },
    {
        defaultScope: {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }
    });
  
    return Member;
  };
  