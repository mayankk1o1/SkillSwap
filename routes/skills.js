const express = require('express')
const Skill = require('../models/Skill')
const router = express.Router()

router.get('/add', (req, res) => {
    if (!req.session.userId) return res.redirect('/login')
    res.render('addSkill')
})

router.post('/add', async (req, res) => {
    if (!req.session.userId) return res.redirect('/login')
    const skill = new Skill({ title: req.body.title, description: req.body.description, userId: req.session.userId })
    await skill.save()
    res.redirect('/dashboard')
})

module.exports = router
