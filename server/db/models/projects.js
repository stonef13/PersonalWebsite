const Sequelize = require('sequelize')
const db = require('../db')

const Projects = db.define('projects', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  projectUrl: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://img.favpng.com/0/5/10/node-computer-icons-chart-symbol-graph-png-favpng-G3hvbLSAgQu2xvQhYuzcEjWA4.jpg'
  }
})

module.exports = Projects
