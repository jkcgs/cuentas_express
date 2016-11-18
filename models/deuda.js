var mongoose = require('mongoose');

module.exports = mongoose.model('deudas', { 
    "nombre": String,
    "descripcion": String,
    "fecha_agregado": Date,
    "fecha_pagado": Date,
    "fecha_pagar": Date,
    "monto": Number,
    "usuario": mongoose.Schema.Types.ObjectId
}); 