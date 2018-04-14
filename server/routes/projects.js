const express = require('express')
const router = express.Router()
const Project = require('../models/project')

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find({})
    res.status(200).json({ projects })
  } catch(err) {
    res.json({ error: err })
  }
})

router.get('/:id', async (req, res, next) => {
  const { params: { id } } = req
  try {
    const project = await Project.findOne({ _id: id })
    const timesheets = await project.timeSheets()
    res.status(200).json({ project, timesheets })
  } catch(err) {
    res.json({ error: err })
  }
})

module.exports = router
