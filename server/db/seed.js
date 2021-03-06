require('./config')
const mongoose = require('mongoose')
const User = require('../models/user')
const Timesheet = require('../models/timesheet')
const Project = require('../models/project')
const Testimonial = require('../models/testimonial')
// const addDays = require('date-fns/add_days')

const users = [
  {
    email: 'rushelectric@att.net',
    password: '0915Madonna!!!',
    admin: true,
    name: 'Mike Izykowski'
  },
  {
    email: 'adamberro@gmail.com',
    password: 'abc123',
    admin: false,
    name: 'Adam Berro'
  }
]

const projects = [
  {
    name: 'Seed Project 1'
  },
  {
    name: 'Seed Project 2'
  }
]

const testimonials = [
  {
    name: 'John C. Fakename',
    body: 'Rush electric did a great job! Would recommend! 10/10. Rush electric did a great job! Would recommend! 10/10. Rush electric did a great job! Would recommend! 10/10. Rush electric did a great job! Would recommend! 10/10. '
  },
  {
    name: 'Anonymous',
    body: 'thanks for the really great work! thanks for the really great work! thanks for the really great work! thanks for the really great work! thanks for the really great work! thanks for the really great work!'
  }
]

const seed = async () => {
  try {
    const removedTimesheets = await Timesheet.remove({})
    console.log('removedTimesheets', removedTimesheets)

    const removedProjects = await Project.remove({})
    console.log('removedProjects', removedProjects)

    const removedUsers = await User.remove({})
    console.log('removedUsers', removedUsers)

    const removedTestimonials = await Testimonial.remove({})
    console.log('removedTestimonials', removedTestimonials)

    const seededUsers = await User.create(users)
    console.log('created users', seededUsers)

    // const seededProjects = await Project.create(projects)
    // console.log('created projects', seededProjects)

    // const seededTestimonials = await Testimonial.create(testimonials)
    // console.log('created testimonials', seededTestimonials)

    // const timesheets = [
    //   {
    //     employee: seededUsers[1]._id,
    //     hours: 8,
    //     project: seededProjects[0]._id
    //   },
    //   {
    //     employee: seededUsers[1]._id,
    //     hours: 7,
    //     project: seededProjects[0]._id
    //   },
    //   {
    //     employee: seededUsers[1]._id,
    //     hours: 9,
    //     project: seededProjects[0]._id
    //   },
    //   {
    //     employee: seededUsers[1]._id,
    //     hours: 10,
    //     project: seededProjects[0]._id
    //   },
    //   {
    //     employee: seededUsers[1]._id,
    //     hours: 8,
    //     project: seededProjects[0]._id
    //   },
    //   {
    //     employee: seededUsers[1]._id,
    //     hours: 8,
    //     project: seededProjects[0]._id
    //   },
    //   {
    //     employee: seededUsers[1]._id,
    //     hours: 8,
    //     project: seededProjects[1]._id
    //   },
    //   {
    //     employee: seededUsers[1]._id,
    //     hours: 8,
    //     project: seededProjects[1]._id
    //   }
    // ].map((timesheet, i) => ({ ...timesheet, date: addDays(new Date(), i)}))

    // const seededTimesheets = await Timesheet.create(timesheets)
    // console.log('created timesheets', seededTimesheets)
    process.exit()
  } catch(error) {
    console.log('error seeding db: ', error)
  }
}

seed()
