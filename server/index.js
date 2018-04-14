require('dotenv').config()
const express = require('express')
const path = require('path')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const morgan = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')

const PORT = process.env.PORT || 5000

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`)

  // Fork workers.
  for (let i = 0;  i < numCPUs;  i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`)
  })

} else {
  const app = express()

  require('./db/config')

  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')))
  app.use(express.static(path.resolve(__dirname, '../react-ui/src/assets')))

  const authRoutes = require('./routes/auth')
  const mailRoutes = require('./routes/mail')
  const projectRoutes = require('./routes/projects')
  const userRoutes = require('./routes/users')
  // const timesheetRoutes = require('./routes/timesheet')

  app.use('/auth', authRoutes)
  app.use('/mail', mailRoutes)
  app.use('/projects', projectRoutes)
  app.use('/users', userRoutes)
  // app.use('/time', timesheetRoutes)

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'))
  })

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`)
  })
}
