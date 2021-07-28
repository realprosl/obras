const mongo = require('mongoose');
const Schema = mongo.Schema;

const gastosPersonalesSchema = new Schema({
    fecha: String,
    descripcion : String,
    metodo : String,
    dinero: Number
},{ versionKey: false });

// Crear el modelo
const GastosPersonales = mongo.model('gastosPersonales', gastosPersonalesSchema);

module.exports = GastosPersonales;