const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Skill = require('../models/Skill')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))

router.get('/register', (req, res) => res.render('register'))

router.post('/register', async (req, res) => {
    const hashed = await bcrypt.hash(req.body.password, 10)
    const user = new User({ username: req.body.username, email: req.body.email, password: hashed })
    await user.save()
    res.redirect('/login')
})

router.get('/login', (req, res) => res.render('login'))

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        req.session.userId = user._id
        res.redirect('/dashboard')
    } else {
        res.redirect('/login')
    }
})

router.get('/dashboard', async (req, res) => {
    if (!req.session.userId) return res.redirect('/login')
    const skills = await Skill.find({}).populate('userId')
    res.render('dashboard', { skills })
})

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})

module.exports = router
