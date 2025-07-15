const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Skill', skillSchema)
