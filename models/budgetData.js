const mongoose = require("mongoose")

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        min: 7
    }
}, { collection: 'budgetData'})

module.exports = mongoose.model('budgetData', budgetSchema)

