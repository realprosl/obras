const mongo = require('mongoose');
const Schema = mongo.Schema;

const materialesSchema = new Schema({
    fecha: String,
    obra : String,
    descripcion : String,
    dinero: Number
},{ versionKey: false });

// Crear el modelo
const Materiales = mongo.model('materiales', materialesSchema);

module.exports = Materiales;