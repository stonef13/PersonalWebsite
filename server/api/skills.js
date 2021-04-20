const router = require('express').Router()
const {Skills} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const AllSkills = await Skills.findAll()
    res.send(AllSkills)
  } catch (err) {
    next(err)
  }
})

module.exports = router
