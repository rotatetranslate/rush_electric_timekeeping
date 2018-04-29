const express = require('express')
const router = express.Router()
const Project = require('../models/project')

// get all projects
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find({})
    res.status(200).json({ projects })
  } catch(err) {
    res.json({ error: err })
  }
})

// get project by id with timesheets
router.get('/:id', async (req, res, next) => {
  try {
    const { params: { id } } = req
    const project = await Project.findOne({ _id: id })
    const timesheets = await project.timeSheets()
    res.status(200).json({ project, timesheets })
  } catch(error) {
    res.json({ error })
  }
})

// create new project
router.post('/', async (req, res, next) => {
  try {
    const { name, details = ''} = req.body
    if (!name) throw new Error('Project name required')

    const createdProject = await Project.create({ name, details })
    res.status(200).json({ successMessage: `Project ${createdProject.name} successfully created!` })
  } catch(error) {
    res.json({ error })
  }
})


// delete project
router.delete('/:id', async (req, res, next) => {
  try {
    const { params: { id } } = req
    const deletedProject = await Project.findOneAndRemove({ _id: id })
    res.status(200).json({ succesMessage: `Successfully deleted project ${deletedProject.name}` })
  } catch(error) {
    res.json({ error })
  }

})

module.exports = router
