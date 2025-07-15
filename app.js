require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const path = require('path')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const skillRoutes = require('./routes/skills')

const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
    secret: 'skillsecret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}))

app.use('/', authRoutes)
app.use('/skills', skillRoutes)

app.listen(3000)
