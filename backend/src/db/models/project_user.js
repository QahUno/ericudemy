'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project_User extends Model {

    static associate(models) {

    }
  }
  Project_User.init({
    projectID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project_User',
  });
  return Project_User;
};