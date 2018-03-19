require('./config');
const mongoose = require('mongoose');
const User = require('../models/user');
const TimeSheet = require('../models/timesheet');
const Project = require('../models/project');

const users = [
  {
    email: 'rushelectric@att.net',
    password: 'password',
		admin: true
  },
	{
		email: 'adamberro@gmail.com',
		password: 'abc123',
		admin: false
	}
]

const projects = [
  {
    name: 'Seed Project 1'
  }
]

TimeSheet.remove({}, err => {
	if (err) console.log(err)

  Project.remove({}, err => {
    if (err) console.log(err)

    User.remove({}, err => {
      if (err) console.log(err)

      User.create(users, (err, users) => {
        console.log(users)

        Project.create(projects, (err, projects) => {
          console.log(projects)
          const timesheets = [
            {
              employee: users[0]._id,
              hours: 8,
              project: projects[0]._id
            }
          ]

          TimeSheet.create(timesheets, (err, timesheets) => {
            if (err) console.log(err)

            console.log('db seeded with users', users)
            console.log('db seeded with projects', projects)
            console.log('db seeded with timesheets', timesheets)
          })
        })
      })
    })
  })
})
