const Sequelize = require('sequelize')
const db = require('../db')

const Skills = db.define('skills', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT
  }
})

module.exports = Skills
