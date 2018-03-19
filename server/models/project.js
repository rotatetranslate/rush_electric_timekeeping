const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
	details: { type: String }
	name: { type: String, required: true },
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project
