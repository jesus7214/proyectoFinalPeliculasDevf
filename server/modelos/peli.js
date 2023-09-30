const mongoose = require('mongoose')

const peliSchema  = new mongoose.Schema({
    nombre: String,
    clasificacion: String,
    año: Number,
    precio: Number,
    imagen: String
})

module.exports = mongoose.model('peliculas', peliSchema)
