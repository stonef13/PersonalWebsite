const Sequelize = require('sequelize')
const db = require('../db')

const Projects = db.define('projects', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  projectUrl: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT
  }
})

module.exports = Projects
