const mongo = require('mongoose');
const Schema = mongo.Schema;

const sueldosSchema = new Schema({
    fecha: String,
    tipo : String,
    operario : String,
    dinero : Number,
},{ versionKey: false });

// Crear el modelo
const Sueldos = mongo.model('Sueldos', sueldosSchema);

module.exports = Sueldos;