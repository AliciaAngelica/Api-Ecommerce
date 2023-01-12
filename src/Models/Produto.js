const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,

    },
    promotionPrice: {
        type: Number,
        required: true,

    },
    stock: {
        type: String,
        required: true,

    },
    visible: {
        type: Boolean,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    
})


module.exports = mongoose.model('Produto', Schema)