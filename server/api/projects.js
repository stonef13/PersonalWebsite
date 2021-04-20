const router = require('express').Router()
const {Projects} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const allProjects = await Projects.findAll()
    res.send(allProjects)
  } catch (err) {
    next(err)
  }
})

module.exports = router
