const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars') //view engine like ejs
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')
// Load config
dotenv.config({path: './config/config.env'})

// Passport config
require('./config/passport')(passport)

const app = express()

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Handlebars
app.engine(
    '.hbs',
    exphbs.engine({
      defaultLayout: 'main',
      extname: '.hbs',
    })
  )
app.set('view engine', '.hbs')

// Sessions
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
require('./routes/routes')(app)

const PORT = process.env.PORT || 3000

connectDB().then(
    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port:${PORT}`)
    })
).catch(err => {
    console.error('unable to connect ', err.message)
})


